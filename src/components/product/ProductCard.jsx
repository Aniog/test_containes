import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-foreground/90 text-background py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-foreground transition-colors border-none backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3
          id={product.titleId}
          className="font-serif text-xs sm:text-sm uppercase tracking-product text-foreground"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  )
}
