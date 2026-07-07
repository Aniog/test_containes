import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-3">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-muted/60 font-sans uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white py-2.5 text-xs uppercase tracking-wider font-sans border-none hover:bg-accent transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.slug}`} className="no-underline">
        <h3 className="font-serif text-sm text-charcoal uppercase tracking-product leading-tight">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted font-sans">${product.price}</p>
      </Link>
    </div>
  )
}
