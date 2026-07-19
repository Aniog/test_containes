import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import StockImage from '@/components/ui/StockImage'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const firstTone = product.tone[0]

  return (
    <div className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Link to={`/products/${product.id}`} className="block w-full h-full">
          <StockImage
            id={`card-${product.id}-main`}
            query={`[card-${product.id}-name]`}
            ratio="4x3"
            width={600}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </Link>
        <button
          onClick={() => addItem(product, 1, firstTone)}
          className={`absolute inset-x-0 bottom-0 bg-espresso/90 py-3 flex justify-center transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-ivory flex items-center gap-2">
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={`card-${product.id}-name`}
          className="font-sans text-sm uppercase tracking-product text-espresso"
        >
          {product.name}
        </h3>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-taupe-light">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
