import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Star, Clock, Tag, SlidersHorizontal, Zap } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { deals } from '../data/deals'
import { PLATFORMS } from '../data/platforms'
import PlatformBadge from '../components/ui/PlatformBadge'

const SORT_OPTIONS = [
  { id: 'discount', label: 'Biggest Discount' },
  { id: 'price_asc', label: 'Price: Low to High' },
  { id: 'price_desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
]

const PLATFORM_COLORS = {
  steam: 'border-[#66c0f4]/40 bg-[#1b2838]/60',
  epic: 'border-white/20 bg-gray-800/60',
  nintendo: 'border-red-500/40 bg-red-900/30',
  playstation: 'border-blue-500/40 bg-blue-900/30',
  xbox: 'border-green-500/40 bg-green-900/30',
}

function DealCard({ deal }) {
  const timeLeft = deal.deal_ends_at
    ? formatDistanceToNow(new Date(deal.deal_ends_at), { addSuffix: false })
    : null

  const savings = deal.original_price - deal.sale_price

  return (
    <div className={`group relative bg-gray-900 border rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:scale-[1.01] ${PLATFORM_COLORS[deal.platform] || 'border-white/10'}`}>
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={deal.cover_image_url}
          alt={deal.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          {deal.is_free ? (
            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-xl shadow-lg">
              FREE
            </span>
          ) : (
            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-xl shadow-lg">
              -{deal.discount_percent}%
            </span>
          )}
        </div>

        {/* Platform badge */}
        <div className="absolute bottom-3 left-3">
          <PlatformBadge platform={deal.platform} size="lg" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base leading-snug mb-1 line-clamp-1">
          {deal.game_title}
        </h3>
        <p className="text-gray-500 text-xs mb-1">{deal.genre}</p>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">{deal.description}</p>

        {/* Price row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {deal.is_free ? (
              <span className="text-green-400 font-extrabold text-xl">Free</span>
            ) : (
              <>
                <span className="text-white font-extrabold text-xl">${deal.sale_price.toFixed(2)}</span>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs line-through">${deal.original_price.toFixed(2)}</span>
                  <span className="text-green-400 text-xs font-semibold">Save ${savings.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
          {deal.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-semibold">{deal.rating}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {timeLeft && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Ends in {timeLeft}</span>
            </div>
          )}
          <a
            href={deal.store_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="ml-auto flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            <Tag className="w-3.5 h-3.5" />
            Get Deal
          </a>
        </div>
      </div>
    </div>
  )
}

export default function DealsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState(searchParams.get('platform') || 'all')
  const [sortBy, setSortBy] = useState('discount')
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  useEffect(() => {
    const platform = searchParams.get('platform')
    if (platform) setSelectedPlatform(platform)
  }, [searchParams])

  const handlePlatformChange = (platformId) => {
    setSelectedPlatform(platformId)
    if (platformId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ platform: platformId })
    }
  }

  const filtered = useMemo(() => {
    let result = deals.filter(d => {
      const matchesPlatform = selectedPlatform === 'all' || d.platform === selectedPlatform
      const matchesSearch = !search || d.game_title.toLowerCase().includes(search.toLowerCase()) ||
        (d.genre && d.genre.toLowerCase().includes(search.toLowerCase()))
      const matchesFree = !showFreeOnly || d.is_free
      return matchesPlatform && matchesSearch && matchesFree
    })

    switch (sortBy) {
      case 'discount':
        return result.sort((a, b) => b.discount_percent - a.discount_percent)
      case 'price_asc':
        return result.sort((a, b) => a.sale_price - b.sale_price)
      case 'price_desc':
        return result.sort((a, b) => b.sale_price - a.sale_price)
      case 'rating':
        return result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      default:
        return result
    }
  }, [search, selectedPlatform, sortBy, showFreeOnly])

  const freeCount = deals.filter(d =>
    (selectedPlatform === 'all' || d.platform === selectedPlatform) && d.is_free
  ).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-400" />
          Game Deals
        </h1>
        <p className="text-gray-400">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
      </div>

      {/* Platform tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {PLATFORMS.map(p => (
          <button
            key={p.id}
            onClick={() => handlePlatformChange(p.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedPlatform === p.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-gray-900 border border-white/10 text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Filters bar */}
      <div className="bg-gray-900 border border-white/10 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-gray-800 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Free only toggle */}
        <button
          onClick={() => setShowFreeOnly(!showFreeOnly)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex-shrink-0 ${
            showFreeOnly
              ? 'bg-green-600 text-white'
              : 'bg-gray-800 border border-white/10 text-gray-400 hover:text-white'
          }`}
        >
          <span>🎁</span>
          Free Only {freeCount > 0 && `(${freeCount})`}
        </button>
      </div>

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-6">
        Showing <span className="text-white font-medium">{filtered.length}</span> deals
        {selectedPlatform !== 'all' && (
          <span> on <span className="text-indigo-400 font-medium capitalize">{selectedPlatform}</span></span>
        )}
      </p>

      {/* Deals grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🎮</div>
          <h3 className="text-white font-semibold text-lg mb-2">No deals found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </div>
  )
}
