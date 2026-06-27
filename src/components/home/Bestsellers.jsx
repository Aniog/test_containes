import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)
  const bestsellers = products.filter((p) => p.isBestseller)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Curated for You</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">Bestsellers</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-warm-ivory">
                <img
                  src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-gold text-white text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 font-medium">
                    New
                  </span>
                )}
                {/* Quick add on hover */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0],
                      variant: product.variants[0],
                    })
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] uppercase tracking-[0.12em] font-medium py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-white"
                >
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>
              </Link>

              {/* Info */}
              <div className="mt-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-product-name truncate">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="text-gold fill-gold" />
                  <span className="text-[11px] text-charcoal-light">{product.rating}</span>
                  <span className="text-[11px] text-charcoal-light/60">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}