import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { StarRating } from './StarRating'
import { useCart } from '@/context/CartContext'
import { makeImgAttrs } from '@/data/products'

export function ProductCard({ product, contextId }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const titleId = `${product.id}-title`
  const primaryImgId = `${product.id}-primary`
  const hoverImgId = `${product.id}-hover`

  const primaryImg = makeImgAttrs({
    id: product.id,
    imgId: primaryImgId,
    contextIds: contextId ? [titleId, contextId] : [titleId],
    ratio: '4x3',
    width: 600,
  })

  const hoverImg = makeImgAttrs({
    id: product.id,
    imgId: hoverImgId,
    contextIds: contextId ? [titleId, contextId] : [titleId],
    ratio: '4x3',
    width: 600,
  })

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-warmgray-100">
        <img
          {...primaryImg}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          {...hoverImg}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addItem(product, product.variants?.[0] || null)
          }}
          className="absolute bottom-4 left-4 right-4 translate-y-full bg-espresso-900 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-cream-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold hover:text-espresso-900"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <span className="inline-flex items-center gap-2">
            <ShoppingBag size={14} />
            Add to Cart
          </span>
        </button>
      </Link>

      <div className="mt-4 flex flex-col items-start gap-1.5">
        <StarRating rating={product.rating} size={12} />
        <Link to={`/products/${product.id}`}>
          <h3 id={titleId} className="product-title transition-colors hover:text-gold-dark">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm font-medium text-warmgray-600">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
