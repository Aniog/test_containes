import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

function ProductCard({ product, onAddToCart }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const hoverId = `product-${product.id}-hover`

  return (
    <article className="group rounded-[2rem] border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-100">
        <Link to={`/product/${product.id}`} className="block">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={`card-primary-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={`card-secondary-${product.id}`}
            data-strk-img={`[${hoverId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
          />
        </Link>

        <button
          type="button"
          onClick={() => onAddToCart(product, product.tones[0])}
          className="absolute inset-x-4 bottom-4 inline-flex translate-y-4 items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-xs uppercase tracking-[0.3em] text-stone-50 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="space-y-3 px-2 pb-2 pt-5 text-stone-900">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-stone-500">
          <span>{product.category}</span>
          <span>{product.badge}</span>
        </div>
        <div className="space-y-2">
          <Link to={`/product/${product.id}`}>
            <h3 id={titleId} className="font-serif text-xl uppercase tracking-[0.3em] text-stone-900">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="text-sm leading-7 text-stone-600">
            {product.shortDescription}
          </p>
          <p id={hoverId} className="sr-only">
            Alternate styling view of {product.galleryNotes[1]}
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-sm text-stone-500">
            <Star className="h-4 w-4 fill-amber-200 text-amber-200" />
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
