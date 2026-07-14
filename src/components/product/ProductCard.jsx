import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import StrkImage from '@/components/ui/StrkImage'

export default function ProductCard({ product, titleId, descId }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tones[0], 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  const primary = product.images[0]

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream">
        <StrkImage
          imgId={primary.imgId}
          query={`[${descId}] [${titleId}]`}
          ratio="4x5"
          width={600}
          alt={primary.alt}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 py-3 text-[11px] uppercase tracking-widest2 text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            {added ? 'Added' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-lg uppercase tracking-widest2 text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
