import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Star } from 'lucide-react'
import { fetchProducts } from '@/api/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function HomeFeaturedGames() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart, setCartOpen } = useCart()

  useEffect(() => {
    fetchProducts({ featured: true, limit: 4 })
      .then(({ rows }) => setProducts(rows))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

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

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            Featured Games
          </h2>
          <p className="text-gray-400 mt-1">Hand-picked titles from our store</p>
        </div>
        <Link to="/store" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => {
            const d = product.data || {}
            const price = d.sale_price || d.price
            const isOnSale = d.on_sale && d.sale_price && d.sale_price < d.price
            return (
              <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all group flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {isOnSale && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      SALE
                    </div>
                  )}
                  {d.genre && (
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-black/60 text-gray-200 text-xs px-2 py-0.5 rounded-full">{d.genre}</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{d.title}</h3>
                  <p className="text-gray-400 text-xs line-clamp-2 flex-1 mb-3">{d.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-400 font-bold">${price?.toFixed(2)}</span>
                      {isOnSale && <span className="text-gray-500 text-xs line-through ml-2">${d.price?.toFixed(2)}</span>}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
