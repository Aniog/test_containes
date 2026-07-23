import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAdd, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`

  return (
    <article className="group overflow-hidden border border-velmora-sand/80 bg-velmora-pearl text-velmora-ink shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/40">
          <ProductImage
            id={`product-primary-${product.id}-a92`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            id={`product-hover-${product.id}-c74`}
            query={`[${categoryId}] [${titleId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAdd(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-pearl shadow-lg transition hover:bg-velmora-gold"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className={compact ? 'p-4' : 'p-5 md:p-6'}>
        <div className="mb-3 flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-velmora-gold-deep">
          <span id={categoryId}>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-ink"><Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" /> {product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.22em] text-velmora-ink transition group-hover:text-velmora-gold-deep md:text-xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-charcoal/80">{product.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-sand/80 pt-4">
          <span className="text-base font-semibold text-velmora-ink">${product.price}</span>
          <Link to={`/product/${product.id}`} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-gold-deep hover:text-velmora-ink">
            View
          </Link>
        </div>
      </div>
    </article>
  )
}
