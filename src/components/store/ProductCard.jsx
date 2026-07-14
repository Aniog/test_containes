import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const formatPrice = (price) => `$${price}`

function ProductCard({ product, onAddToCart, priority = false }) {
  return (
    <article className="group rounded-[28px] border border-velmora-line bg-white/95 shadow-velmora-card transition duration-500 hover:-translate-y-1 hover:shadow-velmora-hover">
      <div className="relative overflow-hidden rounded-[28px] bg-velmora-latte">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative aspect-[4/5]">
            <img
              alt={product.name}
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}] [home-section-bestsellers]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
              loading={priority ? 'eager' : 'lazy'}
            />
            <img
              alt={`${product.name} alternate view`}
              data-strk-img-id={product.hoverImgId}
              data-strk-img={`[${product.titleId}] [${product.descId}] [ugc-strip-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        </Link>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-velmora-espresso backdrop-blur-sm">
            {product.badge}
          </span>
          <span className="rounded-full bg-velmora-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-velmora-ivory">
            {product.material}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-5 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-4 py-3 text-sm font-medium text-velmora-ivory opacity-0 shadow-lg transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      <div className="space-y-3 px-5 pb-5 pt-4 text-velmora-espresso sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p id={product.titleId} className="font-display text-lg uppercase tracking-[0.36em] text-velmora-espresso">
              {product.name}
            </p>
            <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-mocha">
              {product.shortDescription}
            </p>
          </div>
          <p className="shrink-0 text-base font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>

        <div className="flex items-center justify-between border-t border-velmora-line pt-3 text-xs uppercase tracking-[0.24em] text-velmora-mocha">
          <span>
            {product.rating} · {product.reviews} reviews
          </span>
          <Link
            to={`/product/${product.id}`}
            className="font-medium text-velmora-espresso transition hover:text-velmora-gold"
          >
            View product
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
