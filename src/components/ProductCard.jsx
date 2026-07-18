import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import StrkImage from '@/components/StrkImage'
import StarRating from '@/components/StarRating'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, titleId, descId }) {
  const { addItem } = useCart()
  const tId = titleId || `pc-${product.id}-title`
  const dId = descId || `pc-${product.id}-desc`

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-cream aspect-[4x5]">
          {/* Primary image */}
          <StrkImage
            imgId={product.imgId}
            query={`[${dId}] [${tId}]`}
            ratio="4x5"
            width={600}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Secondary image (hover) */}
          <StrkImage
            imgId={product.imgIdAlt}
            query={`[${dId}] [${tId}]`}
            ratio="4x5"
            width={600}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, { quantity: 1 })
            }}
            className="absolute bottom-0 left-0 right-0 bg-ink/90 text-ivory text-xs uppercase tracking-widest2 py-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-gold hover:text-ink"
          >
            <Plus size={14} strokeWidth={2} /> Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-muted mb-1">
          {product.type}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            id={tId}
            className="font-serif text-lg uppercase tracking-widest3 text-ink hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p id={dId} className="sr-only">{product.shortDesc}</p>
        <p className="text-sm text-ink mt-2 font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
