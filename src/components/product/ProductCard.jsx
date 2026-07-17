import { Link } from 'react-router-dom'
import { useCart } from '@/data/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-brand-charcoal/90 text-white py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium hover:bg-brand-gold transition-colors duration-200 backdrop-blur-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={product.titleId}
            className="text-[10px] md:text-xs tracking-product uppercase font-sans font-medium text-brand-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <p className="mt-1 text-sm font-sans text-brand-slate">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
