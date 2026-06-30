import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../data/products.js'

const placeholder =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const imageContextId = `product-${product.id}-image-context`

  return (
    <article className="group text-velmora-ink">
      <a href={`#/product/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-4 focus:ring-offset-velmora-porcelain">
        <div className="relative overflow-hidden bg-velmora-champagne shadow-soft">
          <div className={compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}>
            <img
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:opacity-0"
              data-strk-img-id={product.imageId}
              data-strk-img={`[${imageContextId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={placeholder}
            />
            <img
              alt={`${product.name} worn`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              data-strk-img-id={product.hoverImageId}
              data-strk-img={`[${imageContextId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={placeholder}
            />
          </div>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center justify-center gap-2 bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-pearl shadow-velvet">
              <ShoppingBag className="h-4 w-4" /> Quick Add to Cart
            </span>
          </div>
        </div>
      </a>
      <p id={imageContextId} className="sr-only">{product.query}</p>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p id={titleId} className="font-serif text-lg font-semibold uppercase tracking-luxe text-velmora-ink md:text-xl">
            {product.name}
          </p>
          <p id={descId} className="mt-2 text-sm leading-6 text-velmora-cocoa">
            {product.category} · {product.material}
          </p>
        </div>
        <p className="shrink-0 text-sm font-bold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full border border-velmora-ink/20 px-5 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ink"
      >
        Add to Cart
      </button>
    </article>
  )
}
