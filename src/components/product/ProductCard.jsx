import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart()
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-blush shadow-soft">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0 ${
              compact ? 'aspect-[4/5]' : 'aspect-[3/4]'
            }`}
            data-strk-img-id={`product-primary-${product.slug}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          />
          <img
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.slug}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          />
        </Link>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cream opacity-100 shadow-glow transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <Link to={`/product/${product.slug}`}>
            <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-6 tracking-[0.14em] text-velmora-ink transition hover:text-velmora-champagne">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="mt-2 text-sm leading-6 text-velmora-cocoa/75">
            {product.description}
          </p>
          <div className="mt-3 flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="ml-2 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-cocoa/65">
              {product.reviews}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-sm font-bold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
