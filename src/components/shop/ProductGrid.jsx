import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/cart/CartContext'

export default function ProductGrid({ products }) {
  const { addToCart } = useCart()

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-xl text-taupe tracking-wide">No products found.</p>
        <p className="text-sm font-sans text-taupe-light mt-2">Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map(product => (
        <div key={product.id} className="group">
          <Link to={`/product/${product.id}`} className="block">
            <div className="img-swap-container bg-sand aspect-[3/4] mb-4 overflow-hidden">
              {/* Primary placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-taupe-light/15 flex items-center justify-center">
                  <span className="text-taupe-light/40 text-[8px] tracking-widest uppercase font-sans">Gold Jewelry</span>
                </div>
              </div>
              {/* Secondary placeholder */}
              <div className="img-secondary bg-taupe-light/8 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-taupe-light/25 flex items-center justify-center">
                  <span className="text-taupe/30 text-[8px] tracking-widest uppercase font-sans">Detail View</span>
                </div>
              </div>
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-espresso text-cream text-[10px] tracking-wider uppercase px-2 py-0.5 font-sans">
                  New
                </span>
              )}
            </div>
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-[11px] md:text-xs tracking-wider uppercase text-espresso leading-tight mb-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm font-sans text-espresso font-medium">
                {formatPrice(product.price)}
              </p>
              <p className="text-[10px] text-taupe font-sans mt-0.5">{product.category}</p>
            </div>
            <button
              onClick={() => addToCart(product.id, product.variants[0], 1)}
              className="p-2 -mr-2 text-taupe hover:text-gold transition-colors"
              aria-label="Add to cart"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
