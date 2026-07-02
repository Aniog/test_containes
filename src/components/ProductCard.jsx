import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import ProductImage from './ProductImage'
import StarRating from './StarRating'

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-4">
        <ProductImage
          product={product}
          ratio="4x5"
          width="600"
          className="image-crossfade"
        />
        <div
          className={`absolute inset-0 image-crossfade ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ProductImage
            product={product}
            hover
            ratio="4x5"
            width="600"
          />
        </div>

        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-soft-white/90 text-espresso text-[10px] uppercase tracking-widest px-2.5 py-1">
            New
          </span>
        )}

        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-soft-white/95 text-espresso text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 btn-luxury hover:bg-clay hover:text-white transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
          aria-label={`Quick add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="text-center">
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base uppercase tracking-widest text-espresso mb-1.5"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] text-warm-gray">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-warm-gray">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
