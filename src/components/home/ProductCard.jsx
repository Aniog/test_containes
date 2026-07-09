import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const mainImage = product.images[0]
  const hoverImage = product.images[1] || product.images[0]

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-cream-dark rounded-sm">
        <img
          data-strk-img-id={`product-card-${product.id}-main`}
          data-strk-img={`[${product.id}-name] ${product.query}`}
          data-strk-img-ratio={mainImage.ratio}
          data-strk-img-width={mainImage.width}
          src=""
          alt={mainImage.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`product-card-${product.id}-hover`}
          data-strk-img={`[${product.id}-name] detail close-up ${product.query}`}
          data-strk-img-ratio={hoverImage.ratio}
          data-strk-img-width={hoverImage.width}
          src=""
          alt={hoverImage.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-base text-cream text-2xs font-medium tracking-widest-xl uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-base/90 backdrop-blur-sm text-cream text-2xs font-medium tracking-widest-xl uppercase hover:bg-base transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3.5 px-0.5">
        <p id={`${product.id}-name`} className="font-serif text-sm font-medium text-base tracking-wider uppercase">
          {product.name}
        </p>
        <p className="font-sans text-sm text-muted mt-1">
          {formatPrice(product.price)}
        </p>
        <StarRating
          rating={product.rating}
          count={product.reviewCount}
          showCount
          size={11}
          className="mt-1.5"
        />
      </div>
    </div>
  )
}
