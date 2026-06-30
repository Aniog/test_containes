import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
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
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 backdrop-blur-sm text-charcoal font-sans text-xs font-medium tracking-wide flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer hover:bg-accent hover:text-white"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal leading-tight">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-sans text-muted">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
