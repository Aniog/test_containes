import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ExternalLink, Clock, Flame } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { PlatformBadge, DiscountBadge, LoadingSpinner, SectionHeader } from '../components/ui/GameUI.jsx'
import { formatDistanceToNow } from 'date-fns'
import { PLATFORM_CONFIG } from '../components/ui/GameUI.jsx'

const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox']

function DiscountCard({ discount }) {
  const d = getSchemaData(discount)
  const isFree = d.sale_price === 0
  const savings = d.original_price - d.sale_price

  return (
    <div className="bg-[#1a1d27] border border-[#2a2d3e] rounded-xl p-5 hover:border-[#4f8ef7]/50 hover:shadow-lg hover:shadow-[#4f8ef7]/10 transition-all duration-200 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <PlatformBadge platform={d.platform} />
            {d.genre && <span className="text-slate-500 text-xs">{d.genre}</span>}
          </div>
          <h3 className="text-white font-semibold text-base leading-snug">{d.game_title}</h3>
        </div>
        <DiscountBadge percent={d.discount_percent} />
      </div>

      <div className="flex items-center justify-between">
        <div>
          {isFree ? (
            <span className="text-green-400 font-black text-2xl">FREE</span>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-white font-black text-2xl">${d.sale_price?.toFixed(2)}</span>
              <span className="text-slate-500 text-sm line-through">${d.original_price?.toFixed(2)}</span>
            </div>
          )}
          {!isFree && savings > 0 && (
            <p className="text-green-400 text-xs mt-0.5">Save ${savings.toFixed(2)}</p>
          )}
        </div>
        {d.store_url && (
          <a
            href={d.store_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            Get Deal <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {d.sale_ends_at && (
        <div className="flex items-center gap-1.5 text-xs text-slate-500 border-t border-[#2a2d3e] pt-3">
          <Clock className="w-3 h-3" />
          Expires {formatDistanceToNow(new Date(d.sale_ends_at), { addSuffix: true })}
        </div>
      )}
    </div>
  )
}

function PlatformSection({ platform, discounts }) {
  const cfg = PLATFORM_CONFIG[platform] || PLATFORM_CONFIG.general
  if (discounts.length === 0) return null
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-3 h-3 rounded-full ${cfg.dot}`} />
        <h2 className="text-white font-bold text-xl">{cfg.label}</h2>
        <span className="text-slate-500 text-sm">({discounts.length} deals)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {discounts.map(d => <DiscountCard key={d.id} discount={d} />)}
      </div>
    </section>
  )
}

export default function Discounts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)

  const activePlatform = searchParams.get('platform') || 'all'

  useEffect(() => {
    async function load() {
      setLoading(true)
      let query = client.from('Discounts').select('*').eq('is_active', true).order('discount_percent', { ascending: false }).limit(50)
      if (activePlatform !== 'all') query = query.eq('platform', activePlatform)
      const { data } = await query
      setDiscounts(getRows(data))
      setLoading(false)
    }
    load()
  }, [activePlatform])

  function setFilter(val) {
    const p = new URLSearchParams(searchParams)
    if (val === 'all') p.delete('platform')
    else p.set('platform', val)
    setSearchParams(p)
  }

  const byPlatform = PLATFORMS.slice(1).reduce((acc, p) => {
    acc[p] = discounts.filter(d => getSchemaData(d).platform === p)
    return acc
  }, {})

  const topDeals = [...discounts].sort((a, b) => getSchemaData(b).discount_percent - getSchemaData(a).discount_percent).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      {/* Header */}
      <div className="bg-[#13161e] border-b border-[#2a2d3e]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-2">
            <Flame className="w-6 h-6 text-orange-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Game Deals & Discounts</h1>
          </div>
          <p className="text-slate-400">Best prices across Steam, Epic Games, Nintendo, PlayStation & Xbox</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 space-y-12">
        {/* Platform filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {PLATFORMS.map(p => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${
                activePlatform === p
                  ? 'bg-[#4f8ef7] text-white shadow-lg shadow-[#4f8ef7]/25'
                  : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white hover:border-[#4f8ef7]/50'
              }`}
            >
              {p === 'all' ? 'All Platforms' : p === 'playstation' ? 'PlayStation' : p === 'nintendo' ? 'Nintendo' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        {loading ? <LoadingSpinner /> : discounts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No active deals found</p>
          </div>
        ) : (
          <>
            {/* Top deals highlight */}
            {activePlatform === 'all' && topDeals.length > 0 && (
              <section>
                <SectionHeader title="🔥 Top Deals" subtitle="Biggest discounts right now" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {topDeals.map(d => <DiscountCard key={d.id} discount={d} />)}
                </div>
              </section>
            )}

            {/* By platform */}
            {activePlatform === 'all' ? (
              <div className="space-y-12">
                {PLATFORMS.slice(1).map(p => (
                  <PlatformSection key={p} platform={p} discounts={byPlatform[p] || []} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {discounts.map(d => <DiscountCard key={d.id} discount={d} />)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
