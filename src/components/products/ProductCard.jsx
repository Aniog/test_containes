import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

export default function ProductCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, setCartOpen } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.material || 'gold', 1)
    toast.success(`${product.name} added to cart`)
    setCartOpen(true)
    onQuickAdd?.()
  }

  const primaryImage = product.images?.gold?.[0] || product.images?.[0]
  const secondaryImage = product.images?.gold?.[1] || product.images?.[1]

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#f5f5f0]">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-[#ecece6]" />
        )}
        <img
          alt={product.name}
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[product-name-${product.id}] [product-category-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${hovered && secondaryImage ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {secondaryImage && (
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={`product-${product.id}-secondary`}
            data-strk-img={`[product-name-${product.id}] [product-category-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              hovered && secondaryImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <span id={`product-name-${product.id}`} className="hidden">
          {product.name}
        </span>
        <span id={`product-category-${product.id}`} className="hidden">
          {product.category} jewelry
        </span>

        <div
          className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0f0f0f] shadow-sm backdrop-blur-sm hover:bg-white"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-wide">{product.name}</h3>
        <p className="text-sm text-current/70">${product.price}</p>
      </div>
    </Link>
  )
}
