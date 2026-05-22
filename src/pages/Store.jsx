import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ShoppingCart, X, Plus, Minus, Trash2, CreditCard, Check } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { PlatformBadge, DiscountBadge, StarRating, LoadingSpinner } from '../components/ui/GameUI.jsx'

const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox']
const GENRES = ['all', 'Action RPG', 'RPG', 'Action Adventure', 'FPS', 'Racing', 'Metroidvania']
const SORT_OPTIONS = [
  { value: 'rating', label: 'Top Rated' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'new', label: 'New Releases' },
]

function GameCard({ game, onAddToCart, inCart }) {
  const d = getSchemaData(game)
  return (
    <div className="group bg-[#1a1d27] border border-[#2a2d3e] rounded-xl overflow-hidden hover:border-[#4f8ef7]/50 hover:shadow-xl hover:shadow-[#4f8ef7]/10 transition-all duration-200 flex flex-col">
      <div className="aspect-[3/4] bg-gradient-to-br from-[#1f2235] to-[#13161e] relative flex items-center justify-center">
        <div className="text-center px-4">
          <PlatformBadge platform={d.platform} />
          <p className="text-slate-600 text-xs mt-2">{d.genre}</p>
        </div>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {d.is_new && <span className="bg-[#4f8ef7] text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>}
          {d.discount_percent > 0 && <DiscountBadge percent={d.discount_percent} />}
        </div>
        {d.is_featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs font-bold px-2 py-0.5 rounded">★ TOP</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{d.title}</h3>
        <p className="text-slate-500 text-xs mb-2">{d.developer}</p>
        {d.rating && <StarRating rating={d.rating} />}
        <p className="text-slate-400 text-xs line-clamp-2 mt-2 mb-3 flex-1">{d.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-white font-bold text-lg">${d.price?.toFixed(2)}</span>
            {d.original_price && d.original_price > d.price && (
              <span className="text-slate-500 text-xs line-through ml-1.5">${d.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(game)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all ${
              inCart
                ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                : 'bg-[#4f8ef7] hover:bg-[#3b7de8] text-white'
            }`}
          >
            {inCart ? <><Check className="w-3 h-3" /> Added</> : <><ShoppingCart className="w-3 h-3" /> Add</>}
          </button>
        </div>
      </div>
    </div>
  )
}

function CartPanel({ cart, onUpdateQty, onRemove, onClose, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + getSchemaData(item.game).price * item.qty, 0)
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-md bg-[#13161e] border-l border-[#2a2d3e] flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-[#2a2d3e]">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#4f8ef7]" />
            Your Cart ({cart.length})
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">Your cart is empty</p>
              <p className="text-slate-600 text-sm mt-1">Add some games to get started</p>
            </div>
          ) : cart.map(item => {
            const d = getSchemaData(item.game)
            return (
              <div key={item.game.id} className="flex gap-3 bg-[#1a1d27] border border-[#2a2d3e] rounded-xl p-3">
                <div className="w-14 h-14 bg-[#1f2235] rounded-lg flex items-center justify-center flex-shrink-0">
                  <PlatformBadge platform={d.platform} size="xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold line-clamp-1">{d.title}</p>
                  <p className="text-slate-500 text-xs">{d.platform}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onUpdateQty(item.game.id, item.qty - 1)} className="w-6 h-6 bg-[#2a2d3e] hover:bg-[#3a3d4e] text-white rounded flex items-center justify-center transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-sm font-medium w-4 text-center">{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.game.id, item.qty + 1)} className="w-6 h-6 bg-[#2a2d3e] hover:bg-[#3a3d4e] text-white rounded flex items-center justify-center transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">${(d.price * item.qty).toFixed(2)}</span>
                      <button onClick={() => onRemove(item.game.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-[#2a2d3e] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white font-bold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#4f8ef7]/25"
            >
              <CreditCard className="w-5 h-5" />
              Checkout — ${total.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Store({ cart, onAddToCart, onUpdateQty, onRemove }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutDone, setCheckoutDone] = useState(false)

  const platform = searchParams.get('platform') || 'all'
  const genre = searchParams.get('genre') || 'all'
  const sort = searchParams.get('sort') || 'rating'
  const filterNew = searchParams.get('filter') === 'new'
  const filterSale = searchParams.get('filter') === 'sale'

  useEffect(() => {
    async function load() {
      setLoading(true)
      let query = client.from('Games').select('*').limit(50)
      if (platform !== 'all') query = query.eq('platform', platform)
      const { data } = await query
      setGames(getRows(data))
      setLoading(false)
    }
    load()
  }, [platform])

  function setFilter(key, val) {
    const p = new URLSearchParams(searchParams)
    if (val === 'all' || val === '') p.delete(key)
    else p.set(key, val)
    setSearchParams(p)
  }

  let filtered = games
  if (search) filtered = filtered.filter(g => {
    const d = getSchemaData(g)
    return d.title?.toLowerCase().includes(search.toLowerCase()) ||
      d.genre?.toLowerCase().includes(search.toLowerCase()) ||
      d.developer?.toLowerCase().includes(search.toLowerCase())
  })
  if (genre !== 'all') filtered = filtered.filter(g => getSchemaData(g).genre === genre)
  if (filterNew) filtered = filtered.filter(g => getSchemaData(g).is_new)
  if (filterSale) filtered = filtered.filter(g => getSchemaData(g).discount_percent > 0)

  filtered = [...filtered].sort((a, b) => {
    const da = getSchemaData(a), db = getSchemaData(b)
    if (sort === 'rating') return (db.rating || 0) - (da.rating || 0)
    if (sort === 'price_asc') return (da.price || 0) - (db.price || 0)
    if (sort === 'price_desc') return (db.price || 0) - (da.price || 0)
    if (sort === 'discount') return (db.discount_percent || 0) - (da.discount_percent || 0)
    if (sort === 'new') return (db.is_new ? 1 : 0) - (da.is_new ? 1 : 0)
    return 0
  })

  const cartIds = new Set(cart.map(i => i.game.id))
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  function handleCheckout() {
    setCheckoutDone(true)
    setTimeout(() => setCheckoutDone(false), 3000)
    setCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      {/* Header */}
      <div className="bg-[#13161e] border-b border-[#2a2d3e]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Game Store</h1>
              <p className="text-slate-400">Buy games across all platforms at the best prices</p>
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {checkoutDone && (
        <div className="bg-green-600/20 border-b border-green-600/30 text-green-400 text-center py-3 text-sm font-medium">
          ✓ Order placed successfully! Thank you for your purchase.
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#1a1d27] border border-[#2a2d3e] text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#4f8ef7] transition-colors"
              />
            </div>
            {/* Sort */}
            <select
              value={sort}
              onChange={e => setFilter('sort', e.target.value)}
              className="bg-[#1a1d27] border border-[#2a2d3e] text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4f8ef7] transition-colors"
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Platform tabs */}
          <div className="flex gap-2 flex-wrap">
            {PLATFORMS.map(p => (
              <button
                key={p}
                onClick={() => setFilter('platform', p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  platform === p
                    ? 'bg-[#4f8ef7] text-white'
                    : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white hover:border-[#4f8ef7]/50'
                }`}
              >
                {p === 'all' ? 'All' : p === 'playstation' ? 'PlayStation' : p === 'nintendo' ? 'Nintendo' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>

          {/* Genre + quick filters */}
          <div className="flex gap-2 flex-wrap">
            {GENRES.map(g => (
              <button
                key={g}
                onClick={() => setFilter('genre', g)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  genre === g
                    ? 'bg-purple-600 text-white'
                    : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white hover:border-purple-500/50'
                }`}
              >
                {g === 'all' ? 'All Genres' : g}
              </button>
            ))}
            <button
              onClick={() => { const p = new URLSearchParams(searchParams); filterNew ? p.delete('filter') : p.set('filter', 'new'); setSearchParams(p) }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filterNew ? 'bg-[#4f8ef7] text-white' : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white'}`}
            >
              New Releases
            </button>
            <button
              onClick={() => { const p = new URLSearchParams(searchParams); filterSale ? p.delete('filter') : p.set('filter', 'sale'); setSearchParams(p) }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filterSale ? 'bg-orange-500 text-white' : 'bg-[#1a1d27] text-slate-400 border border-[#2a2d3e] hover:text-white'}`}
            >
              On Sale
            </button>
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-6">{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</p>

        {loading ? <LoadingSpinner /> : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No games found</p>
            <p className="text-slate-600 text-sm mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {filtered.map(g => (
              <GameCard
                key={g.id}
                game={g}
                onAddToCart={onAddToCart}
                inCart={cartIds.has(g.id)}
              />
            ))}
          </div>
        )}
      </div>

      {cartOpen && (
        <CartPanel
          cart={cart}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  )
}
