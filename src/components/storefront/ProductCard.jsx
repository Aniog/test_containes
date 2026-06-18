import { ShoppingBag, Star } from 'lucide-react'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function ProductCard({ product, onAdd, onOpen, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-velmora-champagne/25 bg-velmora-pearl text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <button type="button" className="block text-left" onClick={() => onOpen(product.id)}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-primary-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.id}`}
            data-strk-img={`worn detail [${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <span className="absolute left-3 top-3 rounded-full bg-velmora-pearl/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-velmora-ink">
            {product.badge}
          </span>
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onAdd(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-pearl transition hover:bg-velmora-bark"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <button type="button" className="text-left" onClick={() => onOpen(product.id)}>
          <h3 id={titleId} className="font-serif text-base uppercase tracking-[0.22em] text-velmora-ink md:text-lg">
            {product.name}
          </h3>
        </button>
        <p id={descId} className={compact ? 'sr-only' : 'line-clamp-2 text-sm leading-6 text-velmora-bark/80'}>
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-velmora-champagne/20 pt-3">
          <span className="text-base font-semibold text-velmora-ink">${product.price}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-velmora-bark">
            <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
            {product.rating}
          </span>
        </div>
      </div>
    </article>
  )
}
