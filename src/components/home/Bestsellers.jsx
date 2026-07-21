import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Best Sellers</p>
          <h2 className="section-title">Our Most Loved Pieces</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-square bg-dark-50 rounded-sm overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-100 scale-105' : 'opacity-0'
                    }`}
                  />
                  {/* Quick add overlay */}
                  <div
                    className={`absolute inset-0 bg-dark-900/40 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product)
                      }}
                      className="bg-cream text-dark-900 px-4 py-2.5 text-xs tracking-widest uppercase font-sans font-medium flex items-center gap-2 hover:bg-white transition-colors"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="text-center">
                <h3 className="product-name text-xs text-dark-900 mb-1">{product.name}</h3>
                <p className="text-sm text-dark-500 font-sans">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline inline-block text-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}