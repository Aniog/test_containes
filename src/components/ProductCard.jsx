import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StarRating from './ui/StarRating'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/data'

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const titleId = `product-title-${product.slug}`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0], 1)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p id="product-query-generic" className="sr-only">
        Elegant gold demi-fine jewelry on a warm neutral background
      </p>
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone">
        <img
          data-strk-img-id="product-card-img"
          data-strk-img="[product-query-generic]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white py-3 text-xs font-semibold uppercase tracking-widest text-velmora-espresso shadow-sm transition-all duration-300 hover:bg-velmora-espresso hover:text-white ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag size={14} className="pointer-events-none" />
          Quick Add
        </button>
      </div>
      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="font-sans text-xs font-semibold uppercase tracking-widest-plus text-velmora-espresso"
        >
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
        </div>
        <p className="mt-2 font-sans text-sm text-velmora-taupe">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
