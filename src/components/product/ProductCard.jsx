import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import { formatPrice } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, priority = false }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-stone-deep/5">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] ${product.name} gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className={`aspect-[4/5] w-full object-cover transition-opacity duration-500 ${
            priority ? '' : 'group-hover:opacity-0'
          }`}
        />
        {/* Secondary image (revealed on hover) */}
        {!priority && (
          <img
            alt={product.name}
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.descId}] ${product.name} worn on model warm light`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso/90 py-3 text-xs uppercase tracking-[0.18em] text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-espresso"
          >
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-muted">
          {product.category}
        </p>
        <h3 className="mt-1 font-serif text-lg uppercase tracking-[0.12em] text-stone-deep transition-colors group-hover:text-gold-deep">
          {product.name}
        </h3>
        <div className="mt-1.5 flex justify-center">
          <StarRating rating={product.rating} size="sm" />
        </div>
        <p className="mt-2 font-serif text-lg text-stone-deep">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
