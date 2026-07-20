import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import StrkImage from './StrkImage.jsx'

export default function ProductCard({
  product,
  onAddToCart,
  compact = false,
  imageContext = 'card',
  contextTitleId = '',
}) {
  const titleDomId = `${product.titleId}-${imageContext}`
  const descDomId = `${product.descId}-${imageContext}`
  const imageQuery = contextTitleId
    ? `[${descDomId}] [${titleDomId}] [${contextTitleId}]`
    : `[${descDomId}] [${titleDomId}]`

  return (
    <article className="group text-velmora-ink">
      <Link
        to={`/product/${product.id}`}
        className="block overflow-hidden bg-velmora-pearl shadow-none transition duration-500 hover:-translate-y-1 hover:shadow-soft"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
          <StrkImage
            id={`${product.imgId}-${imageContext}`}
            query={imageQuery}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <StrkImage
            id={`${product.hoverImgId}-${imageContext}`}
            query={`[${descDomId}] [${titleDomId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-widest text-velmora-ivory opacity-0 transition duration-300 hover:bg-velmora-cocoa group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="border-x border-b border-velmora-mist bg-velmora-ivory px-4 py-5">
        <p className="mb-2 text-xs uppercase tracking-widest text-velmora-taupe">
          {product.category}
        </p>
        <h3
          id={titleDomId}
          className="font-serif text-xl font-semibold uppercase leading-snug tracking-widest text-velmora-ink"
        >
          {product.name}
        </h3>
        <p id={descDomId} className="mt-2 text-sm leading-6 text-velmora-taupe">
          {compact ? product.material : product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-mist pt-4">
          <span className="font-sans text-base font-semibold text-velmora-ink">
            ${product.price}
          </span>
          <span className="text-xs uppercase tracking-widest text-velmora-gold">
            {product.rating.toFixed(1)} ★
          </span>
        </div>
      </div>
    </article>
  )
}
