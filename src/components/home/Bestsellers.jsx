import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

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
        <div className="relative aspect-[3x4] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={product.imageId}
            data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-name] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imageId2}
            data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-name] [bestsellers-title] hover view`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-3 bg-charcoal/90 text-cream text-xs tracking-product font-sans font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              ADD TO BAG
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`prod-${product.id}-name`}
            className="font-serif text-sm tracking-product text-charcoal uppercase"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`prod-${product.id}-desc`}
          className="text-xs text-charcoal/50 font-sans mt-0.5"
        >
          {product.shortDescription}
        </p>
        <p className="text-sm font-sans font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className={`py-16 md:py-24 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div ref={containerRef} className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-10 py-3 border border-charcoal text-charcoal text-xs tracking-product font-sans font-medium hover:bg-charcoal hover:text-cream transition-colors duration-200"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
