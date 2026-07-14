import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function ShopProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-cream-200/50 mb-4 aspect-[3/4]">
        <img
          data-strk-img-id={`shop-card-${product.id}`}
          data-strk-img={`[shop-pname-${product.id}] [shop-pdesc-${product.id}] jewelry elegant product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-stone-950/80 text-cream-100 text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className="absolute bottom-3 left-3 right-3 bg-stone-950/90 text-cream-100 text-xs tracking-[0.12em] uppercase py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm hover:bg-stone-950"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div>
        <p id={`shop-pname-${product.name}`} className="text-product-name text-xs md:text-sm text-warm-900 mb-1">
          {product.name}
        </p>
        <span id={`shop-pdesc-${product.name}`} className="sr-only">{product.description}</span>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-warm-800">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-1">
            <Star size={12} fill="currentColor" className="text-gold-500" />
            <span className="text-xs text-warm-800/60">{product.rating} ({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
