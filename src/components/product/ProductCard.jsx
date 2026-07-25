import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const getImageUrl = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || ''

export default function ProductCard({ product, onAddToCart, slotPrefix = 'product-card' }) {
  const cardRef = useRef(null)
  const titleId = `${slotPrefix}-${product.id}-title`
  const descId = `${slotPrefix}-${product.id}-desc`
  const primaryImageId = `${slotPrefix}-${product.id}-primary-img`
  const hoverImageId = `${slotPrefix}-${product.id}-hover-img`

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, cardRef.current)
      if (typeof result === 'function') cleanup = result
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [product.id, slotPrefix])

  return (
    <article ref={cardRef} className="group relative flex h-full flex-col text-velmora-charcoal">
      <div className="relative overflow-hidden bg-velmora-porcelain shadow-soft-jewel">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <div className="relative aspect-product overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
              alt={product.name}
              data-strk-img-id={primaryImageId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src={getImageUrl(primaryImageId)}
            />
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
              alt={`${product.name} worn`}
              data-strk-img-id={hoverImageId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src={getImageUrl(hoverImageId)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-wide-luxury text-velmora-ivory opacity-0 shadow-jewel transition duration-300 hover:bg-velmora-brass focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="mt-5 block text-velmora-charcoal transition hover:text-velmora-brass">
        <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-wide-luxury md:text-xl">
          {product.name}
        </h3>
      </Link>
      <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-muted">
        {product.description}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-velmora-line pt-4 text-sm">
        <span className="font-semibold text-velmora-charcoal">${product.price}</span>
        <span className="uppercase tracking-luxury text-velmora-muted">{product.category}</span>
      </div>
    </article>
  )
}
