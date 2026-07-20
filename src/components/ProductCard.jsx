import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product, product.tone || 'gold')
  }

  return (
    <div
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area — clickable link */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand">
          <img
            data-strk-img-id={product.images[0].id}
            data-strk-img={product.images[0].query}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={String(product.images[0].width)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
          />
          {product.images[1] && (
            <img
              data-strk-img-id={product.images[1].id}
              data-strk-img={product.images[1].query}
              data-strk-img-ratio={product.images[1].ratio}
              data-strk-img-width={String(product.images[1].width)}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-velmora ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>
      </Link>

      {/* Quick Add — outside the Link to avoid invalid button-inside-anchor HTML */}
      <button
        type="button"
        onClick={handleAdd}
        className="relative z-10 -mt-12 mx-4 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 bg-white/90 backdrop-blur-sm py-3 text-xs font-medium uppercase tracking-widest text-velmora-ink transition-all duration-300 ease-velmora hover:bg-white translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        <ShoppingBag size={14} />
        Quick Add
      </button>

      {/* Text info — clickable link */}
      <Link to={`/product/${product.id}`} className="block pt-0">
        <div className="flex items-center gap-2 mb-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-warmgray">
            ({product.reviews})
          </span>
        </div>
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-sm uppercase tracking-widest text-velmora-ink mb-1"
        >
          {product.name}
        </h3>
        <p className="text-sm font-medium text-velmora-warmgray">
          ${product.price}
        </p>
      </Link>
    </div>
  )
}
