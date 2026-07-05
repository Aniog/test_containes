import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { Star, Plus } from 'lucide-react'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-3">
                <img
                  data-strk-img-id={`bestseller-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] bestseller gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick add overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gold/90 text-warm-white py-2.5 flex items-center justify-center gap-1.5 text-xs uppercase tracking-btn font-semibold transition-all duration-300 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addItem(product)
                  }}
                >
                  <Plus className="w-3 h-3" />
                  Add to Cart
                </div>
              </div>

              {/* Info */}
              <h3
                id={product.titleId}
                className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-stone-800"
              >
                {product.name}
              </h3>
              <p
                id={product.descId}
                className="text-[11px] text-stone-500 mt-0.5 line-clamp-1"
              >
                {product.description}
              </p>
              <div className="flex items-center gap-1 mt-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-stone-400">({product.reviews})</span>
              </div>
              <p className="text-sm font-medium text-stone-800 mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
