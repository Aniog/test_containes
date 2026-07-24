import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <h3 id={`product-name-${product.id}`} className="sr-only">
          {product.name} gold jewelry
        </h3>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-velmora-ink font-sans text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <span className="font-sans text-sm text-velmora-warmgray">
            ${product.price}
          </span>
          <span className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-xs text-velmora-warmgray">
              {product.rating}
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}