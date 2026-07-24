import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addItem(product, 'gold')
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream-200 aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          data-strk-img-id={`${product.id}-primary`}
          data-strk-img={`[${product.id}] ${product.imgQuery}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />

        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          data-strk-img-id={`${product.id}-hover`}
          data-strk-img={`[${product.id}] ${product.imgQuery} detail close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-charcoal text-cream-100 caption px-3 py-1.5 text-[10px]">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 py-3 text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
              isAdding
                ? 'bg-gold text-charcoal'
                : 'bg-charcoal text-cream-100 hover:bg-charcoal-600'
            }`}
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4">
        <h3 className="product-name text-charcoal group-hover:text-gold-dark transition-colors duration-300">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
        </div>

        <p className="price text-charcoal mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
