import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, index = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'Gold', 1)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
        <img
          data-strk-img-id={`product-${product.slug}-${index}`}
          data-strk-img={`[product-${product.slug}-desc] [product-${product.slug}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.imageAlt}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-warm-black/90 text-white py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.15em] font-medium">Add to Cart</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3
          id={`product-${product.slug}-name`}
          className="font-serif text-sm uppercase tracking-[0.2em] font-medium text-warm-black"
        >
          {product.name}
        </h3>
        <p
          id={`product-${product.slug}-desc`}
          className="text-xs text-stone mt-1"
        >
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>

      {/* Hidden add to cart for click */}
      <button
        onClick={handleAddToCart}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />
    </Link>
  )
}

export default ProductCard
