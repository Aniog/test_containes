import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/store'
import StarRating from './StarRating'

const ProductCard = ({ product, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()
  const primaryId = `${product.slug}-card-primary`
  const secondaryId = `${product.slug}-card-secondary`
  const titleId = `${product.slug}-card-title`
  const descId = `${product.slug}-card-desc`

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="block" to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
          <img
            alt={product.name}
            className={`aspect-[4/5] w-full object-cover transition duration-700 ${isHovered ? 'opacity-0 scale-[1.02]' : 'opacity-100'}`}
            data-strk-img-id={primaryId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} detail view`}
            className={`absolute inset-0 aspect-[4/5] w-full object-cover transition duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
            data-strk-img-id={secondaryId}
            data-strk-img={`[${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <button
            className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-stone-50 opacity-100 transition duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            onClick={(event) => {
              event.preventDefault()
              addItem(product)
            }}
            type="button"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="px-1 pb-2 pt-5 text-neutral-950">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-stone-500">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                className="font-display text-xl uppercase tracking-product text-neutral-950 transition duration-300 hover:text-amber-700"
                id={titleId}
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-sm font-medium text-neutral-950">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-stone-600" id={descId}>
          {product.cardDescription}
        </p>
        <div className="mt-4">
          <StarRating compact rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
