import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden rounded-sm">
        {/* Placeholder images using the image system */}
        <img
          data-strk-img-id={`card-${product.id}`}
          data-strk-img={`[card-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`card-${product.id}-alt`}
          data-strk-img={`[card-${product.id}-name] jewelry on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal-900 py-2.5 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 rounded-sm transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          } hover:bg-white`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm font-medium">
            Bestseller
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <h3 id={`card-${product.id}-name`} className="font-serif text-sm tracking-widest-xl uppercase text-charcoal-900">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-charcoal-800">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-charcoal-500">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
