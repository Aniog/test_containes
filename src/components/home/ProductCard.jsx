import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-cream text-xs uppercase tracking-widest border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="font-serif text-xs uppercase tracking-product text-charcoal mb-1"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="hidden">{product.description}</p>
          <span className="text-sm font-sans text-muted">${product.price}</span>
        </div>
      </Link>
    </div>
  )
}
