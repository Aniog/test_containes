import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.image2}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Info */}
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-xs md:text-sm font-medium text-espresso uppercase tracking-product leading-tight"
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-charcoal font-medium">${product.price}</p>
      </Link>

      {/* Quick Add */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`absolute bottom-[72px] left-2 right-2 py-2 bg-cream/95 backdrop-blur-sm border border-sand text-xs font-medium uppercase tracking-product text-charcoal hover:bg-gold hover:text-cream hover:border-gold transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Add to Cart
      </button>
    </div>
  )
}
