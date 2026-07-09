import { Link } from 'react-router-dom'
import { useCart } from '@/data/CartContext'

export default function ProductCard({ product, showAddToCart = true }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-brand-ivory aspect-[3/4]">
          <img
            src={product.images[0].url}
            alt={product.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {showAddToCart && (
            <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  addItem(product)
                }}
                className="w-full bg-brand-charcoal/90 text-white py-2.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-charcoal transition-colors backdrop-blur-sm"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </Link>
      <div className="mt-3 text-center">
        <h3 className="text-[11px] md:text-xs font-sans font-medium tracking-product uppercase text-brand-charcoal">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-brand-muted mt-1">${product.price}</p>
      </div>
    </div>
  )
}
