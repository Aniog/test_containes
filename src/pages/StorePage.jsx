import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { fetchGames } from '../api/gameApi'
import GameCard from '../components/store/GameCard'
import { LoadingScreen } from '../components/ui/Spinner'
import { Button } from '../components/ui/Button'

const GENRES = ['All', 'Action', 'RPG', 'Strategy', 'Shooter', 'Adventure', 'Racing', 'Sports', 'Simulation']
const PLATFORMS = ['All', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox']
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function StorePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState(searchParams.get('genre') || 'All')
  const [platform, setPlatform] = useState(searchParams.get('platform') || 'All')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const loadGames = useCallback(async () => {
    setLoading(true)
    try {
      const params = {}
      if (genre !== 'All') params.genre = genre
      if (platform !== 'All') params.platform = platform
      if (search) params.search = search
      const data = await fetchGames({ ...params, limit: 50 })
      setGames(data)
    } catch (err) {
      console.error('Failed to load games:', err)
    } finally {
      setLoading(false)
    }
  }, [genre, platform, search])

  useEffect(() => { loadGames() }, [loadGames])

  const sortedGames = [...games].sort((a, b) => {
    const da = a.data, db = b.data
    if (sort === 'price_asc') return (da.sale_price || da.price) - (db.sale_price || db.price)
    if (sort === 'price_desc') return (db.sale_price || db.price) - (da.sale_price || da.price)
    if (sort === 'rating') return (db.rating || 0) - (da.rating || 0)
    return (db.featured ? 1 : 0) - (da.featured ? 1 : 0)
  })

  const clearFilters = () => {
    setGenre('All')
    setPlatform('All')
    setSearch('')
    setSearchParams({})
  }

  const hasFilters = genre !== 'All' || platform !== 'All' || search

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2">Game Store</h1>
          <p className="text-slate-500">Browse and buy the best games across all platforms</p>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-rose-500 text-sm shadow-sm"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-700 text-sm focus:outline-none focus:border-rose-500 shadow-sm"
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <Button variant="outline" size="md" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
            {hasFilters && (
              <Button variant="ghost" size="md" onClick={clearFilters}>
                <X className="w-4 h-4" /> Clear
              </Button>
            )}
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6 space-y-4 shadow-sm">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Genre</p>
              <div className="flex flex-wrap gap-2">
                {GENRES.map(g => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      genre === g ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Platform</p>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map(p => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      platform === p ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-5">
          {loading ? 'Loading...' : `${sortedGames.length} game${sortedGames.length !== 1 ? 's' : ''} found`}
        </p>

        {/* Games Grid */}
        {loading ? (
          <LoadingScreen />
        ) : sortedGames.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🎮</div>
            <p className="text-slate-600 text-lg font-medium">No games found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your filters</p>
            <Button className="mt-4" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {sortedGames.map(game => <GameCard key={game.id} game={game} />)}
          </div>
        )}
      </div>
    </div>
  )
}
