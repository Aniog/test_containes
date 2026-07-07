import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-base">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-warm aspect-[3/4]">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-velmora-base text-velmora-cream text-[10px] tracking-wider uppercase">
                    New
                  </span>
                )}
                {/* Quick Add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addItem(product, product.variants[0])
                    }}
                    className="w-full py-3 bg-velmora-base/90 backdrop-blur-sm text-velmora-cream text-[10px] tracking-super-wide uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-base transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-1.5">
                  <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                  <span className="text-[11px] text-velmora-muted">{product.rating}</span>
                </div>
                <Link to={`/product/${product.slug}`}>
                  <h3 className="font-serif text-sm tracking-wide text-velmora-base group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-velmora-muted mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            to="/collection"
            className="inline-block px-10 py-3 border border-velmora-base text-velmora-base text-xs tracking-super-wide uppercase hover:bg-velmora-base hover:text-velmora-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
