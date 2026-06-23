import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative overflow-hidden border border-velmora-oyster bg-velmora-pearl text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <ProductImage
            product={product}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            ratio="4x3"
            width="700"
          />
          <ProductImage
            product={product}
            variant="hover"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            ratio="4x3"
            width="700"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 bg-velmora-pearl/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-velmora-goldDeep backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="space-y-3 p-4 sm:p-5">
        <div>
          <p id={product.imageRef.titleId} className="font-serifDisplay text-lg uppercase tracking-[0.22em] text-velmora-ink">
            {product.name}
          </p>
          <p id={product.imageRef.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-bark">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-velmora-oyster pt-3">
          <span className="font-medium text-velmora-ink">${product.price}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className={`inline-flex items-center justify-center gap-2 bg-velmora-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-pearl transition hover:bg-velmora-goldDeep ${compact ? '' : 'md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'}`}
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
