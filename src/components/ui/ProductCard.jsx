import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ProductImage } from './ProductImage'
import { StarRating } from './StarRating'
import { Button } from './Button'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'

export function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const defaultVariant = product.variants.find((v) => v.inStock)?.id || product.variants[0].id

  return (
    <article className={className}>
      <Link to={`/products/${product.id}`} className="group block">
        <ProductImage
          product={product}
          ratio="3x4"
          width={600}
          hover
          hoverQuery={`[${product.titleId}] worn`}
          className="aspect-[3/4] w-full"
        />
      </Link>
      <div className="pt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-stone">
          <StarRating rating={product.rating} size={12} />
          <span>({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-medium text-ink">{formatPrice(product.price)}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 opacity-100 transition-all duration-300 group-hover:border-gold group-hover:text-gold md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={(e) => {
            e.preventDefault()
            addItem(product.id, defaultVariant, 1)
          }}
        >
          <ShoppingBag size={14} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </article>
  )
}
