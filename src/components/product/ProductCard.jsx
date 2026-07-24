import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StrkImage from '@/components/ui/StrkImage'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: 'Gold', quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-cream overflow-hidden">
        {/* Primary image */}
        <StrkImage
          imgId={product.imgId}
          query={`[${product.descId}] [${product.titleId}]`}
          ratio="4x5"
          width="700"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-luxury group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <StrkImage
          imgId={product.imgIdAlt}
          query={`[${product.descId}] worn ${product.name} jewelry`}
          ratio="4x5"
          width="700"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-luxury group-hover:opacity-100 group-hover:scale-100"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-ivory/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute inset-x-4 bottom-4 transition-all duration-500 ease-luxury ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory text-[11px] uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-champagne transition-colors duration-300"
          >
            <Plus width={14} height={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.12em] leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-1.5 font-medium tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
