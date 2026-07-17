import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import Stars from '@/components/ui/Stars'
import ProductImage from '@/components/product/ProductImage'

export default function ProductCard({ product, idSuffix = '', showRating = false }) {
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addItem(product.id, 'Gold', 1)
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
    >
      <div className="relative overflow-hidden bg-stone-warm/40">
        <ProductImage
          product={product}
          view="main"
          idSuffix={idSuffix}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <ProductImage
          product={product}
          view="alt"
          idSuffix={idSuffix}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest2 text-gold-deep">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/90 py-3.5 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-transform duration-300 ease-out hover:bg-espresso group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      </div>
      <div className="pt-4 text-center">
        <p className="font-serif text-sm uppercase tracking-[0.16em] text-ink transition-colors duration-300 group-hover:text-gold-deep md:text-base">
          {product.name}
        </p>
        {showRating && (
          <Stars rating={product.rating} className="mt-1.5 justify-center" size="h-3 w-3" />
        )}
        <p className="mt-1.5 text-sm text-taupe-dark">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
