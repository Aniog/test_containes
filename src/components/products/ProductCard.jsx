import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { getStrikinglyImageUrl } from '@/components/ImageLoadScope'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  const cardRef = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.id])

  return (
    <article ref={cardRef} className="group relative flex h-full flex-col overflow-hidden border border-velmora-linen bg-velmora-ivory text-velmora-espresso shadow-[0_20px_60px_rgba(35,23,19,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(35,23,19,0.12)]">
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-velmora-porcelain" aria-label={`View ${product.name}`}>
        <img
          alt={`${product.name} on warm editorial jewelry surface`}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={priority ? '900' : '700'}
          src={getStrikinglyImageUrl(product.imgId)}
        />
        <img
          alt={`${product.name} worn detail`}
          className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={getStrikinglyImageUrl(product.hoverImgId)}
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="flex w-full items-center justify-center gap-2 bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-cta text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-4 text-[0.68rem] uppercase tracking-cta text-velmora-mist">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-bronze">
            <Star className="h-3 w-3 fill-velmora-champagne text-velmora-champagne" aria-hidden="true" />
            {product.rating}
          </span>
        </div>
        <h3 id={product.titleId} className="font-serif text-xl uppercase leading-tight tracking-product text-velmora-espresso">
          {product.name}
        </h3>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-mist">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-velmora-linen pt-4">
          <span className="font-serif text-2xl text-velmora-espresso">{formatPrice(product.price)}</span>
          <Link to={`/products/${product.slug}`} className="text-xs font-semibold uppercase tracking-cta text-velmora-bronze transition hover:text-velmora-espresso">
            Details
          </Link>
        </div>
      </div>
    </article>
  )
}
