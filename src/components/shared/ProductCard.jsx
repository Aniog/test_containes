import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/store'
import { useCart } from '@/context/CartContext'
import Stars from './Stars'

const ProductCard = ({ product, instanceId, priority = false }) => {
  const { addItem } = useCart()
  const titleId = `${instanceId}-title`
  const descId = `${instanceId}-desc`
  const firstCaptionId = `${instanceId}-img-1`
  const secondCaptionId = `${instanceId}-img-2`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-stone-200">
        <Link to={`/product/${product.slug}`} className="block">
          <span id={firstCaptionId} className="sr-only">
            {product.cardImages[0].caption}
          </span>
          <span id={secondCaptionId} className="sr-only">
            {product.cardImages[1].caption}
          </span>
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.cardImages[0].id}
            data-strk-img={`[${firstCaptionId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            loading={priority ? 'eager' : 'lazy'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.cardImages[1].id}
            data-strk-img={`[${secondCaptionId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>

        <button
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-sm font-medium uppercase tracking-[0.22em] text-amber-200 opacity-100 transition duration-300 ease-out hover:bg-stone-900 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          type="button"
          onClick={() => addItem(product, product.variants[0], 1)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-5 pt-4 text-stone-900 sm:px-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                className="mt-2 font-['Cormorant_Garamond'] text-2xl uppercase tracking-[0.22em] text-stone-950 transition duration-300 hover:text-stone-700"
                id={titleId}
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="whitespace-nowrap text-base font-medium text-stone-950">
            {formatPrice(product.price)}
          </p>
        </div>

        <p className="text-sm leading-6 text-stone-600" id={descId}>
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-stone-200 pt-4">
          <div className="flex items-center gap-2">
            <Stars value={product.rating} />
            <span className="text-sm text-stone-500">{product.reviewCount}</span>
          </div>
          <span className="text-xs uppercase tracking-[0.28em] text-stone-500">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
