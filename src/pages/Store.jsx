import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Star, Check, Filter, X, ShoppingBag } from 'lucide-react'
import { fetchGames } from '@/api/gamesite'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

const PLATFORMS = ['All', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
const GENRES = ['All', 'Action RPG', 'RPG', 'Action Adventure', 'Racing', 'Survival Horror', 'Roguelike', 'Superhero']

const PLATFORM_BADGE = {
  PC: 'secondary', PlayStation: 'playstation', Xbox: 'xbox', 'Nintendo Switch': 'nintendo', Mobile: 'secondary',
}

function GameCard({ game }) {
  const { addToCart, isInCart } = useCart()
  const d = game.data
  const inCart = isInCart(game.id)
  const onSale = d.sale_price && d.sale_price < d.price

  return (
    <Card className="flex flex-col hover:border-indigo-500/50 transition-colors group">
      <Link to={`/store/${game.id}`} className="block relative overflow-hidden aspect-video">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {onSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {(d.platform || []).slice(0, 2).map(p => (
            <Badge key={p} variant={PLATFORM_BADGE[p] || 'secondary'}>{p}</Badge>
          ))}
          {(d.genre || []).slice(0, 1).map(g => (
            <Badge key={g} variant="outline">{g}</Badge>
          ))}
        </div>
        <Link to={`/store/${game.id}`}>
          <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2 hover:text-indigo-300 transition-colors">
            {d.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-xs mb-3 line-clamp-2 flex-1">{d.description}</p>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-400 text-xs font-medium">{d.rating?.toFixed(1)}</span>
          <span className="text-gray-500 text-xs">({(d.review_count || 0).toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {onSale ? (
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">${d.sale_price.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">${d.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-white font-bold">${d.price?.toFixed(2)}</span>
            )}
          </div>
          <Button
            size="sm"
            variant={inCart ? 'success' : 'default'}
            onClick={() => addToCart(game)}
            disabled={inCart}
          >
            {inCart ? <><Check className="w-3.5 h-3.5" /> Added</> : <><ShoppingCart className="w-3.5 h-3.5" /> Add</>}
          </Button>
        </div>
      </div>
    </Card>
  )
}

function CartSidebar({ onClose }) {
  const { items, removeFromCart, clearCart, cartTotal } = useCart()

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-gray-900 border-l border-gray-800 w-full max-w-sm flex flex-col h-full">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" /> Cart ({items.length})
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <ShoppingBag className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map(item => {
              const d = item.data
              const price = d.sale_price || d.price
              return (
                <div key={item.id} className="flex gap-3 bg-gray-800 rounded-lg p-3">
                  <img
                    src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&q=80'}
                    alt={d.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{d.title}</p>
                    <p className="text-indigo-400 text-sm font-bold">${price?.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-gray-800 space-y-3">
            <div className="flex justify-between text-white font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">Checkout</Button>
            <Button variant="ghost" className="w-full text-gray-400" onClick={clearCart}>Clear Cart</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Store() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [platform, setPlatform] = useState('All')
  const [genre, setGenre] = useState('All')
  const [cartOpen, setCartOpen] = useState(false)
  const { cartCount, cartTotal } = useCart()

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetchGames({ limit: 50 })
        setGames(res.list)
      } catch (err) {
        console.error('Failed to load games:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = games.filter(game => {
    const d = game.data
    const matchSearch = !search || d.title?.toLowerCase().includes(search.toLowerCase())
    const matchPlatform = platform === 'All' || (d.platform || []).includes(platform)
    const matchGenre = genre === 'All' || (d.genre || []).includes(genre)
    return matchSearch && matchPlatform && matchGenre
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Game Store</h1>
          <p className="text-gray-400">Browse and buy the best games across all platforms</p>
        </div>
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Cart
          {cartCount > 0 && (
            <span className="bg-white text-indigo-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          {cartCount > 0 && <span className="text-indigo-200 text-xs">${cartTotal.toFixed(2)}</span>}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-gray-400 text-sm self-center flex items-center gap-1"><Filter className="w-3.5 h-3.5" /> Platform:</span>
        {PLATFORMS.map(p => (
          <button key={p} onClick={() => setPlatform(p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${platform === p ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            {p}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-gray-400 text-sm self-center">Genre:</span>
        {GENRES.map(g => (
          <button key={g} onClick={() => setGenre(g)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${genre === g ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            {g}
          </button>
        ))}
      </div>

      <p className="text-gray-500 text-sm mb-4">{filtered.length} games found</p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg">No games found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      )}

      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </div>
  )
}
