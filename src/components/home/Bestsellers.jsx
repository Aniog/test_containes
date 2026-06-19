import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

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
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`bestseller-${product.id}-a`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-b`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] font-sans font-semibold tracking-wide uppercase px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product, 'gold', 1)}
        className={`absolute bottom-3 left-3 right-3 bg-brand-charcoal/90 text-white font-sans text-xs tracking-wide uppercase font-semibold py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag size={14} />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-name-${product.id}`}
            className="font-serif text-sm tracking-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`product-desc-${product.id}`} className="text-xs text-brand-muted mt-0.5">
          {product.description}
        </p>
        <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
          ${product.price}
        </p>
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
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
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
