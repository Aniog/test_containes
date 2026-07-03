import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Check } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import ProductImage from './ProductImage'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  if (!product) return null

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            hovered ? 'opacity-0' : 'opacity-100',
          )}
        >
          <ProductImage art={product.art} alt={product.name} />
        </div>
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            hovered ? 'opacity-100' : 'opacity-0',
          )}
        >
          <ProductImage art={product.art} alt={`${product.name} alternate view`} />
        </div>

        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] text-ivory-50 bg-ink-900/85 backdrop-blur-sm px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <div
          className={cn(
            'absolute left-3 right-3 bottom-3 transition-all duration-500',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              'w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300',
              added
                ? 'bg-ivory-50 text-ink-900'
                : 'bg-ink-900/95 text-ivory-50 hover:bg-ink-700',
            )}
            aria-label={`Quick add ${product.name} to bag`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" strokeWidth={1.6} />
                Added
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                Quick add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="product-name truncate">{product.name}</h3>
          <p className="mt-1 text-[12px] text-ink-500 truncate">
            {product.subtitle}
          </p>
        </div>
        <span className="text-[14px] font-medium text-ink-900 whitespace-nowrap pt-0.5">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  )
}
