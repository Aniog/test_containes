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
        <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.imageAlt}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal mt-1 font-medium">${product.price}</p>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          addItem(product)
        }}
        className={`absolute bottom-[72px] left-0 right-0 bg-charcoal/90 text-white text-xs uppercase tracking-widest py-2.5 text-center transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Add to Cart
      </button>
    </div>
  )
}
