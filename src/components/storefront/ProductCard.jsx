import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import ImageSlot from './ImageSlot'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const query = `[${product.descId}] [${product.titleId}]`

  return (
    <article className="group border border-velmora-hairline/80 bg-velmora-porcelain text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.slug}`} className="block text-velmora-ink">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <ImageSlot
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            imgId={product.imageId}
            query={query}
            ratio="4x3"
            width="900"
          />
          <ImageSlot
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            imgId={product.hoverImageId}
            query={query}
            ratio="4x3"
            width="900"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-ivory shadow-glow transition hover:bg-velmora-gold hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-luxury text-velmora-brass">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="text-velmora-ink transition hover:text-velmora-brass">
          <h3
            id={product.titleId}
            className="font-serifDisplay text-lg uppercase leading-tight tracking-luxury sm:text-xl"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-muted">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-hairline/70 pt-4">
          <span className="font-sans text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-luxury text-velmora-muted">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
