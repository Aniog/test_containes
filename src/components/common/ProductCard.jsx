import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StarRating from './StarRating.jsx'
import { formatCurrency } from '@/lib/utils.js'
import { useCart } from '@/context/CartContext.jsx'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group rounded-[2rem] border border-velmora-line/70 bg-velmora-ivory p-3 text-velmora-ink shadow-[0_20px_60px_rgba(31,23,21,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(31,23,21,0.1)]">
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-[1.6rem] bg-velmora-sand/35">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            data-strk-img-id={`card-${product.id}-primary`}
            data-strk-img={`[${product.primaryDescId}] [${product.primaryTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`card-${product.id}-secondary`}
            data-strk-img={`[${product.secondaryDescId}] [${product.secondaryTitleId}] [${product.primaryTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-x-3 bottom-3 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addItem(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-panel"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="px-2 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-velmora-mist">{product.category}</p>
          <span className="rounded-full border border-velmora-line bg-velmora-sand/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-velmora-mist">
            {product.badge}
          </span>
        </div>
        <div className="hidden">
          <p id={product.primaryTitleId}>{product.name}</p>
          <p id={product.primaryDescId}>{product.description}</p>
          <p id={product.secondaryTitleId}>{product.name} alternate</p>
          <p id={product.secondaryDescId}>{product.details}</p>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-display text-[1.7rem] uppercase tracking-[0.24em] text-velmora-ink transition group-hover:text-velmora-gold">
            {product.shortName}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-6 text-velmora-mist">{product.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <p className="text-lg text-velmora-ink">{formatCurrency(product.price)}</p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
