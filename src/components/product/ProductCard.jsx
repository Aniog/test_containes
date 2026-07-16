import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, light = false }) => {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const textColor = light ? 'text-warm-charcoal' : 'text-warm-cream'
  const priceColor = light ? 'text-gold-dark' : 'text-gold'
  const overlayBg = light ? 'bg-ivory/80' : 'bg-warm-black/80'

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-warm-charcoal">
          <img
            data-strk-img-id={`card-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 ${overlayBg} backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className={`product-name text-sm ${textColor}`}>{product.name}</h3>
        <p className={`text-sm ${priceColor} mt-1 font-sans`}>${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
