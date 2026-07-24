import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-taupe/30 overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-charcoal text-cream text-[10px] uppercase tracking-[0.1em] px-2 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <h3
          id={product.titleId}
          className="font-serif text-xs md:text-sm uppercase tracking-[0.15em] text-charcoal mb-1"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="text-sm text-stone">${product.price}</p>
      </Link>

      {/* Quick Add */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="absolute bottom-[4.5rem] left-2 right-2 bg-cream/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-[0.12em] py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-taupe hover:bg-charcoal hover:text-cream hover:border-charcoal"
      >
        Add to Cart
      </button>
    </div>
  )
}
