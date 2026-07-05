import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function ProductCard({ product, onAdd, context = 'card', compact = false }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const mainImageId = context === 'home-best' ? product.imageId : `${context}-${product.id}-main`
  const hoverImageId = context === 'home-best' ? product.hoverImageId : `${context}-${product.id}-hover`

  return (
    <article className="group flex h-full flex-col bg-velmora-pearl text-velmora-cocoa shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden velmora-image" aria-label={`View ${product.name}`}>
        <img
          alt={product.name}
          className="aspect-[4/5] h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={mainImageId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
        />
        <img
          alt={`${product.name} worn`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={hoverImageId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
        />
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/25 bg-velmora-ink/65 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-velmora-pearl backdrop-blur">
          {product.category}
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            onAdd(product)
          }}
          className="absolute inset-x-4 bottom-4 z-10 translate-y-3 border border-velmora-champagne bg-velmora-champagne px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink opacity-0 shadow-glow transition duration-500 hover:bg-velmora-pearl group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </Link>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-velmora-antique">
          <span className="font-semibold uppercase tracking-[0.2em]">{product.material}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-velmora-cocoa">
            <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
            {product.rating}
          </span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-ink transition group-hover:text-velmora-antique">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-cocoa/80">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-mist pt-4">
          <span className="font-serif text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-mist text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-ink"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
