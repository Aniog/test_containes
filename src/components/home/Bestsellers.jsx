import React, { useState, useEffect, useRef } from 'react'
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
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Secondary image */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[1].alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add overlay */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <ShoppingBag className="w-4 h-4 text-champagne" />
            <span className="text-white text-xs tracking-[0.15em] uppercase font-medium">
              Quick Add
            </span>
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3">
        <h3
          id={product.images[0].titleId}
          className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={product.images[0].descId}
          className="text-xs text-stone-500 mt-0.5"
        >
          {product.description}
        </p>
        <p className="text-sm font-medium mt-1">${product.price.toFixed(2)}</p>
      </div>

      {/* Quick add button (mobile) */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="md:hidden mt-2 w-full border border-champagne text-champagne py-2 text-xs tracking-[0.15em] uppercase hover:bg-champagne hover:text-white transition-colors duration-300"
      >
        Add to Bag
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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-champagne text-champagne px-10 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
