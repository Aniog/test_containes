import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            data-strk-img-id={`product-card-${product.id}-a1b2c3`}
            data-strk-img={`[product-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
              className="w-full py-2.5 bg-charcoal/90 text-cream text-xs tracking-widest hover:bg-charcoal transition-colors backdrop-blur-sm"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Info */}
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal leading-tight"
        >
          {product.name}
        </h3>
        <p className="text-muted-fg text-sm mt-1">{formatPrice(product.price)}</p>
      </Link>
    </div>
  )
}
