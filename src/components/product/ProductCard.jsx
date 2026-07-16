import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative overflow-hidden rounded-t-full border border-velmora-sand/80 bg-velmora-porcelain text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className={`${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'} relative overflow-hidden rounded-t-full bg-velmora-sand/45`}>
          <img
            alt={product.name}
            src={product.image}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            alt={`${product.name} worn detail`}
            src={product.hoverImage}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
          />
        </div>
      </Link>

      <div className="px-4 pb-5 pt-5 sm:px-5">
        <div className="mb-3 flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          <span className="ml-1 text-xs text-velmora-cocoa/70">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-base font-semibold uppercase tracking-[0.2em] text-velmora-espresso transition-colors group-hover:text-velmora-champagne">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa/74">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="font-serif text-2xl text-velmora-espresso">${product.price}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="translate-y-1 rounded-full bg-velmora-espresso px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-velmora-ivory opacity-100 transition duration-300 hover:bg-velmora-champagne hover:text-velmora-espresso sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
