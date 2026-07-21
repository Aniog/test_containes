import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag } from 'lucide-react'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={`[${product.id}-desc] [${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-2.5 bg-velmora-charcoal/90 backdrop-blur-sm text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`${product.id}-name`}
            className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`${product.id}-desc`} className="text-xs text-velmora-stone leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 pt-0.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-graphite">{product.rating}</span>
          </div>
          <span className="text-sm font-medium text-velmora-charcoal">${product.price}</span>
        </div>
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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal tracking-wide">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-velmora-stone max-w-md mx-auto">
            Our most loved pieces — chosen by women who know what they want.
          </p>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
