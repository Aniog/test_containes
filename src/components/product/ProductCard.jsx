import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h3 id={product.titleId} className="text-xs uppercase tracking-product font-medium text-charcoal">
        {product.name}
      </h3>
      <p id={product.descId} className="sr-only">{product.description}</p>
      <p className="mt-1 text-sm text-muted">{formatPrice(product.price)}</p>
    </Link>
  )
}
