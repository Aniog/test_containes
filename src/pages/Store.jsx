import { useEffect, useState } from 'react'
import { Search, Star, ShoppingCart, X, Filter, Trash2, CreditCard } from 'lucide-react'
import { fetchStoreGames } from '../api/storeGames.js'

const GENRES = ['All', 'Action', 'RPG', 'Strategy', 'Sports', 'Adventure', 'Simulation', 'Horror', 'Puzzle', 'Racing']

const PLACEHOLDER_COVERS = [
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80',
  'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&q=80',
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
]

function GameCard({ game, index, onAddToCart }) {
  const fields = game.data || game
  const imgSrc = fields.cover_image_url || PLACEHOLDER_COVERS[index % PLACEHOLDER_COVERS.length]
  const displayPrice = fields.sale_price != null && fields.sale_price < fields.price ? fields.sale_price : fields.price
  const onSale = fields.sale_price != null && fields.sale_price < fields.price

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img src={imgSrc} alt={fields.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {onSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">SALE</span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{fields.title}</h3>
        <p className="text-gray-500 text-xs mb-1">{fields.genre}</p>
        {fields.developer && <p className="text-gray-600 text-xs mb-2">{fields.developer}</p>}
        {fields.rating > 0 && (
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.round(fields.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'}`} />
            ))}
            <span className="text-gray-400 text-xs ml-1">({fields.review_count || 0})</span>
          </div>
        )}
        {fields.platforms && fields.platforms.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {fields.platforms.slice(0, 3).map((p) => (
              <span key={p} className="bg-gray-800 text-gray-400 text-xs px-1.5 py-0.5 rounded">{p}</span>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between">
          <div>
            {onSale && <span className="text-gray-500 text-xs line-through block">${Number(fields.price).toFixed(2)}</span>}
            <span className="text-white font-bold text-base">${Number(displayPrice).toFixed(2)}</span>
          </div>
          <button
            onClick={() => onAddToCart(game)}
            className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  )
}

function CartDrawer({ cart, onRemove, onClose, onCheckout }) {
  const total = cart.reduce((sum, item) => {
    const fields = item.data || item
    const price = fields.sale_price != null && fields.sale_price < fields.price ? fields.sale_price : fields.price
    return sum + Number(price)
  }, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-gray-900 border-l border-gray-800 w-full max-w-sm flex flex-col h-full shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-purple-400" /> Cart ({cart.length})
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-12 h-12 text-gray-700 mx-auto mb-3" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item, i) => {
              const fields = item.data || item
              const price = fields.sale_price != null && fields.sale_price < fields.price ? fields.sale_price : fields.price
              return (
                <div key={`${item.id}-${i}`} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{fields.title}</p>
                    <p className="text-purple-400 text-sm font-bold">${Number(price).toFixed(2)}</p>
                  </div>
                  <button onClick={() => onRemove(i)} className="text-gray-500 hover:text-red-400 transition-colors flex-shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium">Total</span>
              <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <CreditCard className="w-5 h-5" /> Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Store({ cart, onAddToCart, onRemoveFromCart }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeGenre, setActiveGenre] = useState('All')
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutDone, setCheckoutDone] = useState(false)

  useEffect(() => {
    setLoading(true)
    const genre = activeGenre === 'All' ? undefined : activeGenre
    fetchStoreGames({ genre, search: search || undefined })
      .then(setGames)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [activeGenre])

  const filtered = search
    ? games.filter((g) => {
        const f = g.data || g
        return f.title?.toLowerCase().includes(search.toLowerCase()) ||
          f.genre?.toLowerCase().includes(search.toLowerCase()) ||
          f.developer?.toLowerCase().includes(search.toLowerCase())
      })
    : games

  const handleCheckout = () => {
    setCheckoutDone(true)
    setCartOpen(false)
    cart.forEach((_, i) => onRemoveFromCart(0))
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Game Store</h1>
            <p className="text-gray-400">Buy digital games directly — instant delivery</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {checkoutDone && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-green-500/10 border border-green-500/30 text-green-300 rounded-xl px-5 py-4 flex items-center justify-between">
            <span>🎉 Thank you for your purchase! Your games will be delivered to your email.</span>
            <button onClick={() => setCheckoutDone(false)} className="text-green-400 hover:text-green-300">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Genre Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Genre Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Filter className="w-4 h-4 text-gray-500 self-center" />
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeGenre === genre
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {!loading && (
          <p className="text-gray-500 text-sm mb-5">{filtered.length} game{filtered.length !== 1 ? 's' : ''} available</p>
        )}

        {/* Games Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-1/2" />
                  <div className="h-8 bg-gray-800 rounded mt-3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No games found.</p>
            <p className="text-gray-600 text-sm mt-2">Try a different genre or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onRemove={onRemoveFromCart}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  )
}
