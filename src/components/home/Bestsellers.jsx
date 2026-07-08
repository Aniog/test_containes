import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function StarRating({ rating }) {
  const filled = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= filled ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E0D4' }}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  const img1 = product.images[0]
  const img2 = product.images[1]

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={img1.id}
          data-strk-img={`[${img1.descId}] [${img1.titleId}]`}
          data-strk-img-ratio={img1.ratio}
          data-strk-img-width={img1.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={img2.id}
          data-strk-img={`[${img2.descId}] [${img2.titleId}] worn model`}
          data-strk-img-ratio={img2.ratio}
          data-strk-img-width={img2.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-ivory text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory text-[10px] font-sans font-medium uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-[10px] font-sans text-whisper">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={img1.titleId}
            className="font-serif text-sm font-medium uppercase tracking-[0.15em] text-ink hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={img1.descId} className="text-xs font-sans text-muted leading-snug">
          {product.shortDescription}
        </p>
        <p className="font-sans text-sm font-medium text-ink mt-0.5">{formatPrice(product.price)}</p>
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
    <section ref={containerRef} className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors border-b border-muted/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
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
