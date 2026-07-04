import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function ProductCard({ product, imgId }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const fields = product.data || product
  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(fields, fields.variants?.[0])
  }

  return (
    <Link
      to={`/product/${fields.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-warm">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={fields.name}
          data-strk-img-id={imgId || `product-img-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-foreground py-3 font-sans text-xs uppercase tracking-[0.12em] hover:bg-accent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-ultra-wide text-foreground"
        >
          {fields.name}
        </h3>
        <p id={descId} className="hidden">{fields.category} jewelry gold</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="font-sans text-sm font-medium text-foreground">
            ${fields.price.toFixed(2)}
          </span>
          {fields.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span className="text-xs text-muted">{fields.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
