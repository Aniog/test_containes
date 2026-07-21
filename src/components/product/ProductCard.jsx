import { ShoppingBag } from 'lucide-react'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, onViewProduct }) {
  const query = `[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`

  return (
    <article className="group min-w-0 text-velmora-espresso">
      <button
        type="button"
        onClick={() => onViewProduct(product)}
        className="relative block w-full overflow-hidden rounded-t-full border border-velmora-line bg-velmora-pearl p-0 text-left shadow-none transition duration-500 hover:-translate-y-1 hover:border-velmora-gold hover:shadow-card focus:outline-none focus:ring-2 focus:ring-velmora-gold"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={query}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src={placeholder}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.titleId}] worn on model warm gold jewelry editorial`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src={placeholder}
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center justify-center gap-2 rounded-full bg-velmora-noir px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory shadow-soft">
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </span>
          </div>
        </div>
      </button>

      <div className="flex items-start justify-between gap-4 border-x border-b border-velmora-line bg-velmora-ivory px-4 py-5 sm:px-5">
        <div className="min-w-0">
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-velmora-taupe">
            {product.category}
          </p>
          <button
            type="button"
            onClick={() => onViewProduct(product)}
            className="block p-0 text-left font-serif text-lg uppercase tracking-[0.18em] text-velmora-espresso transition hover:text-velmora-bronze focus:outline-none focus:ring-2 focus:ring-velmora-gold"
          >
            <span id={product.titleId}>{product.name}</span>
          </button>
          <p id={product.descId} className="sr-only">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="whitespace-nowrap text-sm font-semibold text-velmora-espresso">
            ${product.price}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-velmora-gold bg-velmora-gold px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-velmora-espresso transition hover:-translate-y-0.5 hover:bg-velmora-bronze hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-gold"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
