import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="absolute bottom-[calc(25%+1rem)] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-sm text-charcoal font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border border-border-warm hover:bg-gold hover:text-white hover:border-gold rounded-sm whitespace-nowrap"
      >
        Add to Cart
      </button>

      {/* Product info */}
      <div className="mt-3 text-center">
        <h3 id={product.titleId} className="font-sans text-xs font-medium uppercase tracking-product text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 font-sans text-sm text-muted-fg">${product.price}</p>
      </div>
    </div>
  )
}
