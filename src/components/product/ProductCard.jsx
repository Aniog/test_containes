import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/data/products'
import { StarRating } from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'

export function ProductCard({ product, contextId, className }) {
  const { addItem } = useCart()
  const titleId = `product-name-${product.id}`
  const descId = `product-desc-${product.id}`
  const firstImgId = `product-img-${product.id}-1`
  const secondImgId = `product-img-${product.id}-2`

  return (
    <div className={cn('block', className)}>
      {/* Image wrapper keeps hover overlay separate from the PDP link */}
      <div className="group relative">
        <Link to={`/products/${product.id}`} className="block">
          <div className="aspect-[3/4] overflow-hidden bg-vel-cream">
            <img
              data-strk-img-id={firstImgId}
              data-strk-img={`[${contextId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <img
              data-strk-img-id={secondImgId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Link>

        {/* Desktop quick add - hidden by default, slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-white/95 p-4 transition-transform duration-300 group-hover:translate-y-0 md:block">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex w-full items-center justify-center gap-2 bg-vel-base py-3 text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-vel-base-light"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <Link to={`/products/${product.id}`}>
          <span id={titleId} className="product-name">
            {product.name}
          </span>
        </Link>
        <span id={descId} className="sr-only">
          {product.description}
        </span>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-vel-base">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-1.5">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs text-vel-muted">({product.reviewCount})</span>
          </div>
        </div>

        {/* Mobile quick add */}
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-2 flex w-full items-center justify-center gap-2 border border-vel-base py-2.5 text-xs font-medium uppercase tracking-wide text-vel-base transition-colors hover:bg-vel-base hover:text-white md:hidden"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
