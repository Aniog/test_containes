import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, imgId }) {
  const { addToCart } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-bg aspect-[3/4]">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[product-${product.id}-name] [product-${product.id}-category]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              addToCart(product, product.variants[0], 1)
            }}
            className="w-full py-2.5 bg-velmora-accent text-white font-sans text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-velmora-accent-hover transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <p
          id={`product-${product.id}-category`}
          className="text-[10px] uppercase tracking-[0.2em] text-velmora-muted mb-1"
        >
          {product.category}
        </p>
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm md:text-base tracking-[0.12em] uppercase text-velmora-text"
        >
          <Link to={`/product/${product.slug}`} className="hover:text-velmora-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-muted">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-velmora-text">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}
