import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden mb-4">
        <div className="aspect-[3/4] bg-velmora-cream relative overflow-hidden">
          {/* Primary image */}
          <img
            data-strk-img-id={`product-${product.id}-1`}
            data-strk-img={`[product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={`product-${product.id}-alt`}
            data-strk-img={`[product-name-${product.id}] jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          <span id={`product-name-${product.id}`} className="hidden">{product.name} gold jewelry</span>

          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-3 right-3 bg-white text-velmora-warm p-2.5 shadow-lg transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-velmora-gold hover:text-white`}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-velmora-gold text-white text-[10px] px-2 py-0.5 tracking-wider uppercase font-medium">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-velmora-warm text-white text-[10px] px-2 py-0.5 tracking-wider uppercase font-medium">
                New
              </span>
            )}
          </div>
        )}
      </Link>

      {/* Product info */}
      <div>
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'fill-velmora-border text-velmora-border'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-muted ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="font-serif text-sm tracking-wider uppercase mb-1 group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm font-medium">${product.price}</p>
      </div>
    </div>
  )
}