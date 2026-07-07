import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-3">
          Bestsellers
        </h2>
        <p className="font-sans text-sm text-stone-500 text-center mb-10 md:mb-14">
          Our most-loved pieces, chosen by you
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
                  <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-white overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="flex items-center gap-2 text-cream font-sans text-[11px] uppercase tracking-btn font-medium"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <h3
                id={product.titleId}
                className="font-serif text-xs md:text-sm font-medium uppercase tracking-product text-charcoal"
              >
                {product.name}
              </h3>
              <p
                id={product.descId}
                className="font-sans text-[11px] text-stone-500 mt-0.5 line-clamp-1"
              >
                {product.description}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-[10px] text-stone-400">({product.reviews})</span>
              </div>
              <p className="font-sans text-sm font-medium text-charcoal mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
