import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-warm rounded-sm aspect-[4x3]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 right-3 bg-velmora-gold text-white p-2 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold-light shadow-md"
          aria-label="Quick add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-sm tracking-product uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-200">
          {product.name}
        </h3>
        <p id={product.descId} className="font-sans text-xs text-velmora-muted mt-1">{product.shortDescription}</p>
        <p className="font-sans text-sm text-velmora-charcoal mt-2">${product.price}</p>
      </div>
    </Link>
  )
}
