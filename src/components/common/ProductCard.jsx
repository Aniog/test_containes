import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, imageKeyPrefix = 'product-card' }) {
  const { addItem } = useCart()
  const titleId = `${imageKeyPrefix}-${product.id}-title`
  const descId = `${imageKeyPrefix}-${product.id}-desc`
  const hoverDescId = `${imageKeyPrefix}-${product.id}-hover-desc`
  const cardRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.id, imageKeyPrefix])

  return (
    <article ref={cardRef} className="group text-velmora-espresso">
      <div className="relative overflow-hidden border border-velmora-mist/80 bg-velmora-parchment shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-editorial">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`} className="block">
          <div
            className="aspect-[4/5] w-full bg-cover bg-center transition duration-500 group-hover:scale-105 group-hover:opacity-0"
            role="img"
            aria-label={product.name}
            data-strk-bg-id={`${imageKeyPrefix}-${product.imageId}`}
            data-strk-bg={`[${descId}] [${titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            role="img"
            aria-label={`${product.name} worn close-up`}
            data-strk-bg-id={`${imageKeyPrefix}-${product.hoverImageId}`}
            data-strk-bg={`[${hoverDescId}] [${titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
          />
        </Link>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-ivory opacity-0 transition duration-300 hover:bg-velmora-cocoa group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
        <p id={hoverDescId} className="sr-only">{product.name} warm gold jewelry worn on a model in editorial close-up light</p>
        <div className="absolute left-3 top-3 flex gap-2">
          {product.tags.slice(0, 1).map((tag) => (
            <span key={tag} className="bg-velmora-ivory/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <Link to={`/product/${product.id}`} id={titleId} className="font-serif text-sm uppercase tracking-[0.22em] text-velmora-espresso hover:text-velmora-antique">
            {product.name}
          </Link>
          <p className="mt-2 text-sm leading-6 text-velmora-cocoa/80">
            {product.category} · {product.material}
          </p>
          <p id={descId} className="sr-only">{product.description}</p>
        </div>
        <p className="font-sans text-sm font-semibold text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
