import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import Stars from '@/components/ui/Stars'
import StrkImage, { PLACEHOLDER_SRC } from '@/components/ui/StrkImage'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const secondaryImgId = `${product.imgId}-alt`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { qty: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <StrkImage
          imgId={product.imgId}
          queryRefs={[product.descId, product.titleId]}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          alt=""
          data-strk-img-id={secondaryImgId}
          data-strk-img={`[${product.descId}] ${product.name} worn styled`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER_SRC}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 text-[11px] uppercase tracking-widest3 text-cream backdrop-blur transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag width={14} height={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-charcoal"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.short}
        </p>
        <div className="mt-1 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm tracking-wide text-charcoal">${product.price}</p>
      </div>
    </Link>
  )
}
