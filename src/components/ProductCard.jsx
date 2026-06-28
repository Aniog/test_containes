import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { placeholderSvg } from '@/data/products'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] text-[var(--color-espresso)] shadow-[0_20px_60px_rgba(33,24,18,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(33,24,18,0.12)]">
      <div className="relative overflow-hidden bg-[var(--color-espresso)]">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <div className="aspect-[4/5]">
            <img alt={`${product.name} styled on warm neutral background`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" src={placeholderSvg} />
            <img alt={`${product.name} detail view`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" src={placeholderSvg} />
          </div>
        </Link>
        <button type="button" onClick={() => onAddToCart(product)} className="absolute inset-x-4 bottom-4 z-20 translate-y-0 rounded-full bg-[var(--color-gold)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)] opacity-100 shadow-xl transition duration-300 hover:bg-[var(--color-gold-dark)] sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 focus:translate-y-0 focus:opacity-100">Add to Cart</button>
      </div>
      <div className={`${compact ? 'p-4' : 'p-5'}`}>
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-[var(--color-muted)]">
          <span>{product.category}</span>
          <span className="inline-flex items-center gap-1 text-[var(--color-gold-dark)]"><Star className="h-3.5 w-3.5 fill-current" /> {product.rating}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="min-h-10 text-sm font-bold uppercase leading-5 tracking-[0.2em] text-[var(--color-espresso)] transition-colors duration-300 hover:text-[var(--color-gold-dark)]">{product.name}</h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">{product.summary}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-[var(--font-heading)] text-2xl text-[var(--color-espresso)]">${product.price}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold-dark)]">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
