import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShoppingCart, Search, Store, Star, X, Plus, Minus, Trash2 } from 'lucide-react'
import { fetchProducts } from '../api/gameApi'
import { PlatformBadge, StarRating, LoadingGrid, EmptyState } from '../components/ui/GameUI'

const PLATFORMS = [
  { id: 'all', label: 'All' },
  { id: 'pc', label: 'PC' },
  { id: 'steam', label: 'Steam' },
  { id: 'epic', label: 'Epic' },
  { id: 'nintendo', label: 'Nintendo' },
  { id: 'playstation', label: 'PlayStation' },
  { id: 'xbox', label: 'Xbox' },
  { id: 'multi', label: 'Multi' },
]

const SORT_OPTIONS = [
  { id: 'rating', label: 'Top Rated' },
  { id: 'price_asc', label: 'Price: Low to High' },
  { id: 'price_desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
]

function ProductCard({ product, onAddToCart }) {
  const d = product.data
  const hasDiscount = d.original_price && d.original_price > d.price
  const discountPct = hasDiscount ? Math.round((1 - d.price / d.original_price) * 100) : 0

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 flex flex-col">
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <PlatformBadge platform={d.platform} />
          {hasDiscount && (
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-500 text-white">-{discountPct}%</span>
          )}
        </div>
        {d.featured && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-yellow-500/90 text-black text-xs font-bold rounded">
            ⭐ Featured
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg leading-snug mb-1 line-clamp-1">{d.title}</h3>
        <div className="flex items-center gap-3 mb-2">
          <StarRating rating={d.rating} />
          {d.genre && <span className="text-gray-500 text-xs">{d.genre}</span>}
        </div>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">{d.description}</p>
        {d.developer && (
          <p className="text-gray-600 text-xs mb-3">by {d.developer}</p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-white font-extrabold text-xl">${d.price?.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-gray-500 text-sm line-through ml-2">${d.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-purple-500/20"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.data.price * item.qty, 0)

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-md bg-gray-950 border-l border-gray-800 flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h2 className="text-white font-bold text-xl flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-purple-400" />
            Your Cart ({cart.length})
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-700 mb-4" />
              <p className="text-gray-400 font-medium">Your cart is empty</p>
              <p className="text-gray-600 text-sm mt-1">Add some games to get started</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800">
                <img
                  src={item.data.cover_image_url}
                  alt={item.data.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm line-clamp-1">{item.data.title}</h4>
                  <PlatformBadge platform={item.data.platform} className="mt-1" />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-white flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-sm font-medium w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-white flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">${(item.data.price * item.qty).toFixed(2)}</span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="p-1 text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium">Total</span>
              <span className="text-white font-extrabold text-2xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function StorePage({ cart, onAddToCart, onUpdateQty, onRemove }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('rating')
  const [cartOpen, setCartOpen] = useState(false)

  const platform = searchParams.get('platform') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchProducts({ platform: platform !== 'all' ? platform : undefined, limit: 50 })
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [platform])

  const setPlatform = (p) => {
    const params = new URLSearchParams(searchParams)
    if (p === 'all') params.delete('platform')
    else params.set('platform', p)
    setSearchParams(params)
  }

  const filtered = products
    .filter((p) => !search || p.data.title?.toLowerCase().includes(search.toLowerCase()) || p.data.genre?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'rating') return (b.data.rating || 0) - (a.data.rating || 0)
      if (sort === 'price_asc') return (a.data.price || 0) - (b.data.price || 0)
      if (sort === 'price_desc') return (b.data.price || 0) - (a.data.price || 0)
      if (sort === 'newest') return new Date(b.data.release_date || 0) - new Date(a.data.release_date || 0)
      return 0
    })

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Store className="w-5 h-5 text-purple-400" />
            </div>
            <h1 className="text-4xl font-extrabold text-white">Game Store</h1>
          </div>
          <p className="text-gray-400">Buy game keys and digital downloads</p>
        </div>
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
        >
          {SORT_OPTIONS.map(({ id, label }) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
      </div>

      {/* Platform filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {PLATFORMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setPlatform(id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              platform === id
                ? 'bg-purple-600 text-white border-purple-500'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {!loading && (
        <p className="text-gray-500 text-sm mb-6">{filtered.length} game{filtered.length !== 1 ? 's' : ''} available</p>
      )}

      {loading ? (
        <LoadingGrid count={8} />
      ) : filtered.length === 0 ? (
        <EmptyState icon={Store} title="No games found" description="Try adjusting your filters or search query." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
        />
      )}
    </div>
  )
}
