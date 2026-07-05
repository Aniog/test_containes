import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { PLACEHOLDER_SVG } from '@/data/products'
import StarRating from './StarRating'

export default function ProductCard({ product, className }) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'gold', 1)
  }

  return (
    <article
      className={cn('group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Link
          to={`/products/${product.id}`}
          className="absolute inset-0 block"
          aria-label={product.name}
        >
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.titleId}] [${product.descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER_SVG}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <img
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.titleId}] [${product.descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER_SVG}
            alt=""
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>

        <button
          onClick={handleAdd}
          className={cn(
            'absolute bottom-3 left-3 right-3 z-10 flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300',
            'md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100',
            'block md:hidden'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3
            id={product.titleId}
            className="product-name text-sm font-medium text-foreground"
          >
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="text-sm font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
        </div>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <StarRating rating={product.rating} size={12} />
      </div>
    </article>
  )
}
