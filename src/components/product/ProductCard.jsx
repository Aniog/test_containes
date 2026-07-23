import { Link } from 'react-router-dom'
import { useCart } from '@/cart/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-linen overflow-hidden rounded-sm">
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

          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-ivory/95 text-charcoal text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-sm hover:bg-gold hover:text-ivory"
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-3">
          <h3
            id={product.titleId}
            className="text-xs font-sans font-medium tracking-product uppercase text-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <p className="mt-1 text-sm text-stone">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
