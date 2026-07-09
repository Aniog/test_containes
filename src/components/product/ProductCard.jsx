import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white py-2.5 text-xs uppercase tracking-product font-medium hover:bg-gold transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3 className="font-serif text-sm uppercase tracking-product text-charcoal">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-fg">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  )
}
