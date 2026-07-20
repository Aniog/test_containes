import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StockImg } from '@/components/ui/StockImg'
import { StarRating } from '@/components/ui/StarRating'

export function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.stopPropagation()
    addItem(product, 1, 'Gold')
  }

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <StockImg
            id={`product-${product.id}`}
            query={product.imageQuery}
            ratio="3x4"
            width={600}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <StockImg
            id={`product-${product.id}-hover`}
            query={product.secondaryQuery}
            ratio="3x4"
            width={600}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 z-10 flex translate-y-4 items-center justify-center gap-2 bg-white py-3 text-xs font-semibold uppercase tracking-widest text-velmora-dark opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-velmora-dark hover:text-white"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="mt-4 block text-center">
        <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        <h3 className="mt-2 text-product">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-velmora-dark">${product.price}</p>
      </Link>
    </article>
  )
}
