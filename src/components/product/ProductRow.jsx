import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
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
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-white text-xs font-sans tracking-widest uppercase px-6 py-2.5 flex items-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-4 pointer-events-none">
        <Link to={`/product/${product.slug}`} className="pointer-events-auto">
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-ultrawide text-charcoal hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-stone-500 font-sans mt-1">{product.description}</p>
        <p className="text-sm font-sans font-medium text-charcoal mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}

export default function ProductRow({ title, items }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
