import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-muted overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/5" />
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif text-lg text-muted-fg/40 italic">
              {product.name}
            </span>
          </div>
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className="absolute bottom-[88px] left-3 right-3 py-2.5 bg-cream/95 backdrop-blur-sm border border-border text-charcoal text-xs font-sans font-medium uppercase tracking-widest text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-cream hover:border-gold"
      >
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-4 px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-xs font-medium uppercase tracking-product text-charcoal">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 font-sans text-sm text-muted-fg">${product.price}</p>
      </div>
    </div>
  )
}
