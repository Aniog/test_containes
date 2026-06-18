import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group text-velmora-espresso">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-blush shadow-sm">
          <div className="image-sheen relative aspect-[4/5] overflow-hidden">
            <img
              alt={`${product.name} gold jewelry`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src={placeholder}
            />
            <img
              alt={`${product.name} worn detail`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={product.hoverImgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src={placeholder}
            />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full bg-velmora-pearl px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </Link>
      <div className={`${compact ? 'pt-4' : 'pt-5'}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-gold">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="mt-2 font-serif text-xl uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-taupe/50 pt-4">
          <span className="text-sm text-velmora-cocoa">{product.material}</span>
          <span className="font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  )
}
