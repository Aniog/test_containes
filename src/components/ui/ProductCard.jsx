import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import StarRating from '../ui/StarRating'

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-dark)] text-[var(--velmora-bg)] text-[10px] tracking-wider-luxury uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-[var(--velmora-dark)] text-[var(--velmora-bg)] py-3 text-xs tracking-wider-luxury uppercase flex items-center justify-center gap-2 hover:bg-[var(--velmora-accent)] hover:text-[var(--velmora-dark)] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="product-name text-center mb-1.5">{product.name}</h3>
      <StarRating rating={product.rating} reviews={product.reviews} />
      <p className="text-center mt-2 font-medium">${product.price}</p>
    </Link>
  )
}

export default ProductCard
