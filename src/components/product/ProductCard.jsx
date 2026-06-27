import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductCard({ product, onAdd, onView, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group border border-sand bg-porcelain text-noir transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(23,18,15,0.12)]">
      <button
        type="button"
        onClick={() => onView(product.id)}
        className="relative block w-full overflow-hidden bg-ivory text-left"
        aria-label={`View ${product.name}`}
      >
        <img
          data-strk-img-id={`product-main-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`product-hover-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
          alt={`${product.name} worn`}
          className="absolute inset-0 aspect-[4/3] h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-porcelain/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-noir shadow-sm">
          {product.category}
        </span>
      </button>

      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="mb-3 flex items-center gap-1 text-champagne" aria-label={`${product.rating} stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
          ))}
          <span className="ml-2 font-sans text-xs font-medium text-taupe">{product.rating}</span>
        </div>
        <button type="button" onClick={() => onView(product.id)} className="block text-left">
          <h3 id={titleId} className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-noir">
            {product.name}
          </h3>
        </button>
        <p id={descId} className="mt-2 min-h-10 font-sans text-sm leading-6 text-taupe">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-sand pt-4">
          <span className="font-sans text-base font-semibold text-noir">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-full bg-noir px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition duration-300 hover:bg-champagne hover:text-noir focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-porcelain"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
