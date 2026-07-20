import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const formatPrice = (value) => `$${value.toFixed(0)}`

function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-blush shadow-soft">
        <Link
          to={`/products/${product.slug}`}
          className="relative block aspect-[4/5] overflow-hidden"
          aria-label={`View ${product.name}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 velmora-image-warmth"
            data-strk-bg-id={product.imgId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="720"
            role="img"
            aria-label={product.name}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 velmora-image-warmth"
            data-strk-bg-id={product.hoverImgId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="720"
            role="img"
            aria-label={`${product.name} worn`}
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-cream/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink opacity-0 shadow-soft backdrop-blur transition-all duration-300 hover:bg-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-umber">
          {product.category}
        </p>
        <Link to={`/products/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-umber">
          {compact ? product.material : product.description}
        </p>
        <p className="mt-3 font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

export default ProductCard
