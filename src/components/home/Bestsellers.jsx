import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-cream">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-warm-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-warm-dark/30">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] worn`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-3 left-3 right-3 bg-warm-gold text-warm-black py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 ${
                    hoveredId === product.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                >
                  <ShoppingBag className="w-3 h-3" />
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3
                  id={`product-${product.id}-name`}
                  className="font-serif text-xs sm:text-sm tracking-[0.12em] uppercase text-warm-cream"
                >
                  {product.name}
                </h3>
                <p
                  id={`product-${product.id}-desc`}
                  className="text-[11px] text-warm-tan mt-1 line-clamp-1"
                >
                  {product.description}
                </p>
                <p className="text-sm text-warm-gold mt-1.5 font-light">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-warm-gold text-warm-gold px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-warm-gold hover:text-warm-black transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
