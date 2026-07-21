import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/format'
import JewelryVisual from '@/components/product/JewelryVisual'

export default function ProductCard({ product, onAdd, context = 'grid' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group relative text-velmora-ink">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-stone shadow-[0_18px_45px_rgba(48,35,26,0.08)]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <JewelryVisual
            product={product}
            label={product.name}
            className="aspect-[4/5] w-full transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <JewelryVisual
            product={product}
            label={`${product.name} styled`}
            variant="worn"
            className="absolute inset-0 aspect-[4/5] h-full w-full opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-cream opacity-100 shadow-lg transition duration-300 hover:bg-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-champagne sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="pt-5">
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-velmora-muted">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 id={titleId} className="font-serif text-xl uppercase tracking-[0.16em] text-velmora-ink transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-muted">{product.description}</p>
        <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
