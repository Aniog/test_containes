import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import ProductImage from '@/components/ui/ProductImage'
import Stars from '@/components/ui/Stars'

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, 'Gold', 1)
    openCart()
  }

  return (
    <div className="group relative">
      {/* sr-only text mirrors referenced by image queries */}
      <span id={`${product.id}-img-name`} className="sr-only">
        {product.name}
      </span>
      <span id={`${product.id}-img-desc`} className="sr-only">
        {product.short}
      </span>

      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-warm">
          <ProductImage
            product={product}
            variant="a"
            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            variant="b"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />

          {product.badge && (
            <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep backdrop-blur">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to cart`}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-espresso/90 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream opacity-0 backdrop-blur transition-all duration-400 hover:bg-gold group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100 max-md:py-3"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            Add to Cart
          </button>
        </div>

        <div className="pt-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-taupe">{product.category}</p>
          <h3 className="mt-1.5 font-serif text-base font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-gold-deep md:text-lg">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Stars rating={product.rating} size="h-3 w-3" />
            <span className="text-[11px] text-taupe">({product.reviews})</span>
          </div>
          <p className="mt-2 text-sm font-medium tracking-wide text-ink">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  )
}
