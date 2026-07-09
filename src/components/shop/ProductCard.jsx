import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const titleId = `${product.slug}-title`
  const detailsId = `${product.slug}-details`

  return (
    <article className="group rounded-[2rem] border border-velmora-line bg-velmora-panel p-4 text-velmora-cocoa shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-velmora-paper">
        <Link to={`/product/${product.slug}`} className="block">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            data-strk-img-id={`${product.slug}-primary-img`}
            data-strk-img={`[${detailsId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            data-strk-img-id={`${product.slug}-hover-img`}
            data-strk-img={`[${product.slug}-hover-copy] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
          />
        </Link>

        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line bg-velmora-panel/85 text-velmora-cocoa backdrop-blur transition hover:border-velmora-gold hover:text-velmora-gold"
          aria-label={`Save ${product.name}`}
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition duration-300 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-xs uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-cocoa"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-1 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-velmora-muted">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="mt-3 font-display text-[1.7rem] uppercase tracking-[0.22em] text-velmora-cocoa transition group-hover:text-velmora-bronze"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-velmora-cocoa">
            {formatPrice(product.price)}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-velmora-stone">
          <div className="flex items-center gap-1 text-velmora-gold-deep">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span>{product.rating}</span>
          <span>·</span>
          <span>{product.reviewCount} reviews</span>
        </div>

        <p id={detailsId} className="mt-4 text-sm leading-7 text-velmora-stone">
          {product.shortDescription}
        </p>
        <p id={`${product.slug}-hover-copy`} className="sr-only">
          {product.hoverImageDescription}
        </p>
      </div>
    </article>
  )
}
