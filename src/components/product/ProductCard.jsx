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
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            data-strk-img-id={hovered ? product.imgId2 : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <h3
          id={product.titleId}
          className="font-sans text-xs uppercase tracking-product font-medium text-primary leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm text-muted-foreground">${product.price}</p>
      </Link>

      {/* Quick add button on hover */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="absolute bottom-[72px] left-0 right-0 mx-2 bg-white/95 backdrop-blur-sm text-primary text-xs uppercase tracking-widest font-medium py-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  )
}
