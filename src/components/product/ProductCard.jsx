import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice, imagePlaceholder } from '@/data/storefront'
import { useCart } from '@/hooks/useCart'
import RatingStars from '@/components/product/RatingStars'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const titleId = `${product.slug}-title`
  const descId = `${product.slug}-desc`
  const imageOneSceneId = `${product.slug}-image-one-scene`
  const imageTwoSceneId = `${product.slug}-image-two-scene`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-velmora-sand/60 bg-velmora-cream shadow-velmora transition duration-300 hover:-translate-y-1 hover:shadow-lifted">
      <div className="relative overflow-hidden rounded-[1.8rem] rounded-b-[1.1rem] bg-velmora-sand/30">
        <span id={imageOneSceneId} className="sr-only">{product.images[0].scene}</span>
        <span id={imageTwoSceneId} className="sr-only">{product.images[1].scene}</span>
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.images[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={`${product.slug}-card-primary`}
              data-strk-img={`[${imageOneSceneId}] [${titleId}] [${descId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              loading={priority ? 'eager' : 'lazy'}
              src={imagePlaceholder}
            />
            <img
              alt={product.images[1].alt}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={`${product.slug}-card-secondary`}
              data-strk-img={`[${imageTwoSceneId}] [${titleId}] [${descId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
          </div>
        </Link>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between gap-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full border border-white/20 bg-velmora-ink/80 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-velmora-mist backdrop-blur-sm">
            {product.badge}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-velmora-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-white"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-velmora-cocoa/55">{product.collection}</p>
            <Link to={`/product/${product.slug}`}>
              <h3 id={titleId} className="font-display text-[1.7rem] uppercase tracking-[0.22em] text-velmora-ink transition group-hover:text-velmora-bronze">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-sm font-medium text-velmora-cocoa">{formatPrice(product.price)}</span>
        </div>
        <p id={descId} className="text-sm leading-7 text-velmora-cocoa/80">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          <button
            type="button"
            className="rounded-full border border-velmora-sand px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-velmora-ink transition hover:border-velmora-bronze hover:bg-velmora-bronze/10"
            onClick={() => addItem(product)}
          >
            Quick Add
          </button>
        </div>
      </div>
    </article>
  )
}
