import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx?probe=velmora17'
import { formatPrice } from '@/data/products.js'

export default function ProductCard({ product, onAdd, context = 'grid' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group bg-velmora-parchment text-velmora-ink border border-velmora-line shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush">
          <ImageSlot id={`${context}-${product.id}-primary-img`} query={`[${descId}] [${titleId}]`} ratio="4x3" width="800" alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <ImageSlot id={`${context}-${product.id}-hover-img`} query={`[${titleId}] [${descId}]`} ratio="4x3" width="800" alt={`${product.name} worn`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-velmora-espresso">{product.badge}</div>
          <button type="button" onClick={(event) => { event.preventDefault(); onAdd(product) }} className="absolute inset-x-4 bottom-4 translate-y-3 bg-velmora-champagne px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100">Add to Cart</button>
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-velmora-muted">
          <span className="text-xs uppercase tracking-[0.26em]">{product.category}</span>
          <span className="flex items-center gap-1 text-xs text-velmora-espresso"><Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" /> {product.rating}</span>
        </div>
        <Link to={`/product/${product.slug}`} className="block text-velmora-ink hover:text-velmora-espresso">
          <h3 id={titleId} className="font-serif text-xl uppercase tracking-[0.18em]">{product.name}</h3>
        </Link>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-muted">{product.shortDescription}</p>
        <div className="flex items-center justify-between border-t border-velmora-line pt-4">
          <span className="font-semibold text-velmora-ink">{formatPrice(product.price)}</span>
          <button type="button" onClick={() => onAdd(product)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-velmora-gold text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory" aria-label={`Add ${product.name} to cart`}><ShoppingBag className="h-4 w-4" /></button>
        </div>
      </div>
    </article>
  )
}
