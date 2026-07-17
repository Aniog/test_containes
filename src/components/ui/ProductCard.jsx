import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'
import { formatPrice } from '@/lib/utils'
import { toast } from 'sonner'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const { addItem } = useCart()
  const defaultVariant = product.variants.find((v) => v.available) || product.variants[0]

  const handleQuickAdd = (e) => {
    e.stopPropagation()
    addItem(product, defaultVariant.id, 1)
    toast.success(`Added ${product.name} to cart`, { duration: 2000 })
  }

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/products/${product.slug}`)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-velmora-base py-3 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-velmora-accent hover:text-velmora-base md:opacity-0 md:group-hover:opacity-100 ${
            hovered ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} className="pointer-events-none" />
          Quick Add
        </button>
      </div>
      <div className="pt-4">
        <div className="mb-1 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-text-secondary">({product.reviews})</span>
        </div>
        <h3 className="font-serif text-base font-medium uppercase tracking-widest-xl text-velmora-base">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-velmora-text-secondary">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
