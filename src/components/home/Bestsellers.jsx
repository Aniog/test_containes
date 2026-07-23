import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-cream-200 rounded-sm">
          {/* Product image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo elegant`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-stone-900/90 text-cream-50 font-sans text-[10px] tracking-ultra-wide uppercase px-3 py-1.5 rounded-sm">
              {product.badge}
            </span>
          )}

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-stone-900/90 backdrop-blur-sm text-cream-50 font-sans text-xs tracking-wider uppercase py-3 flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors rounded-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-800 group-hover:text-gold-500 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3',
                    i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-stone-300'
                  )}
                />
              ))}
            </div>
            <span className="font-sans text-[11px] text-stone-400">({product.reviewCount})</span>
          </div>
          <p className="font-serif text-lg text-stone-900">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-subheading mb-3">Curated for You</p>
          <h2 className="section-heading">Bestsellers</h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
