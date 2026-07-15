import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { StockImage } from './StockImage'

export default function ProductCard({ product, onAdd, onOpen, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden rounded-none border border-velmora-taupe/25 bg-velmora-porcelain shadow-none transition duration-500 hover:border-velmora-champagne/70 hover:shadow-soft">
        <button
          type="button"
          onClick={() => onOpen(product.slug)}
          className="block w-full bg-transparent p-0 text-left focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
          aria-label={`View ${product.name}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cocoa">
            <p id={`product-${product.id}-image-context`} className="sr-only">Warm neutral editorial demi-fine jewelry styling</p>
            <p id={`product-${product.id}-worn-context`} className="sr-only">Jewelry worn close up with warm light</p>
            <StockImage
              id={`product-primary-${product.id}-a31`}
              query={`[${descId}] [${titleId}] [product-${product.id}-image-context]`}
              ratio="4x3"
              width="900"
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <StockImage
              id={`product-secondary-${product.id}-b72`}
              query={`[product-${product.id}-worn-context] [${titleId}]`}
              ratio="4x3"
              width="900"
              alt={`${product.name} styled`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute left-4 top-4 bg-velmora-ivory/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              {product.badge}
            </span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute bottom-4 left-4 right-4 z-10 translate-y-3 bg-velmora-espresso px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory opacity-0 transition duration-300 hover:bg-velmora-cocoa focus:outline-none focus:ring-2 focus:ring-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 id={titleId} className="font-serif text-sm uppercase tracking-[0.18em] text-velmora-espresso md:text-base">
              {product.name}
            </h3>
            <p id={descId} className="mt-2 text-sm leading-6 text-velmora-cocoa/75">
              {product.category} · {product.material}
            </p>
          </div>
          <p className="font-sans text-sm font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-velmora-champagne/70 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso transition duration-300 hover:bg-velmora-champagne hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}
