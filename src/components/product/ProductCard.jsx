import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import StockImage from '@/components/ui/StockImage'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, index = 0 }) {
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, 'Gold', 1)
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden bg-velmora-surface">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 border border-velmora-gold/40 bg-velmora-bg/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-velmora-gold-light backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <div className="relative aspect-[4/5] overflow-hidden">
          <StockImage
            imgId={`product-${product.id}-main`}
            query={`[product-${product.id}-name] [product-${product.id}-tagline] warm gold jewelry editorial photography on dark background`}
            ratio="4x5"
            width={800}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
          />
          <StockImage
            imgId={`product-${product.id}-alt`}
            query={`[product-${product.id}-tagline] [product-${product.id}-name] gold jewelry worn on model close-up warm light`}
            ratio="4x5"
            width={800}
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        </div>
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-velmora-bg/85 py-3.5 text-[10px] font-bold uppercase tracking-[0.28em] text-velmora-gold-light backdrop-blur-md transition-all duration-300 hover:bg-velmora-gold hover:text-[#1d130b] group-hover:translate-y-0 max-lg:translate-y-0 max-lg:bg-velmora-bg/70"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
          Add to Cart
        </button>
      </div>
      <div className="hairline-t mt-0 pt-4">
        <p
          id={`product-${product.id}-tagline`}
          className="text-[11px] uppercase tracking-[0.18em] text-velmora-muted"
        >
          {product.tagline}
        </p>
        <div className="mt-1.5 flex items-baseline justify-between gap-3">
          <h3
            id={`product-${product.id}-name`}
            className="font-display text-base font-medium uppercase tracking-[0.14em] text-velmora-ink transition-colors duration-300 group-hover:text-velmora-gold-light md:text-lg"
          >
            {product.name}
          </h3>
          <span className="font-body text-sm font-semibold tracking-wide text-velmora-gold">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  )
}
