import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

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
        <div className="relative aspect-[3x4] overflow-hidden bg-linen mb-3">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white" />
            <span className="text-xs text-white font-sans tracking-wide uppercase">Add to Cart</span>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-charcoal mb-0.5">
          {product.name}
        </h3>
        <p id={product.descId} className="text-xs text-warm-gray font-sans mb-1">{product.description}</p>
        <p className="text-sm font-sans font-medium text-charcoal">${product.price}</p>
      </Link>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
