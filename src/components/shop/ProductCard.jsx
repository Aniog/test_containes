import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block no-underline"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-sand/60 flex items-center justify-center mb-2">
              <span className="text-gold text-lg font-serif">V</span>
            </div>
            <span className="text-[10px] text-taupe uppercase tracking-wider">Velmora</span>
          </div>
        </div>

        {/* Hover overlay with Add to Cart */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-charcoal text-xs uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="product-name text-xs md:text-sm text-charcoal">{product.name}</h3>
        <p className="mt-1 text-sm text-charcoal font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
