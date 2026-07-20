import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'
import { getStrkImageSrc } from '@/data/strkImages'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, onAddToCart, imagePrefix = 'product' }) {
  const cardRef = useRef(null)
  const titleId = `${imagePrefix}-${product.slug}-title`
  const descId = `${imagePrefix}-${product.slug}-desc`
  const materialId = `${imagePrefix}-${product.slug}-material`
  const primaryImageId = `${imagePrefix}-${product.slug}-primary-9b4d2`
  const secondaryImageId = `${imagePrefix}-${product.slug}-secondary-31f7a`

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [imagePrefix, product.slug])

  return (
    <article ref={cardRef} className="group text-velmora-espresso">
      <div className="relative aspect-portrait overflow-hidden bg-velmora-champagne">
        <Link to={`/product/${product.slug}`} className="absolute inset-0 block" aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}] [${materialId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageSrc(primaryImageId)}
          />
          <img
            alt={`${product.name} styled detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${materialId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageSrc(secondaryImageId)}
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 z-10 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ivory shadow-whisper transition hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="border-b border-velmora-mink/70 py-4">
        <p id={materialId} className="text-eyebrow font-bold uppercase tracking-atelier text-velmora-gold">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="mt-2 block hover:text-velmora-gold">
          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-editorial text-velmora-espresso">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-truffle">
          {product.shortDescription}
        </p>
        <p className="mt-3 text-sm font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
