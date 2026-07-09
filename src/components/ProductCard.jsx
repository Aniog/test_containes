import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { getImageUrl } from '@/lib/images'
import { StarRating } from './StarRating'
import { formatPrice } from '@/data/products'

export function ProductCard({ product, contextLabel }) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const titleId = `product-title-${product.id}`
  const categoryId = `product-category-${product.id}`
  const mainUrl = getImageUrl(product.imgId)
  const hoverUrl = getImageUrl(product.hoverImgId)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addItem(product, product.variants[0], 1)
    setTimeout(() => setIsAdding(false), 700)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-bg-warm mb-4">
        <img
          alt={product.name}
          src={mainUrl}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <img
          alt={`${product.name} alternate view`}
          src={hoverUrl}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-velmora-dark text-velmora-dark-text py-3 text-xs font-sans font-medium uppercase tracking-widest hover:bg-velmora-accent"
          aria-label={`Quick add ${product.name} to cart`}
        >
          {isAdding ? 'Added' : (
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={14} /> Add to Cart
            </span>
          )}
        </button>
      </div>

      <div className="text-center">
        <p
          id={categoryId}
          className="text-[10px] font-sans uppercase tracking-widest text-velmora-muted mb-1.5"
        >
          {product.category}
        </p>
        <h3
          id={titleId}
          className="font-serif text-base md:text-lg uppercase tracking-widest-plus text-velmora-text mb-2"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-velmora-text">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
