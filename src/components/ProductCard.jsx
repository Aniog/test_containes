import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/StrkImage'
import { StarRating } from '@/components/StarRating'
import { useCart } from '@/components/CartContext'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const titleId = `pc-${product.id}-title`
  const subId = `pc-${product.id}-sub`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-cream">
        {/* Primary image */}
        <StrkImage
          imgId={product.imgId}
          query={`[${subId}] [${titleId}]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="aspect-[4/5] transition-opacity duration-500 group-hover:opacity-0"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        {/* Secondary image (hover) */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <StrkImage
            imgId={product.imgIdAlt}
            query={`[${subId}] ${product.name} worn on model`}
            ratio="4x5"
            width={600}
            alt={`${product.name} worn`}
            className="aspect-[4/5]"
          />
        </div>

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="w-full bg-ivory/95 py-3 text-[11px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm transition-colors hover:bg-espresso hover:text-ivory"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] text-espresso"
        >
          {product.name}
        </h3>
        <p id={subId} className="mt-1 text-xs text-taupe">
          {product.subtitle}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-cocoa">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
