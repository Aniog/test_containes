import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.toneOptions[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.images[0].imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry bestseller`}
          data-strk-img-ratio={product.images[0].ratio}
          data-strk-img-width={product.images[0].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.images[1].imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry styled`}
          data-strk-img-ratio={product.images[1].ratio}
          data-strk-img-width={product.images[1].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-gold hover:bg-gold-dark text-warm-black font-sans text-xs tracking-button uppercase py-2.5 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag className="w-3.5 h-3.5 inline mr-2" />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base tracking-product uppercase text-warm-black"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="font-sans text-xs text-muted mt-1 line-clamp-1"
        >
          {product.description}
        </p>
        <p className="font-sans text-sm text-warm-black mt-1.5 font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-warm-black">
            Bestsellers
          </h2>
          <div className="mt-3 w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
