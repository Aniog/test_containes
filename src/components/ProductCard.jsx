import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const defaultVariant = product.variants[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, defaultVariant, 1)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <img
          src={product.image}
          alt={product.name}
          className={`img-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out-expo ${
            hovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`img-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out-expo ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}

        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-cream-100/90 px-2 py-1 text-[10px] uppercase tracking-widest text-charcoal-900 backdrop-blur-sm">
            Bestseller
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-charcoal-900 py-3 text-xs font-medium uppercase tracking-widest text-cream-100 transition-transform duration-300 ease-out-expo ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <h3 className="mt-2 font-serif text-sm uppercase tracking-[0.16em]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-charcoal-600">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
