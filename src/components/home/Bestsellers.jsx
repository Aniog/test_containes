import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@/lib/image-helper'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '../cart/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestseller gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`absolute bottom-3 left-3 right-3 bg-cream/95 text-charcoal py-2.5 text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-[0.15em] text-charcoal"
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={product.descId} className="text-xs text-muted mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border-dark'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal px-10 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-charcoal hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
