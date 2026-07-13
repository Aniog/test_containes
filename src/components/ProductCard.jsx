import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-charcoal text-[10px] uppercase tracking-ultra-wide px-3 py-1 font-medium">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-cream/90 hover:bg-gold hover:text-cream text-charcoal p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium">
          {product.name}
        </h3>
        <p className="text-sm text-taupe mt-1">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
