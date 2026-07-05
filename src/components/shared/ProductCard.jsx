import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { formatCurrency } from '../../lib/format.js'

function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const imageBase = `product-${product.slug}`
  const titleId = `${imageBase}-title`
  const descId = `${imageBase}-desc`
  const categoryId = `${imageBase}-category`
  const primaryShotId = `${imageBase}-shot-primary`
  const secondaryShotId = `${imageBase}-shot-secondary`

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-panel bg-velmora-mist shadow-card">
        <span id={primaryShotId} className="sr-only">
          {product.shotLabels[0]}
        </span>
        <span id={secondaryShotId} className="sr-only">
          {product.shotLabels[1]}
        </span>
        <Link to={`/product/${product.slug}`} className="relative block aspect-product overflow-hidden">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
              isHovered ? 'scale-[1.02] opacity-0' : 'scale-100 opacity-100'
            }`}
            data-strk-img-id={`${imageBase}-primary`}
            data-strk-img={`[${primaryShotId}] [${descId}] [${titleId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
              isHovered ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
            }`}
            data-strk-img-id={`${imageBase}-secondary`}
            data-strk-img={`[${secondaryShotId}] [${descId}] [${titleId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
          />
          <div className="absolute inset-x-4 bottom-4 flex translate-y-0 items-center justify-between rounded-full bg-white/92 px-4 py-3 text-sm text-velmora-espresso opacity-100 shadow-card transition duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            <span className="font-medium">Quick add</span>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addItem(product, product.tones[0], 1)
              }}
              className="inline-flex items-center gap-2 rounded-full border border-velmora-line px-3 py-1.5 text-xs uppercase tracking-overline transition hover:border-velmora-gold"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Add to cart
            </button>
          </div>
        </Link>
      </div>

      <div className="pt-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-overline text-velmora-taupe">
          <p id={categoryId}>{product.category}</p>
          <span className="rounded-full border border-velmora-line px-3 py-1 text-[11px] text-velmora-espresso">
            {product.badge}
          </span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={titleId}
            className="mt-3 font-display text-2xl uppercase tracking-product text-velmora-espresso transition group-hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 text-sm leading-7 text-velmora-taupe">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-velmora-ink">
          <span>{product.collection}</span>
          <span className="font-medium text-velmora-espresso">
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
