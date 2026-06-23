import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, ShoppingBag } from 'lucide-react'
import StarRating from '@/components/ui/StarRating'
import { useCartActions } from '@/context/CartContext'
import { products } from '@/data/products'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCartActions()
  const fullProduct = products.find((p) => p.id === product.id) || product

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const defaultVariant = fullProduct.variants?.[0] || 'Gold'
    addItem(fullProduct.id, fullProduct, defaultVariant, 1)
  }

  return (
    <Link
      to={`/product/${fullProduct.slug || fullProduct.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-velvet-100">
        {/* Front image */}
        <div
          className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
          style={{
            backgroundColor: fullProduct.images?.front?.hex || '#D4A853',
            opacity: hovered ? 0 : 1,
          }}
        >
          <ShoppingBag size={36} className="text-cream-50/40" strokeWidth={1} />
          <span className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-sans tracking-widest text-cream-50/60">
            {fullProduct.images?.front?.label || ''}
          </span>
        </div>
        {/* Hover image */}
        <div
          className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
          style={{
            backgroundColor: fullProduct.images?.side?.hex || '#C49A45',
            opacity: hovered ? 1 : 0,
          }}
        >
          <ShoppingBag size={36} className="text-cream-50/40" strokeWidth={1} />
          <span className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-sans tracking-widest text-cream-50/60">
            {fullProduct.images?.side?.label || ''}
          </span>
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream-50 text-velvet-950 flex items-center justify-center shadow-lg transition-all duration-300 z-10 ${
            hovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus size={16} strokeWidth={1.5} />
        </button>

        {/* Tag */}
        {fullProduct.tag && (
          <span className="absolute top-4 left-4 bg-cream-50/95 text-velvet-900 text-[9px] font-sans font-medium tracking-[0.2em] px-2.5 py-1">
            {fullProduct.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-[10px] font-sans tracking-[0.25em] text-velvet-500 uppercase">
          {fullProduct.category === 'huggies' ? 'HUGGIES' : fullProduct.category.toUpperCase()}
        </p>
        <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velvet-950 line-clamp-1">
          {fullProduct.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-medium text-velvet-900">
            ${fullProduct.price}
          </span>
          <StarRating rating={fullProduct.rating} count={fullProduct.reviewCount} size={12} />
        </div>
      </div>
    </Link>
  )
}
