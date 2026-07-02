import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-border">
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xs text-muted-fg font-medium uppercase tracking-product">{product.name}</span>
            </div>
          </div>

          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="bg-white text-charcoal px-6 py-2.5 text-xs font-medium uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-xs font-medium uppercase tracking-product text-charcoal group-hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-charcoal font-medium">${product.price}</p>
      </div>
    </div>
  )
}
