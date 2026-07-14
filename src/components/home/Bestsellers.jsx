import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Main image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`gold jewelry worn on model [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian font-sans text-xs tracking-wider uppercase font-semibold px-2.5 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-sans text-xs tracking-wider uppercase font-semibold px-2.5 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase font-semibold py-3.5 hover:bg-gold hover:text-obsidian transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 px-0.5">
        <div className="flex items-center gap-2 mb-1.5">
          <StarRating rating={product.rating} size={10} />
          <span className="font-sans text-xs text-ink-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-ink mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">Curated for You</p>
            <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
          >
            View All
            <span className="w-6 h-px bg-ink-muted group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
