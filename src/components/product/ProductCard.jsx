import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const formatPrice = (value) => `$${value}`

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group text-velmora-ink">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-velmora-parchment shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.titleId}] worn on model warm gold jewelry editorial`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-porcelain/95 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-velmora-ink shadow-soft backdrop-blur transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className={`${compact ? 'pt-4' : 'pt-5'} text-velmora-ink`}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold">{product.category}</p>
        <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-velmora-ink sm:text-2xl">
          <Link to={`/product/${product.id}`} className="transition hover:text-velmora-gold">{product.name}</Link>
        </h3>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">{product.description}</p>
        <div className="mt-3 flex items-center justify-between border-t border-velmora-gold/20 pt-3">
          <span className="text-sm font-bold text-velmora-ink">{formatPrice(product.price)}</span>
          <span className="text-xs font-semibold text-velmora-taupe">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
