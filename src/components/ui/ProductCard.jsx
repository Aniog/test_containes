import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { StarRating } from './StarRating'
import { useCart } from '@/context/CartContext'

export function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  const handleQuickAdd = () => {
    addToCart(product, product.tone[0], 1)
  }

  return (
    <article
      ref={cardRef}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-blush">
        <Link to={`/products/${product.id}`} className="block h-full w-full">
          <img
            data-strk-img-id={product.imageId}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-category]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/10" />
        </Link>
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-espresso py-3 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>
      <div className="mt-4 text-center">
        <p
          id={`product-${product.id}-category`}
          className="text-[10px] uppercase tracking-[0.2em] text-warm-gray"
        >
          {product.category}
        </p>
        <h3
          id={`product-${product.id}-name`}
          className="mt-1 font-serif text-sm font-medium uppercase tracking-widest text-espresso"
        >
          <Link to={`/products/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-warm-gray">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium">${product.price}</p>
      </div>
    </article>
  )
}
