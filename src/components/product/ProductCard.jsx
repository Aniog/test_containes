import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, index = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-warm-gray overflow-hidden mb-3">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] bestseller gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          alt={`${product.name} alternate`}
          data-strk-img-id={`${product.imgId}-alt`}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="text-white text-xs tracking-wider uppercase font-sans flex items-center gap-2 hover:text-velmora-gold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <h3
        id={product.titleId}
        className="font-serif text-sm tracking-product uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors"
      >
        {product.name}
      </h3>
      <p id={product.descId} className="text-xs text-velmora-muted font-sans mt-0.5">{product.description}</p>
      <p className="text-sm font-sans font-medium text-velmora-charcoal mt-1">${product.price}</p>
    </Link>
  )
}

export default ProductCard
