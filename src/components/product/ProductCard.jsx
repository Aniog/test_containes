import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { products } from '@/data/products'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0].id)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-stone-100 rounded-sm overflow-hidden mb-3">
        <span id={`product-name-${product.id}`} className="hidden">{product.name}</span>
        <span id={`product-desc-${product.id}`} className="hidden">{product.description}</span>

        {/* Primary image */}
        <img
          data-strk-img-id={`product-card-${product.id}-1`}
          data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] gold jewelry luxury`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover bg-stone-200 transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover image */}
        <img
          data-strk-img-id={`product-card-${product.id}-2`}
          data-strk-img={`[product-name-${product.id}] detail closeup worn model gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover bg-stone-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 bg-stone-900/90 backdrop-blur-sm text-white py-2.5 text-[11px] font-medium tracking-widest-xl uppercase flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-sm hover:bg-stone-900"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>

        {/* Badge */}
        {product.new && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-semibold tracking-widest-xl uppercase px-2.5 py-1 rounded-sm">
            New
          </span>
        )}
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900 tracking-wider uppercase leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 mt-1 line-clamp-1">
          {product.description}
        </p>
        <p className="text-sm font-medium text-stone-800 mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
