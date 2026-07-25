import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { formatPrice } from '@/data/products.js'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, onAddToCart, onViewProduct, compact = false }) {
  const cardRef = useRef(null)
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`
  const primaryImageId = `product-primary-${product.id}-91c4`
  const hoverImageId = `product-hover-${product.id}-58f2`

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [product.id])

  return (
    <article ref={cardRef} className="group flex h-full flex-col bg-velmora-pearl text-velmora-espresso shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-editorial">
      <button
        type="button"
        onClick={() => onViewProduct(product.id)}
        className="relative block overflow-hidden bg-velmora-champagne text-left"
        aria-label={`View ${product.name}`}
      >
        <img
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={primaryImageId}
          data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={getStrkImageUrl(primaryImageId)}
        />
        <img
          alt={`${product.name} worn`}
          className="absolute inset-0 aspect-[4/3] h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={hoverImageId}
          data-strk-img={`[${categoryId}] [${titleId}] [${descId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={getStrkImageUrl(hoverImageId)}
        />
        <span className="absolute left-4 top-4 bg-velmora-pearl/90 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.22em] text-velmora-bronze backdrop-blur">
          {product.badge}
        </span>
        <span className="absolute inset-x-4 bottom-4 translate-y-3 bg-velmora-espresso px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl opacity-0 shadow-soft transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          Quick View
        </span>
      </button>

      <div className="flex flex-1 flex-col border border-t-0 border-velmora-champagne/80 p-5">
        <p id={categoryId} className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-velmora-gold">
          {product.category}
        </p>
        <button
          type="button"
          onClick={() => onViewProduct(product.id)}
          className="mt-3 text-left"
        >
          <h3
            id={titleId}
            className="font-serifDisplay text-xl font-semibold uppercase leading-snug tracking-[0.2em] text-velmora-espresso transition duration-300 group-hover:text-velmora-bronze"
          >
            {product.name}
          </h3>
        </button>
        <p id={descId} className={`mt-3 leading-6 text-velmora-ink/70 ${compact ? 'hidden' : 'text-sm'}`}>
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="font-serifDisplay text-2xl font-semibold text-velmora-espresso">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="border border-velmora-gold px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-bronze transition duration-300 hover:bg-velmora-gold hover:text-velmora-pearl"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
