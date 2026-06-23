import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

function ProductCard({ contextId, product }) {
  const { addItem } = useCart()
  const nameId = `${contextId}-${product.id}-name`
  const typeId = `${contextId}-${product.id}-type`
  const descId = `${contextId}-${product.id}-desc`

  return (
    <article className="group space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-stone-800/80 bg-stone-900/80">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <Link className="block" to={`/product/${product.id}`}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img={`[${typeId}] [${nameId}] [${contextId}]`}
              data-strk-img-id={`${contextId}-${product.imageId}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img={`[${descId}] [${nameId}] [${contextId}]`}
              data-strk-img-id={`${contextId}-${product.secondaryImageId}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>

        <button
          className="absolute bottom-4 left-4 right-4 z-20 inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-950 opacity-100 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => addItem(product, 1, product.tones[0])}
          type="button"
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      <div className="space-y-3 px-1">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400" id={typeId}>
              {product.category}
            </p>
            <Link className="block" to={`/product/${product.id}`}>
              <h3
                className="font-display text-2xl uppercase tracking-[0.24em] text-stone-100 transition group-hover:text-amber-100"
                id={nameId}
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="shrink-0 text-sm text-stone-100">${product.price}</span>
        </div>

        <p className="line-clamp-2 text-sm leading-7 text-stone-300" id={descId}>
          {product.shortDescription}
        </p>

        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
