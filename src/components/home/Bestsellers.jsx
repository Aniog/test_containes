import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.imgId}-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Quick add */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <ShoppingBag className="w-4 h-4 text-base" />
            <span className="text-xs tracking-wide font-medium text-base uppercase">Quick Add</span>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <h3 id={product.titleId} className="font-serif text-sm tracking-product uppercase text-base">
          {product.name}
        </h3>
        <p id={product.descId} className="text-xs text-muted mt-1">{product.description}</p>
        <p className="text-sm font-medium text-base mt-2">${product.price}</p>
      </div>
      {/* Mobile add to cart */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="mt-3 w-full border border-divider hover:border-gold text-xs tracking-wide uppercase py-2.5 font-medium text-base hover:text-gold transition-colors lg:hidden"
      >
        Add to Cart
      </button>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs tracking-section uppercase font-semibold text-gold mb-3">Most Loved</h2>
          <p className="font-serif text-3xl md:text-4xl text-base">Bestsellers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
