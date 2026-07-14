import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { money } from '../../data/products'
import { getStrkImageUrl } from '../../lib/strkImageUrl'
import Stars from './Stars'

const ProductCard = ({ product, onAddToCart, compact = false }) => {
  const primaryImage = getStrkImageUrl(product.imageIds[0])
  const hoverImage = getStrkImageUrl(product.imageIds[1]) || primaryImage

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-velmora-hairline bg-velmora-pearl text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative overflow-hidden bg-velmora-linen">
        <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
          <img
            src={primaryImage}
            alt={product.name}
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={hoverImage}
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-widest text-velmora-pearl shadow-soft transition hover:bg-velmora-brass"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className={`${compact ? 'p-4' : 'p-5 md:p-6'}`}>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-velmora-brass">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-widestLuxury text-velmora-ink transition hover:text-velmora-brass">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-smoke">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-velmora-ink">{money(product.price)}</span>
          <Stars rating={product.rating} reviews={product.reviews} compact />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
