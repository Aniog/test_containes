import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-brand-cream" />
            <span className="text-[11px] tracking-widest uppercase text-brand-cream font-sans">
              Add to Cart
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm tracking-ultra-wide uppercase text-brand-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
        >
          {product.description}
        </p>
        <p className="text-sm font-sans text-brand-warm-gray mt-1">${product.price}</p>
      </div>

      {/* Quick add button (mobile) */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="md:hidden mt-2 w-full border border-brand-charcoal text-brand-charcoal py-2 text-[11px] tracking-widest uppercase font-sans hover:bg-brand-charcoal hover:text-brand-cream transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-super-wide uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-brand-cream transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
