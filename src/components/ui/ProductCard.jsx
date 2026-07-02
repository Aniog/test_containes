import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import StarRating from './StarRating.jsx'
import { formatPrice } from '@/lib/utils.js'

export default function ProductCard({ product, queryContext = 'product' }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const firstImage = product.images[0]
  const secondImage = product.images[1] || product.images[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <img
          data-strk-img-id={firstImage.imgId}
          data-strk-img={`[${titleId}] [${descId}] [${queryContext}]`}
          data-strk-img-ratio={firstImage.ratio}
          data-strk-img-width={firstImage.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={firstImage.alt}
          className={[
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-0' : 'opacity-100',
            imageLoaded ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onLoad={() => setImageLoaded(true)}
        />
        <img
          data-strk-img-id={secondImage.imgId}
          data-strk-img={`[${titleId}] [${descId}] [${queryContext}]`}
          data-strk-img-ratio={secondImage.ratio}
          data-strk-img-width={secondImage.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={secondImage.alt}
          className={[
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3 text-xs font-medium uppercase tracking-widest text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Quick add ${product.name}`}
        >
          <Plus size={14} />
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <h3
          id={titleId}
          className="mt-2 font-serif text-sm font-semibold uppercase tracking-widest text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <p className="mt-1 font-sans text-sm text-stone">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
