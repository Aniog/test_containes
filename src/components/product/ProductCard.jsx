import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, Gem } from 'lucide-react'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-surface overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Gem className="w-8 h-8 text-gold/40 mx-auto mb-2" />
              <span className="text-xs text-muted font-sans capitalize">{product.category}</span>
            </div>
          </div>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal text-white py-3 text-xs font-sans font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-gold transition-colors border-none cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`} className="no-underline">
          <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 font-serif text-lg text-charcoal">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}

export default ProductCard
