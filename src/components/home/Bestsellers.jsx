import React from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={`${product.imgId}-card`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          />

          {/* Hover overlay with quick add */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="bg-cream-50 text-charcoal-800 px-6 py-2.5 text-[11px] tracking-nav uppercase font-medium hover:bg-white transition-colors shadow-elevated flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>

          {/* Badges */}
          {product.new && (
            <span className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[10px] tracking-wider uppercase font-bold px-2.5 py-1">
              New
            </span>
          )}
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3
          id={product.titleId}
          className="text-[11px] tracking-product uppercase font-medium text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <p
        id={product.descId}
        className="text-xs text-charcoal-400 mb-2 line-clamp-1"
      >
        {product.description}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
            />
          ))}
        </div>
        <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-charcoal-700 mt-1.5">
        {formatPrice(product.price)}
      </p>
    </article>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = products.filter(p => p.bestseller)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal-800 text-charcoal-800 px-8 py-3 text-xs tracking-nav uppercase font-medium hover:bg-charcoal-800 hover:text-cream-100 transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
