import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StarRating from './StarRating.jsx'

export default function ProductCard({ product, onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.id])

  return (
    <article ref={containerRef} className="group text-velmora-espresso">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-velmora-champagne shadow-soft">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-0 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl opacity-100 shadow-velvet transition duration-300 hover:bg-velmora-cocoa md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          Add to Cart
        </button>
      </div>
      <div className="border-x border-b border-velmora-stone/70 bg-velmora-pearl px-5 py-5">
        <p id={product.titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.22em] text-velmora-espresso">
          {product.name}
        </p>
        <p id={product.descId} className="mt-2 min-h-10 text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <StarRating rating={product.rating} reviews={product.reviews} compact />
          <span className="font-semibold text-velmora-espresso">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
