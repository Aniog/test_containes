import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative bg-cream">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-linen">
        {/* Main image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-parchment font-sans text-[9px] font-semibold uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] font-semibold uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="bg-charcoal text-parchment font-sans text-[9px] font-semibold uppercase tracking-widest px-2 py-1">
              Gift
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart(product, product.variants?.[0])
            }}
            className="w-full bg-obsidian text-parchment font-sans text-[10px] font-semibold uppercase tracking-widest py-3.5 hover:bg-charcoal transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 px-1">
        {/* Hidden text for image queries */}
        <p id={product.titleId} className="font-serif text-sm font-medium uppercase tracking-product text-ink leading-tight mb-1">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.description}</p>

        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                style={{ color: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF', fill: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF' }}
              />
            ))}
            <span className="font-sans text-[10px] text-muted ml-1">({product.reviewCount})</span>
          </div>
          <span className="font-sans text-sm font-semibold text-ink">${product.price}</span>
        </div>
      </div>
    </div>
  )
}
