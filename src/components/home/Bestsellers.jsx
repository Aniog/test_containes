import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'
import { formatPrice } from '../../lib/utils'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-primary`}
          data-strk-img={`[${product.id}-name] [product-category] luxury gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-hover`}
          data-strk-img={`[${product.id}-name] worn model close up detail jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0])
            }}
            className="w-full bg-velmora-charcoal/90 backdrop-blur-sm text-white py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
        {product.new && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
            New
          </span>
        )}
      </div>
      <div>
        <p id={`${product.id}-name`} className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal mb-1">
          {product.name}
        </p>
        <p id="product-category" className="text-xs text-velmora-stone mb-1.5 capitalize">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-medium text-velmora-charcoal">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-0.5">
            <Star size={11} className="fill-velmora-gold text-velmora-gold" />
            <span className="text-[11px] text-velmora-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = products.filter((p) => p.bestseller)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">Bestsellers</h2>
        <p className="text-sm text-velmora-stone max-w-lg mx-auto">
          Our most-loved pieces, chosen by thousands of women worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
