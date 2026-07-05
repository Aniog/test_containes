import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

function ProductCard({ product, onAddToCart, onOpenProduct, compact = false }) {
  return (
    <article className="group min-w-0 text-velmora-espresso">
      <button
        type="button"
        className="block w-full overflow-hidden rounded-none bg-velmora-champagne text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-ivory"
        onClick={() => onOpenProduct(product.id)}
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <ProductImage
            product={product}
            idPrefix="card"
            variant="primary"
            ratio="4x3"
            width="800"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            idPrefix="card"
            variant="secondary"
            ratio="4x3"
            width="800"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-pearl shadow-soft">
              <ShoppingBag className="h-4 w-4" />
              Quick view
            </span>
          </div>
        </div>
      </button>

      <div className={`${compact ? 'pt-4' : 'pt-5'} flex items-start justify-between gap-4`}>
        <div className="min-w-0">
          <button
            type="button"
            className="text-left font-serif text-sm uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze md:text-base"
            onClick={() => onOpenProduct(product.id)}
          >
            {product.name}
          </button>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-velmora-espresso/55">
            {product.category}
          </p>
        </div>
        <p className="font-sans text-sm font-semibold text-velmora-espresso">${product.price}</p>
      </div>

      <button
        type="button"
        className="mt-4 w-full border border-velmora-taupe/50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-pearl"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
