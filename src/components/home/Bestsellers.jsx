import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 lg:py-24">
      <div ref={containerRef} className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-caption uppercase tracking-mega-wide text-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-heading-1 text-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-outline inline-block"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }) {
  const defaultVariant = product.variants.find((v) => v.available) || product.variants[0]

  return (
    <div className="group">
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="product-image-wrapper block relative aspect-square bg-cream-dark rounded overflow-hidden mb-3"
      >
        <img
          data-strk-img-id={`${product.id}-bestseller`}
          data-strk-img={`[product-name-${product.id}] [product-subtitle-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAdd(product, defaultVariant)
            }}
            className="bg-cream text-charcoal px-4 py-2 text-caption uppercase tracking-wide flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-cream"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2 py-1 font-sans">
            New
          </span>
        )}
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 className="text-product-name text-body-sm mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-body-sm text-warm-gray mb-1.5">{product.subtitle}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-body-sm font-semibold text-charcoal">
            ${product.price}
          </span>
        </div>
      </Link>
    </div>
  )
}
