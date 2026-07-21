import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <div className="relative aspect-[3x4] overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-0">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </Link>
      </div>

      {/* Info + Add to Cart */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-product text-warm-black"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.descId}
          className="text-xs text-warm-gray mt-0.5 font-sans"
        >
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-warm-gray font-sans">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <p className="text-sm font-sans font-medium text-warm-black">${product.price}</p>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="flex items-center gap-1.5 text-[10px] font-sans font-semibold tracking-wide-btn uppercase text-warm-black hover:text-gold transition-colors border border-sand px-3 py-1.5 hover:border-gold"
          >
            <ShoppingBag className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-xs font-semibold tracking-wide-btn uppercase px-8 py-3 hover:bg-gold hover:text-warm-black transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
