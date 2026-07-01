import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          strokeWidth={1}
          color={i <= Math.round(rating) ? '#C9A96E' : '#E0D5C5'}
          fill={i <= Math.round(rating) ? '#C9A96E' : '#E0D5C5'}
        />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close-up warm light`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velvet text-cream font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-velvet/80 text-gold font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
              Sale
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="w-full bg-velvet text-cream font-sans text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-colors duration-200"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-mink">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <p id={product.titleId} className="font-sans text-xs uppercase tracking-widest2 text-velvet hover:text-gold transition-colors leading-tight">
            {product.name}
          </p>
        </Link>
        <p id={product.descId} className="font-sans text-[11px] text-mink leading-snug hidden">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-medium text-velvet">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-mink line-through">${product.originalPrice}</span>
          )}
        </div>
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Our Favourites</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velvet text-velvet font-sans text-xs uppercase tracking-widest2 px-10 py-3.5 hover:bg-velvet hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
