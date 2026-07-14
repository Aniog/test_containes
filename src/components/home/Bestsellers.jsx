import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
          <img
            data-strk-img-id={hovered ? product.imgIdHover : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Quick add overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-charcoal">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-stone-500 mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`} />
            ))}
          </div>
          <span className="text-[11px] text-stone-400">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-charcoal mt-1">${product.price}</p>
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
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
