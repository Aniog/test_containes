import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../utils/format'
import { StarRating } from './StarRating'
import { StoreImage } from './StoreImage'

export function ProductCard({ product, onAddToCart, priority = false }) {
  const imageTitleId = `${product.id}-card-title`
  const imageDescId = `${product.id}-card-desc`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-line bg-white text-velmora-espresso shadow-[0_20px_50px_rgba(38,27,23,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(38,27,23,0.12)]">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden rounded-[2rem] rounded-b-none bg-velmora-champagne/65">
        <div className="relative aspect-[4/5] overflow-hidden">
          <StoreImage
            id={product.imageIds[0]}
            alt={product.shortName}
            query={`[${imageDescId}] [${imageTitleId}]`}
            ratio="4x5"
            width={priority ? '900' : '700'}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <StoreImage
            id={product.imageIds[1]}
            alt={`${product.shortName} alternate view`}
            query={`[${imageTitleId}] [${imageDescId}]`}
            ratio="4x5"
            width={priority ? '900' : '700'}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-4 rounded-full border border-white/50 bg-velmora-espresso/92 px-4 py-3 text-center text-xs uppercase tracking-[0.26em] text-velmora-ivory opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Quick add to cart
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5 sm:px-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">{product.category}</p>
              <h3 id={imageTitleId} className="mt-2 font-display text-2xl uppercase tracking-[0.24em] text-velmora-espresso sm:text-[1.85rem]">
                {product.name}
              </h3>
            </div>
            <span className="text-base text-velmora-espresso">{formatPrice(product.price)}</span>
          </div>
          <p id={imageDescId} className="text-sm leading-7 text-velmora-taupe">
            {product.description}
          </p>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product, 'Gold', 1)}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-velmora-espresso bg-velmora-espresso px-5 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </article>
  )
}
