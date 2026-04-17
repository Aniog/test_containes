import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tag, X } from 'lucide-react'
import { fetchDeals } from '../api/gameApi'
import DealCard from '../components/deals/DealCard'
import { LoadingScreen } from '../components/ui/Spinner'
import { Button } from '../components/ui/Button'

const PLATFORMS = ['All', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
const GENRES = ['All', 'Action', 'RPG', 'Shooter', 'Racing', 'Adventure', 'Strategy']

const PLATFORM_STYLES = {
  Steam: 'bg-[#1b2838] text-[#c7d5e0] border-[#4c6b22]',
  Epic: 'bg-[#2d2d2d] text-white border-[#0078f2]',
  'Nintendo Switch': 'bg-[#e4000f] text-white border-[#e4000f]',
  PlayStation: 'bg-[#003087] text-white border-[#003087]',
  Xbox: 'bg-[#107c10] text-white border-[#107c10]',
}

export default function DealsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [platform, setPlatform] = useState(searchParams.get('platform') || 'All')
  const [genre, setGenre] = useState('All')

  const loadDeals = useCallback(async () => {
    setLoading(true)
    try {
      const params = {}
      if (platform !== 'All') params.platform = platform
      if (genre !== 'All') params.genre = genre
      const data = await fetchDeals({ ...params, limit: 50 })
      setDeals(data)
    } catch (err) {
      console.error('Failed to load deals:', err)
    } finally {
      setLoading(false)
    }
  }, [platform, genre])

  useEffect(() => { loadDeals() }, [loadDeals])

  const handlePlatformChange = (p) => {
    setPlatform(p)
    if (p !== 'All') setSearchParams({ platform: p })
    else setSearchParams({})
  }

  const clearFilters = () => {
    setPlatform('All')
    setGenre('All')
    setSearchParams({})
  }

  const hasFilters = platform !== 'All' || genre !== 'All'

  const totalSavings = deals.reduce((sum, d) => sum + (d.data.original_price - d.data.deal_price), 0)

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-10">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="w-7 h-7 text-green-400" />
            <h1 className="text-4xl font-black text-white">Game Deals</h1>
          </div>
          <p className="text-gray-400">Best discounts across all major gaming platforms</p>
          {deals.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-green-900/30 border border-green-700/40 rounded-xl px-4 py-2">
              <span className="text-green-400 font-bold">{deals.length} active deals</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-400 text-sm">Up to ${totalSavings.toFixed(0)} in savings</span>
            </div>
          )}
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PLATFORMS.map(p => (
            <button
              key={p}
              onClick={() => handlePlatformChange(p)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                platform === p
                  ? p === 'All'
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : `${PLATFORM_STYLES[p]} border`
                  : 'bg-gray-900 text-gray-400 border-gray-700 hover:text-white hover:border-gray-500'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {GENRES.map(g => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                genre === g ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-500 hover:text-white hover:bg-gray-700'
              }`}
            >
              {g}
            </button>
          ))}
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-red-400 hover:bg-gray-700 transition-all">
              <X className="w-3 h-3" /> Clear
            </button>
          )}
        </div>

        {/* Results */}
        <p className="text-gray-500 text-sm mb-5">
          {loading ? 'Loading...' : `${deals.length} deal${deals.length !== 1 ? 's' : ''} found`}
        </p>

        {loading ? (
          <LoadingScreen />
        ) : deals.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🏷️</div>
            <p className="text-gray-400 text-lg font-medium">No deals found</p>
            <p className="text-gray-600 text-sm mt-1">Try a different platform or genre</p>
            <Button className="mt-4" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {deals.map(deal => <DealCard key={deal.id} deal={deal} />)}
          </div>
        )}
      </div>
    </div>
  )
}
