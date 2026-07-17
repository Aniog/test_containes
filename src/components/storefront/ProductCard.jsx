import { Star } from 'lucide-react'
import { getStrkImageUrl } from '../../lib/image-url.js'

export default function ProductCard({ product, onAddToCart, onOpenProduct, compact = false }) {
  const mainImage = getStrkImageUrl(product.imageId)
  const hoverImage = getStrkImageUrl(product.hoverImageId) || mainImage

  return (
    <article className="group relative overflow-hidden rounded-t-full border border-velmora-sand bg-velmora-ivory text-velmora-ink shadow-[0_18px_60px_rgba(58,42,33,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(58,42,33,0.14)]">
      <div role="button" tabIndex={0} onClick={() => onOpenProduct(product)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') onOpenProduct(product) }} className="block w-full bg-transparent p-0 text-left focus:outline-none focus:ring-2 focus:ring-velmora-champagne" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <img alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105" src={mainImage} />
          <img alt={`${product.name} worn`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105" src={hoverImage} />
          <span className="absolute left-4 top-4 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-velmora-espresso shadow-sm">{product.badge}</span>
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button type="button" onClick={(event) => { event.stopPropagation(); onAddToCart(product) }} className="w-full rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory shadow-xl transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={`${compact ? 'p-4' : 'p-5 md:p-6'}`}>
        <p className="mb-2 text-[0.68rem] uppercase tracking-[0.26em] text-velmora-clay">{product.category}</p>
        <h3 id={product.titleId} className="font-serif text-lg uppercase leading-tight tracking-[0.16em] text-velmora-ink md:text-xl">{product.name}</h3>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-clay">{product.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-sand pt-4">
          <span className="font-sans text-base font-semibold text-velmora-ink">${product.price}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-velmora-clay"><Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />{product.rating}</span>
        </div>
      </div>
    </article>
  )
}
