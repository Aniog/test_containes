import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag, Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
        {/* Main image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photography`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with second image hint */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-sm text-charcoal py-3 flex items-center justify-center gap-2
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                     hover:bg-gold hover:text-charcoal text-xs uppercase tracking-[0.15em]"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] uppercase tracking-wider px-3 py-1 font-medium">
            New
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm md:text-base uppercase tracking-[0.2em] text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star size={12} fill="#C9A96E" className="text-gold" />
          <span className="text-xs text-warm-gray">{product.rating}</span>
        </div>
        <p className="font-sans text-sm text-charcoal">${product.price}</p>
      </div>
    </Link>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = products.filter(p => p.isBestseller)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-sm text-warm-gray max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what they want.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/collection">
            <button className="btn-outline">
              View All Jewelry
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
