import React, { useState, useEffect, useRef } from 'react'
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
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].id}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={product.images[0].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={product.images[1].id}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={product.images[1].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-4 right-4 bg-charcoal text-cream py-2.5 text-[11px] font-semibold uppercase tracking-wide-product flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-wide-product text-charcoal">
          <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="text-xs text-stone-500 mt-0.5">{product.description}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
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
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
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
