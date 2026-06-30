import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-product">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory text-[10px] font-sans uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>

        {/* Bestseller badge */}
        {product.tags?.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-obsidian text-[9px] font-sans uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <p
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors leading-tight mb-1"
          >
            {product.name}
          </p>
        </Link>
        <p id={product.descId} className="text-xs text-driftwood font-sans mb-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} count={product.reviewCount} />
          <span className="font-sans text-sm font-medium text-obsidian">${product.price}</span>
        </div>
      </div>
    </div>
  )
}
