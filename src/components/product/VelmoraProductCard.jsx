import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'

const ProductCard = ({ product, onAdd, onSelect, compact = false }) => {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const materialId = `product-${product.id}-material`
  const artClass = product.id.replaceAll('-', '_')

  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-pearl text-espresso">
      <div className={`relative overflow-hidden bg-stone ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
        <button
          type="button"
          onClick={() => onSelect(product.id)}
          className="absolute inset-0 z-10 block text-left"
          aria-label={`View ${product.name}`}
        >
          <span
            role="img"
            aria-label={product.name}
            className={`velmora-jewel-art velmora-jewel-art-${artClass} absolute inset-0 transition duration-700 group-hover:scale-105 group-hover:opacity-0`}
          />
          <span
            role="img"
            aria-label={`${product.name} styled`}
            className={`velmora-jewel-art velmora-jewel-art-${artClass} absolute inset-0 scale-105 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100`}
          />
          <span className="sr-only">View {product.name}</span>
        </button>
        <div className="pointer-events-none absolute left-3 top-3 z-20 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso backdrop-blur">
          {product.badge}
        </div>
        <div className="absolute inset-x-3 bottom-3 z-20 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-ivory shadow-soft transition hover:bg-cocoa"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-x border-b border-champagne/25 px-4 py-5 sm:px-5">
        <button type="button" onClick={() => onSelect(product.id)} className="text-left">
          <h3 id={titleId} className="font-serif text-lg uppercase leading-snug tracking-[0.18em] text-espresso sm:text-xl">
            {product.name}
          </h3>
        </button>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-taupe">
          {product.description}
        </p>
        <p id={materialId} className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-cocoa">
          {product.material}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-serif text-2xl text-espresso">{formatPrice(product.price)}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-espresso">
            <Star className="h-3.5 w-3.5 fill-gold text-goldDeep" />
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
