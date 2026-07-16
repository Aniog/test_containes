import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getVelmoraImage } from '@/data/imageAssets'

export default function ProductCard({ product, onAddToCart, sectionId = 'bestsellers-title', imageContext = 'bestsellers-card' }) {
  const nameId = `${imageContext}-${product.id}-name`
  const descId = `${imageContext}-${product.id}-desc`
  const primaryImage = getVelmoraImage(`product-${imageContext}-${product.id}-primary-velmora`)
  const hoverImage = getVelmoraImage(`product-${imageContext}-${product.id}-hover-velmora`)

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-velmora-sand/50 bg-velmora-ivory text-velmora-ink shadow-[0_24px_80px_rgba(42,31,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(42,31,26,0.14)]">
      <Link to={`/product/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-parchment">
          <img
            src={primaryImage}
            alt={`${product.name} gold jewelry product view`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          <img
            src={hoverImage}
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory shadow-xl transition-all duration-300 hover:bg-velmora-champagne hover:text-velmora-ink"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-velmora-bronze">{product.category}</p>
            <h3 id={nameId} className="mt-2 font-serif text-lg uppercase leading-tight tracking-[0.22em] text-velmora-ink">
              {product.name}
            </h3>
          </div>
          <p className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</p>
        </div>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-espresso/75">
          {product.description}
        </p>
      </div>
    </article>
  )
}
