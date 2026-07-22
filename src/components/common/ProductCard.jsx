import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'

import { useStore } from '@/context/StoreContext'
import strkImgConfig from '@/strk-img-config.json'

const noop = () => {}

const ProductCard = ({ product, priority = false }) => {
  const { addToCart } = useStore()
  const containerRef = useRef(null)
  const titleId = `${product.id}-title`
  const descId = `${product.id}-desc`

  useEffect(() => {
    let cleanup = noop

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || noop
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [product.id])

  return (
    <article ref={containerRef} className="group flex h-full flex-col">
      <Link to={`/product/${product.slug}`} className="space-y-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-velmora-sand shadow-card">
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={product.imageTokens.cardFront}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            fetchpriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.imageTokens.cardBack}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <button
            type="button"
            className="absolute bottom-4 left-4 right-4 rounded-full border border-velmora-champagne/70 bg-velmora-parchment/95 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-velmora-ink opacity-100 shadow-soft transition hover:bg-velmora-ink hover:text-velmora-parchment sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            onClick={(event) => {
              event.preventDefault()
              addToCart(product, product.tones[0], 1)
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="space-y-3 px-1">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p id={titleId} className="font-display text-2xl uppercase tracking-luxe text-velmora-ink">
                {product.name}
              </p>
              <p id={descId} className="text-sm text-velmora-rose">
                {product.shortDescription}
              </p>
            </div>
            <span className="pt-2 text-sm uppercase tracking-[0.22em] text-velmora-mist">
              ${product.price}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-velmora-mist/20 pt-3 text-xs uppercase tracking-[0.24em] text-velmora-mist">
            <span>{product.category}</span>
            <span>{product.material}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
