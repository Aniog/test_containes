import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const defaultVariant = product.variants.find((v) => v.inStock)?.id || product.variants[0]?.id

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, defaultVariant, 1)
  }

  const titleId = `product-title-${product.id}`

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <StrkImage
          id={`product-card-main-${product.id}`}
          query={`[${titleId}] ${product.images.main.query}`}
          ratio={product.images.main.ratio}
          width={product.images.main.width}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <StrkImage
            id={`product-card-hover-${product.id}`}
            query={`[${titleId}] ${product.images.hover.query}`}
            ratio={product.images.hover.ratio}
            width={product.images.hover.width}
            alt={`${product.name} alternate view`}
            className="h-full w-full object-cover"
          />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream-50 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-espresso-900">
            {product.badge}
          </span>
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <Button
            variant="primary"
            size="sm"
            className="w-full gap-2"
            onClick={handleQuickAdd}
          >
            <ShoppingBag size={14} />
            Quick Add
          </Button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="product-name text-sm text-espresso-900 transition-colors group-hover:text-gold"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-espresso-600">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-espresso-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
