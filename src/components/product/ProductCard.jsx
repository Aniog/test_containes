import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

function ProductCard({ product, onAddToCart, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const primaryImage = getStrkImageUrl(product.imageIds.primary)
  const hoverImage = getStrkImageUrl(product.imageIds.hover)

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-velmora-cocoa/10 bg-velmora-ivory text-velmora-espresso shadow-[0_24px_70px_rgba(33,23,19,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(33,23,19,0.14)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <img
            data-strk-img-id={product.imageIds.primary}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src={primaryImage}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imageIds.hover}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src={hoverImage}
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-velmora-cocoa backdrop-blur">
            {product.category}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-gold px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-velmora-espresso opacity-0 shadow-lg shadow-velmora-espresso/15 transition duration-300 hover:bg-velmora-softgold group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className={compact ? 'space-y-2 p-4' : 'space-y-3 p-5 sm:p-6'}>
        <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          <span className="ml-2 text-xs font-medium text-velmora-cocoa/80">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3
            id={titleId}
            className="font-serif text-lg uppercase leading-snug tracking-[0.18em] text-velmora-espresso sm:text-xl"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="text-sm leading-6 text-velmora-cocoa/85">
          {product.tagline}
        </p>
        <div className="flex items-center justify-between border-t border-velmora-cocoa/10 pt-4">
          <span className="font-serif text-xl text-velmora-espresso">{formatPrice(product.price)}</span>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-cocoa/70">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
