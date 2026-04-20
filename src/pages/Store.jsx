import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShoppingCart, Search, SlidersHorizontal, Star } from 'lucide-react'
import { fetchProducts } from '@/api/products'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'

const GENRES = ['all', 'Action', 'RPG', 'Racing', 'Strategy', 'Adventure', 'Sports', 'Simulation', 'Puzzle']

function ProductCard({ product, onAddToCart }) {
  const d = product.data || {}
  const price = d.sale_price || d.price
  const isOnSale = d.on_sale && d.sale_price && d.sale_price < d.price
  const discount = isOnSale ? Math.round((1 - d.sale_price / d.price) * 100) : 0

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isOnSale && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{discount}%
          </div>
        )}
        {d.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-black" /> Featured
          </div>
        )}
        {d.genre && (
          <div className="absolute bottom-2 left-2">
            <span className="bg-black/70 text-gray-200 text-xs px-2 py-0.5 rounded-full">{d.genre}</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{d.title}</h3>
        <p className="text-gray-400 text-xs line-clamp-2 flex-1 mb-3">{d.description}</p>

        {d.platforms && d.platforms.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {d.platforms.slice(0, 3).map(p => (
              <span key={p} className="bg-gray-700 text-gray-300 text-xs px-1.5 py-0.5 rounded capitalize">{p}</span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-green-400 font-bold text-lg">${price?.toFixed(2)}</span>
            {isOnSale && <span className="text-gray-500 text-sm line-through ml-2">${d.price?.toFixed(2)}</span>}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Store() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const { addToCart, setCartOpen } = useCart()

  const genre = searchParams.get('genre') || 'all'
  const onSale = searchParams.get('sale') === 'true'

  useEffect(() => {
    setLoading(true)
    fetchProducts({
      genre: genre !== 'all' ? genre : undefined,
      onSale: onSale || undefined,
      limit: 30,
    })
      .then(({ rows }) => setProducts(rows))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [genre, onSale])

  const filtered = search
    ? products.filter(p => (p.data?.title || '').toLowerCase().includes(search.toLowerCase()))
    : products

  const handleAddToCart = (product) => {
    const d = product.data || {}
    addToCart({
      id: product.id,
      title: d.title,
      price: d.sale_price || d.price,
      cover_image_url: d.cover_image_url,
    })
    setCartOpen(true)
  }

  const setFilter = (key, val) => {
    const params = new URLSearchParams(searchParams)
    if (val === 'all' || val === false) params.delete(key)
    else params.set(key, val)
    setSearchParams(params)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Game Store</h1>
        <p className="text-gray-400">Browse and buy the best games</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search games..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          {GENRES.map(g => (
            <button
              key={g}
              onClick={() => setFilter('genre', g)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                genre === g ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {g === 'all' ? 'All Genres' : g}
            </button>
          ))}
          <button
            onClick={() => setFilter('sale', onSale ? false : 'true')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              onSale ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            On Sale
          </button>
        </div>
      </div>

      {/* Results count */}
      {!loading && (
        <p className="text-gray-400 text-sm mb-4">{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</p>
      )}

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg">No games found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  )
}
