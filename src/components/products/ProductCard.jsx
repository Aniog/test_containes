import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/lib/cart'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-pearl">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn detail`}
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <button onClick={() => onAddToCart(product)} className="absolute inset-x-4 bottom-4 translate-y-4 rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory opacity-0 shadow-xl transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
      <div className={`${compact ? 'pt-4' : 'pt-5'}`}>
        <div className="mb-2 flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
          <span className="ml-1 text-xs font-medium text-velmora-sable">{product.rating}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-lg uppercase leading-snug tracking-[0.18em] text-velmora-ink transition group-hover:text-velmora-champagne">{product.name}</h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-sable">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-serif text-xl text-velmora-ink">{formatPrice(product.price)}</p>
          <button onClick={() => onAddToCart(product)} className="inline-flex items-center gap-2 rounded-full border border-velmora-mist px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-champagne/15 sm:hidden">
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  )
}
