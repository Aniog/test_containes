import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn, formatPrice } from '@/lib/utils'
import { Stars } from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { StockImage } from '@/components/ui/StockImage'

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const titleId = `product-title-${product.slug}`

  return (
    <article
      className={cn('group relative flex flex-col', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-[#F2EFE9]">
        <div className="aspect-[3/4] w-full">
          <StockImage
            id={`product-img-${product.id}`}
            query={`[${titleId}]`}
            ratio="3x4"
            width="600"
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addItem(product, { tone: product.tone, quantity: 1 })
          }}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-[#B9975B] py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#A8864D]',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>
      <div className="pt-4">
        <div className="mb-1 flex items-center justify-between">
          <h3
            id={titleId}
            className="font-serif text-xs font-medium uppercase tracking-[0.18em] text-[#1A1614]"
          >
            {product.name}
          </h3>
          <span className="font-sans text-sm font-medium text-[#1A1614]">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-[#6B625B]">({product.reviews})</span>
        </div>
      </div>
    </article>
  )
}
