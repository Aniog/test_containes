import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShoppingCart, Star, Search, Filter, X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { fetchStoreProducts } from '../api/gameApi.js'
import { PLATFORM_CONFIG } from '../lib/utils.js'

const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox']

function ProductCard({ product, onAddToCart, cartItem }) {
  const fields = product.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.steam
  const hasDiscount = fields.discount_percent > 0

  return (
    <div className="group bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/10 flex flex-col">
      {/* Cover */}
      <div className="relative h-44 bg-gradient-to-br from-[#22222f] to-[#1a1a24] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-10">🎮</div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent" />
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            -{fields.discount_percent}%
          </div>
        )}
        {fields.is_featured && (
          <div className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${platform.badge}`}>
            {platform.label}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-slate-100 font-bold text-sm mb-1 line-clamp-1 group-hover:text-violet-300 transition-colors">
          {fields.title}
        </h3>
        {fields.genre && <p className="text-slate-600 text-xs mb-2">{fields.genre}</p>}
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
          {fields.description}
        </p>

        {fields.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-3 h-3 ${s <= Math.round(fields.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`}
              />
            ))}
            <span className="text-amber-400 text-xs font-semibold ml-1">{fields.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-slate-100 font-extrabold text-lg">${fields.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-slate-600 text-xs line-through ml-2">${fields.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
              cartItem
                ? 'bg-violet-500/20 text-violet-400 border border-violet-500/40'
                : 'bg-violet-600 hover:bg-violet-700 text-white'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {cartItem ? `In Cart (${cartItem.qty})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-sm bg-[#1a1a24] border-l border-[#2d2d3d] flex flex-col h-full">
        <div className="flex items-center justify-between p-5 border-b border-[#2d2d3d]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-violet-400" />
            <h2 className="text-slate-100 font-bold text-lg">Your Cart</h2>
            <span className="bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cart.length}</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-slate-600">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-[#22222f] rounded-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2d2d3d] rounded-lg flex items-center justify-center text-xl shrink-0">🎮</div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-100 text-sm font-semibold line-clamp-1">{item.title}</p>
                  <p className="text-violet-400 text-sm font-bold">${(item.price * item.qty).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty - 1)}
                    className="w-6 h-6 bg-[#2d2d3d] hover:bg-[#3d3d4d] text-slate-300 rounded flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-slate-100 text-sm w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    className="w-6 h-6 bg-[#2d2d3d] hover:bg-[#3d3d4d] text-slate-300 rounded flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="w-6 h-6 text-red-500 hover:text-red-400 ml-1 flex items-center justify-center transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-[#2d2d3d]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 font-semibold">Total</span>
              <span className="text-slate-100 font-extrabold text-xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-lg transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Store({ cart, onAddToCart, onUpdateQty, onRemoveFromCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)

  const platform = searchParams.get('platform') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchStoreProducts({ platform, limit: 50 })
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [platform])

  const setFilter = (value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete('platform')
    else params.set('platform', value)
    setSearchParams(params)
  }

  const filtered = search
    ? products.filter((p) =>
        p.data.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.data.genre?.toLowerCase().includes(search.toLowerCase())
      )
    : products

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen bg-[#0f0f13] pt-24 pb-16">
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={onUpdateQty}
          onRemove={onRemoveFromCart}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight mb-2">Game Store</h1>
            <p className="text-slate-500">Browse and buy games across all platforms</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#1a1a24] border border-[#2d2d3d] hover:border-violet-500/50 text-slate-100 font-semibold px-4 py-2.5 rounded-lg transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-violet-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2d2d3d] text-slate-100 placeholder-slate-600 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Platform filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {PLATFORMS.map((p) => {
            const cfg = PLATFORM_CONFIG[p] || PLATFORM_CONFIG.all
            return (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  platform === p
                    ? 'bg-violet-600 text-white'
                    : `bg-[#1a1a24] border border-[#2d2d3d] ${cfg.color} hover:border-violet-500/40`
                }`}
              >
                {p === 'all' ? 'All Platforms' : cfg.label}
              </button>
            )
          })}
        </div>

        {/* Products */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <div className="text-5xl mb-4">🎮</div>
            <p className="text-lg font-semibold text-slate-500">No games found</p>
          </div>
        ) : (
          <>
            <p className="text-slate-600 text-sm mb-4">{filtered.length} games</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((product) => {
                const cartItem = cart.find((c) => c.id === product.id)
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    cartItem={cartItem}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
