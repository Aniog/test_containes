import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

export default function ProductCard({ product, onAddToCart, onViewProduct, compact = false, imageContext = 'card' }) {
  const safeContext = imageContext.replace(/[^a-z0-9-]/gi, '-').toLowerCase()
  const titleDomId = `${product.titleId}-${safeContext}`
  const descDomId = `${product.descId}-${safeContext}`

  return (
    <article className="group border border-velmora-taupe/30 bg-velmora-pearl text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <button
        type="button"
        onClick={() => onViewProduct(product.id)}
        className="relative block w-full overflow-hidden bg-velmora-ivory text-left"
        aria-label={`View ${product.name}`}
      >
        <img
          alt={product.name}
          className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={`${safeContext}-${product.imageId}`}
          data-strk-img={`[${descDomId}] [${titleDomId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src={placeholder}
        />
        <img
          alt={`${product.name} worn detail`}
          className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={`${safeContext}-${product.hoverImageId}`}
          data-strk-img={`[${titleDomId}] [${descDomId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src={placeholder}
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="bg-velmora-espresso/90 px-4 py-3 text-center text-xs font-bold uppercase tracking-luxury text-velmora-pearl backdrop-blur">
            Quick view
          </div>
        </div>
      </button>

      <div className="space-y-3 p-4 md:p-5">
        <div className="flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-luxury text-velmora-burnished">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-espresso">
            <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onViewProduct(product.id)}
          className="block text-left font-serif text-lg uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-burnished"
        >
          <span id={titleDomId}>{product.name}</span>
        </button>
        {!compact && (
          <p id={descDomId} className="line-clamp-2 text-sm leading-6 text-velmora-espresso/70">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between border-t border-velmora-taupe/30 pt-4">
          <span className="font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-gold px-4 py-2 text-[0.68rem] font-bold uppercase tracking-luxury text-velmora-espresso transition duration-300 hover:bg-velmora-gold"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
