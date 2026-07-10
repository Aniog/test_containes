import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { safeLoadImages } from '@/lib/imageLoader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgIdHover}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => { e.preventDefault(); addItem(product) }}
        className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-brand-charcoal text-[11px] tracking-[0.12em] uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-3 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white shadow-sm"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="product-name text-[13px] text-brand-charcoal">{product.name}</h3>
        </Link>
        <p id={product.descId} className="text-xs text-brand-warm-gray mt-1.5">{product.shortDescription}</p>
        <p className="text-sm font-medium text-brand-charcoal mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal()

  useEffect(() => {
    return safeLoadImages(containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-12 reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal">Bestsellers</h2>
          <p className="mt-3 text-sm text-brand-warm-gray">Our most loved pieces, chosen by you.</p>
          <div className="w-8 h-px bg-brand-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
