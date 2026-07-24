import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import StrkImg from '@/components/ui/StrkImg'
import StarRating from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const query = `[${product.descId}] [${product.titleId}]`

  return (
    <div className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-sand"
        aria-label={product.name}
      >
        <StrkImg
          imgId={product.imgId}
          query={query}
          ratio="3x4"
          width={800}
          alt={product.name}
          className="transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-[1.03]"
        />
        <StrkImg
          imgId={product.hoverImgId}
          query={`${query} lifestyle on model`}
          ratio="3x4"
          width={800}
          alt={`${product.name} worn`}
          className="absolute inset-0 opacity-0 scale-[1.02] transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.05]"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
            {product.badge}
          </span>
        )}
      </Link>

      <button
        type="button"
        onClick={() => addItem(product)}
        className="absolute bottom-[8.5rem] right-4 z-10 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-espresso text-ivory opacity-0 shadow-lg transition-all duration-500 hover:bg-gold-deep group-hover:translate-y-0 group-hover:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <Plus className="h-4 w-4" />
      </button>

      <div className="flex flex-col items-center gap-1.5 pt-5 text-center">
        <StarRating rating={product.rating} size="w-3 h-3" />
        <Link to={`/product/${product.id}`} className="mt-1">
          <h3
            id={product.titleId}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors duration-300 hover:text-gold-deep md:text-xs"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-mocha">
          {product.tagline}
        </p>
        <p className="mt-0.5 text-sm font-medium text-cocoa">
          {formatPrice(product.price)}
          {product.compareAt && (
            <span className="ml-2 text-xs text-taupe line-through">{formatPrice(product.compareAt)}</span>
          )}
        </p>
      </div>
    </div>
  )
}
