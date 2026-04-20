import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Star, ShoppingCart, Filter, SlidersHorizontal } from 'lucide-react'
import { Card, Badge, Button, Input, Select, Skeleton } from '@/components/ui/index'
import { PLATFORM_BADGE_VARIANTS, PLATFORMS } from '@/lib/constants'
import { fetchGames, createOrder } from '@/api/gameApi'

const GENRES = ['All', 'Action RPG', 'RPG', 'Action Adventure', 'Roguelike', 'Racing', 'Strategy', 'Shooter', 'Sports', 'Indie']
const SORT_OPTIONS = [
  { value: 'rating', label: 'Top Rated' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'discount', label: 'Biggest Discount' },
]

function GameCard({ game, onAddToCart }) {
  const d = game.data
  const hasDiscount = d.discount_percent > 0
  const displayPrice = hasDiscount ? d.sale_price : d.price

  return (
    <Card className="group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'}
          alt={d.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{d.discount_percent}%
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
            d.platform === 'Steam' ? 'bg-[#1b2838] text-[#c7d5e0] border border-[#4c6b22]' :
            d.platform === 'Epic' ? 'bg-gray-900 text-white border border-gray-600' :
            d.platform === 'Nintendo' ? 'bg-red-700 text-white' :
            d.platform === 'PlayStation' ? 'bg-blue-800 text-white' :
            d.platform === 'Xbox' ? 'bg-green-800 text-white' :
            'bg-purple-800 text-white'
          }`}>{d.platform}</span>
        </div>
        {!d.in_stock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-sm bg-gray-900/80 px-3 py-1 rounded">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2">{d.title}</h3>
        <p className="text-gray-500 text-xs mb-1">{d.genre}</p>
        {d.developer && <p className="text-gray-600 text-xs mb-2">{d.developer}</p>}
        {d.rating && (
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.round(d.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'}`} />
            ))}
            <span className="text-yellow-400 text-xs ml-1">{d.rating.toFixed(1)}</span>
          </div>
        )}
        <div className="mt-auto flex items-center justify-between gap-2">
          <div>
            {hasDiscount ? (
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">${displayPrice?.toFixed(2)}</span>
                  <span className="text-gray-500 text-xs line-through">${d.price?.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <span className="text-white font-bold">${d.price?.toFixed(2)}</span>
            )}
          </div>
          <Button
            size="sm"
            onClick={() => onAddToCart(game)}
            disabled={!d.in_stock}
            className="shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {d.in_stock ? 'Add' : 'N/A'}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function Store({ onAddToCart, cart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('rating')
  const [showCart, setShowCart] = useState(false)

  const platform = searchParams.get('platform') || 'All'
  const genre = searchParams.get('genre') || 'All'
  const saleOnly = searchParams.get('sale') === 'true'

  const loadGames = useCallback(async () => {
    setLoading(true)
    console.log('[Store] Loading games...', { platform, genre })
    try {
      const { list } = await fetchGames({
        platform: platform !== 'All' ? platform : undefined,
        limit: 50,
      })
      setGames(list)
      console.log('[Store] Games loaded:', list.length)
    } catch (err) {
      console.error('[Store] Error:', err)
    } finally {
      setLoading(false)
    }
  }, [platform])

  useEffect(() => {
    loadGames()
  }, [loadGames])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'All' || value === 'false' || !value) params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  let filtered = games.filter((g) => {
    const d = g.data
    if (search && !d.title?.toLowerCase().includes(search.toLowerCase())) return false
    if (genre !== 'All' && d.genre !== genre) return false
    if (saleOnly && !d.discount_percent) return false
    return true
  })

  // Sort
  filtered = [...filtered].sort((a, b) => {
    const da = a.data, db = b.data
    if (sort === 'rating') return (db.rating || 0) - (da.rating || 0)
    if (sort === 'price_asc') return (da.sale_price || da.price || 0) - (db.sale_price || db.price || 0)
    if (sort === 'price_desc') return (db.sale_price || db.price || 0) - (da.sale_price || da.price || 0)
    if (sort === 'discount') return (db.discount_percent || 0) - (da.discount_percent || 0)
    return 0
  })

  const cartTotal = cart.reduce((sum, item) => {
    const price = item.data.sale_price || item.data.price || 0
    return sum + price
  }, 0)

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Game Store</h1>
            <p className="text-gray-400">Buy games directly — best prices guaranteed</p>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cart panel */}
        {showCart && (
          <CartPanel cart={cart} total={cartTotal} onClose={() => setShowCart(false)} />
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input placeholder="Search games..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={platform} onChange={(e) => updateFilter('platform', e.target.value)} className="sm:w-44">
            <option value="All">All Platforms</option>
            {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
            <option value="Multi-Platform">Multi-Platform</option>
          </Select>
          <Select value={genre} onChange={(e) => updateFilter('genre', e.target.value)} className="sm:w-40">
            {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
          </Select>
          <Select value={sort} onChange={(e) => setSort(e.target.value)} className="sm:w-48">
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </Select>
        </div>

        {/* Platform tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {['All', ...PLATFORMS, 'Multi-Platform'].map((p) => (
            <button
              key={p}
              onClick={() => updateFilter('platform', p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                platform === p
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => updateFilter('sale', saleOnly ? 'false' : 'true')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              saleOnly ? 'bg-red-600 text-white border-red-500' : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
            }`}
          >
            On Sale
          </button>
        </div>

        {!loading && (
          <p className="text-gray-500 text-sm mb-6">{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-48 w-full rounded-none" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-8 w-full mt-4" />
                </div>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No games found.</p>
            <p className="text-gray-600 text-sm mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CartPanel({ cart, total, onClose }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCheckout = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createOrder({
        customer_name: form.name,
        customer_email: form.email,
        items: cart.map((g) => ({
          game_id: g.id,
          game_title: g.data.title,
          platform: g.data.platform,
          price: g.data.sale_price || g.data.price,
          quantity: 1,
        })),
        total_amount: total,
        status: 'pending',
      })
      setSuccess(true)
      console.log('[Cart] Order placed successfully')
    } catch (err) {
      console.error('[Cart] Order error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mb-8 bg-gray-900 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-lg">Your Cart ({cart.length})</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-sm">Close</button>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
            {cart.map((game, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                <img src={game.data.cover_image_url} alt={game.data.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{game.data.title}</p>
                  <p className="text-gray-500 text-xs">{game.data.platform}</p>
                </div>
                <span className="text-white font-bold text-sm shrink-0">
                  ${(game.data.sale_price || game.data.price)?.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-700 mb-4">
            <span className="text-gray-400 font-medium">Total</span>
            <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
          </div>
          {!checkoutOpen && !success && (
            <Button onClick={() => setCheckoutOpen(true)} className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          )}
          {checkoutOpen && !success && (
            <form onSubmit={handleCheckout} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button type="submit" disabled={submitting} className="w-full" size="lg">
                {submitting ? 'Placing Order...' : `Place Order — $${total.toFixed(2)}`}
              </Button>
            </form>
          )}
          {success && (
            <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 text-center">
              <p className="text-green-400 font-semibold">Order placed successfully!</p>
              <p className="text-gray-400 text-sm mt-1">Check your email for confirmation.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
