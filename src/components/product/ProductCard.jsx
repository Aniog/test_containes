import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import Price from '@/components/ui/Price'
import StrkImage from '@/components/ui/StrkImage'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0] || 'gold', 1)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[#F0EAE3]">
        <StrkImage
          id={`${product.imageId}-card`}
          query={`[product-${product.id}-name] ${product.search}`}
          ratio="3x4"
          width="600"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-[#1A1512] py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#F6F3EF] transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="text-center">
        <h3
          id={`product-${product.id}-name`}
          className="mb-1 font-serif text-sm font-medium uppercase tracking-[0.2em] text-[#1A1512]"
        >
          {product.name}
        </h3>
        <div className="mb-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-[#6B6259]">({product.reviewCount})</span>
        </div>
        <Price price={product.price} className="font-serif text-base text-[#6B6259]" />
      </div>
    </Link>
  )
}
