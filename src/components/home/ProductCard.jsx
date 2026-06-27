import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image placeholder */}
        <div className="relative aspect-[3/4] bg-accent-light overflow-hidden rounded-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-accent/40 text-lg">{product.name}</span>
          </div>
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-2.5 bg-text text-white text-xs font-medium uppercase tracking-product text-center rounded-sm hover:bg-text/90 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border-dark'}`}
            />
          ))}
          <span className="text-xs text-text-muted ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs font-medium uppercase tracking-product text-text hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-text mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
