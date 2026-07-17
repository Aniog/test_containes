import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { formatPrice } from '@/data/store'
import { cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const ProductCard = ({
  product,
  onAddToCart,
  priority = false,
  className,
}) => {
  const cardRef = useRef(null)
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const promptPrimaryId = `product-${product.slug}-prompt-primary`
  const promptSecondaryId = `product-${product.slug}-prompt-secondary`

  useEffect(() => {
    let cleanup

    const frameId = window.requestAnimationFrame(() => {
      if (!cardRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [descId, promptPrimaryId, promptSecondaryId, titleId])

  return (
    <article ref={cardRef} className={cn('group', className)}>
      <div className="sr-only">
        <span id={promptPrimaryId}>{product.galleryShots[0].prompt}</span>
        <span id={promptSecondaryId}>{product.galleryShots[1].prompt}</span>
      </div>

      <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-3xl bg-velmora-mist shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-all duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-card-primary-${product.slug}`}
            data-strk-img={`[${promptPrimaryId}] [${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-card-secondary-${product.slug}`}
            data-strk-img={`[${promptSecondaryId}] [${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 opacity-100 transition-all duration-500 ease-luxe md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <span className="rounded-full bg-velmora-pearl/90 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-velmora-ink shadow-soft backdrop-blur">
              {product.category}
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-velmora-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-velmora-pearl transition-colors hover:bg-velmora-gold hover:text-velmora-ink"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 px-1 pt-5 text-velmora-ink">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
          {product.material}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              id={titleId}
              className="font-heading text-2xl uppercase tracking-product text-velmora-ink md:text-[1.7rem]"
            >
              {product.name}
            </h3>
            <p id={descId} className="mt-2 max-w-xs text-sm leading-7 text-velmora-ink/70">
              {product.shortDescription}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-velmora-ink">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
