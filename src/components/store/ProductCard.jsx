import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/storeData'
import { useStore } from '@/context/StoreContext'

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useStore()

  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const altImgId = `product-${product.id}-alt-desc`

  return (
    <article className="group rounded-[2rem] border border-velmora-mist/70 bg-white/75 p-4 text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-velmora-panel">
        <Link to={`/product/${product.slug}`} className="block">
          <img
            data-strk-img-id={`velmora-product-${product.id}-primary-c1`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`velmora-product-${product.id}-secondary-c2`}
            data-strk-img={`[${altImgId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        </Link>
        <div className="absolute left-4 top-4 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-velmora text-velmora-ink">
          {product.badge}
        </div>
        <button
          type="button"
          onClick={() => addToCart(product, 1, product.tones[0])}
          className="absolute inset-x-4 bottom-4 inline-flex translate-y-3 items-center justify-center gap-2 rounded-full border border-velmora-mist/60 bg-velmora-ivory/95 px-4 py-3 text-sm font-semibold text-velmora-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-velmora text-velmora-muted">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="mt-3 font-display text-xl uppercase tracking-velmora text-velmora-ink"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-sm font-semibold text-velmora-ink">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-velmora-muted">
          <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
          <span>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <p id={descId} className="mt-4 text-sm leading-7 text-velmora-muted">
          {product.blurb}
        </p>
        <p id={altImgId} className="sr-only">
          Alternate product angle showing the jewelry worn with warm editorial lighting.
        </p>
      </div>
    </article>
  )
}
