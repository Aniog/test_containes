import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { EditorialImage } from './EditorialImage.jsx'
import { formatPrice, ProductRating } from './storefront-utils.jsx'

export function ProductCard({ product }) {
  const { addToCart } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const metaId = `product-${product.id}-meta`
  const hoverId = `product-${product.id}-hover`

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden rounded-t-3xl bg-stone-100">
        <EditorialImage
          alt={product.name}
          imageId={product.imageId}
          query={`[${descId}] [${titleId}] [${metaId}]`}
          ratio="4x5"
          width="800"
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <EditorialImage
          alt={`${product.name} alternate view`}
          imageId={product.hoverImageId}
          query={`[${hoverId}] [${titleId}] [${descId}]`}
          ratio="4x5"
          width="800"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-stone-950/92 px-4 py-3 text-center text-[11px] uppercase tracking-[0.28em] text-stone-50 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Quick add
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p id={metaId} className="text-[0.7rem] uppercase tracking-[0.25em] text-stone-500">
                {product.category} · {product.material}
              </p>
              <Link to={`/product/${product.id}`}>
                <h3 id={titleId} className="mt-2 font-serif text-xl uppercase tracking-[0.22em] text-stone-950">
                  {product.name}
                </h3>
              </Link>
            </div>
            <p className="whitespace-nowrap text-sm text-stone-900">{formatPrice(product.price)}</p>
          </div>
          <p id={descId} className="text-sm leading-7 text-stone-600">
            {product.shortDescription}
          </p>
          <p id={hoverId} className="sr-only">
            Editorial alternate view of warm gold jewelry on model in soft studio light.
          </p>
          <ProductRating rating={product.rating} reviews={product.reviews} />
        </div>

        <button
          type="button"
          onClick={() => addToCart(product, 'Gold', 1)}
          className="mt-auto rounded-full border border-stone-300 bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.28em] text-stone-900 transition hover:border-stone-900 hover:bg-stone-900 hover:text-stone-50"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
