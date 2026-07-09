import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/lib/CartContext'

const bestsellers = products.filter((p) => p.bestseller)

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null)
  const { addToCart } = useCart()

  return (
    <section className="section-padding bg-velvet-950">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-4 font-medium">Most Loved</p>
          <h2 className="heading-lg text-velvet-50">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-velvet-800 rounded-sm overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-b from-velvet-700 to-velvet-800 flex items-center justify-center">
                    <span className="text-velvet-500 text-xs tracking-wider">GOLD JEWELRY</span>
                  </div>

                  {/* Quick add overlay */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addToCart(product, product.variants[0])
                      }}
                      className="bg-velvet-50 text-velvet-950 px-6 py-2.5 text-xs tracking-wider uppercase font-medium
                               hover:bg-gold-400 transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Info */}
                <p className="text-[10px] tracking-super-wide uppercase text-velvet-500 mb-1.5">
                  {product.material}
                </p>
                <h3 className="text-xs tracking-wider text-velvet-100 font-medium mb-1.5 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="text-[10px] text-velvet-500 ml-1">({product.reviewCount})</span>
                </div>
                <p className="text-sm text-gold-400 font-medium">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}