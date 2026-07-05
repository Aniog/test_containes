import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { StockImage } from './StockImage.jsx'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-velmora-champagne/20 bg-velmora-pearl text-velmora-obsidian shadow-[0_20px_70px_rgba(32,25,19,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(32,25,19,0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-obsidian">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <StockImage
            id={product.imageId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <StockImage
            id={product.hoverImageId}
            query={`[${product.titleId}] [${product.descId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-ivory px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-obsidian opacity-0 shadow-lg transition duration-300 hover:bg-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-velmora-taupe">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-[0.17em] text-velmora-obsidian transition hover:text-velmora-champagneDark">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-ink/75">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-champagne/20 pt-4">
          <span className="font-serif text-2xl text-velmora-obsidian">${product.price}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
