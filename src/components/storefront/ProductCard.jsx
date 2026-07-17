import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  const baseId = `card-${product.id}`
  const cardRef = useRef(null)

  useEffect(() => {
    let disposeImages = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!cardRef.current) {
        return
      }

      const cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
      disposeImages = typeof cleanup === 'function' ? cleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disposeImages()
    }
  }, [product.id])

  return (
    <article
      ref={cardRef}
      className="group relative rounded-[2rem] border border-brand-line bg-brand-surface text-brand-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxe"
    >
      <span id={`${baseId}-title`} className="sr-only">
        {product.name}
      </span>
      <span id={`${baseId}-subtitle`} className="sr-only">
        {product.shortDescription}
      </span>
      <span id={`${baseId}-category`} className="sr-only">
        {product.category} {product.subcategory}
      </span>

      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-champagne">
          <img
            alt={product.imageAlt}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={`${baseId}-main`}
            data-strk-img={`[${baseId}-subtitle] [${baseId}-title] [${baseId}-category]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            fetchPriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.imageAlt} alternate view`}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={`${baseId}-alt`}
            data-strk-img={`[${baseId}-category] [${baseId}-title] [${baseId}-subtitle]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 hidden translate-y-4 items-center justify-center rounded-full bg-brand-noir/90 px-5 py-3 text-xs uppercase tracking-[0.22em] text-brand-cream opacity-0 transition duration-300 md:flex group-hover:translate-y-0 group-hover:opacity-100">
            Quick Add
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mist">
              {product.category}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.18em] text-brand-ink transition hover:text-brand-gold">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-sm font-medium text-brand-ink">${product.price}</p>
        </div>

        <p className="text-sm leading-7 text-brand-mist">{product.shortDescription}</p>

        <div className="flex items-center justify-between gap-4 border-t border-brand-line pt-4">
          <div className="flex items-center gap-2 text-sm text-brand-mist">
            <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-brand-gold/50 bg-brand-gold px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-brand-noir transition hover:bg-brand-gold-soft"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
