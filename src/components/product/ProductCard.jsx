import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/format'

const ProductCard = ({ product, onAddToCart, compact = false }) => (
  <article className="group text-velmora-ink">
    <div className="relative overflow-hidden rounded-2xl bg-velmora-ivory shadow-[0_1px_0_rgba(222,209,195,0.95)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush/45">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </Link>
      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="absolute inset-x-4 bottom-4 flex translate-y-0 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory opacity-100 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        <ShoppingBag className="h-4 w-4" />
        Add to Cart
      </button>
    </div>
    <div className={compact ? 'pt-4' : 'pt-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-ink transition hover:text-velmora-gold sm:text-xl">
              {product.name}
            </h3>
          </Link>
          <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">
            {product.description}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </div>
  </article>
)

export default ProductCard
