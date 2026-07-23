import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers-title`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={product.images[0].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Secondary image (hover) */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers-title detail worn`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={product.images[1].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add to cart */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal px-6 py-2.5 rounded-sm hover:bg-goldLight transition-all duration-300 z-10 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5" strokeWidth={1.5} />
        Add to Cart
      </button>

      {/* Product info */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-base md:text-lg tracking-[0.2em] uppercase font-medium text-textDark">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-textMuted mt-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider'}`} strokeWidth={0} />
            ))}
          </div>
          <span className="font-sans text-xs text-textMuted">({product.reviews})</span>
        </div>
        <p className="font-sans text-base font-medium text-textDark mt-2">${product.price}</p>
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
    <section ref={containerRef} className="py-16 md:py-24 bg-warmCream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl font-medium text-textDark">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-textMuted mt-3">The pieces our customers can't stop wearing.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
