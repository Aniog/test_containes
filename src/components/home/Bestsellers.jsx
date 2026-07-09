import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[4/5] bg-velmora-warm-light overflow-hidden mb-3">
                  <img
                    src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] uppercase tracking-[0.1em] px-2.5 py-1">
                      {product.badge}
                    </span>
                  )}
                  {/* Quick add overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product)
                      }}
                      className="bg-white/90 backdrop-blur-sm text-velmora-dark text-xs uppercase tracking-[0.15em] px-4 py-2.5 flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-light'}`}
                    />
                  ))}
                  <span className="text-[10px] text-velmora-taupe ml-1">({product.reviews})</span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif-alt text-xs uppercase tracking-[0.15em] text-velmora-slate hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm font-sans text-velmora-dark mt-1.5">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white text-xs uppercase tracking-[0.2em] px-8 py-3 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}