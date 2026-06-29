import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../data/products.js'

function ProductCard({ product, onAddToCart, context }) {
  const titleId = product.titleId
  const descId = product.descId

  return (
    <article className="group relative border border-velmora-line bg-velmora-porcelain text-velmora-ink transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(36,25,20,0.12)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush/30">
          <ProductImage
            product={product}
            context={context}
            variant="main"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            context={context}
            variant="hover"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute left-3 top-3 bg-velmora-porcelain/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-velmora-cocoa backdrop-blur">
            {product.badge}
          </span>
        </div>
      </Link>

      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-center gap-1 text-velmora-antique" aria-label={`${product.rating} stars`}>
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-3.5 w-3.5 fill-current" strokeWidth={1.2} />
          ))}
          <span className="ml-1 text-xs font-medium text-velmora-cocoa">{product.rating}</span>
        </div>

        <div>
          <Link to={`/product/${product.id}`} className="text-velmora-ink transition hover:text-velmora-antique">
            <h3 id={titleId} className="font-serif text-lg uppercase leading-tight tracking-luxury sm:text-xl">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-velmora-line pt-3">
          <span className="font-sans text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 bg-velmora-ink px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-velmora-cream opacity-100 transition hover:bg-velmora-antique sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
