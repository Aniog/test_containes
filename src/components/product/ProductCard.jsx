import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-ivory-muted aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="w-full bg-gold text-espresso font-sans text-xs font-medium tracking-wide uppercase py-3 hover:bg-gold-light transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-[11px] uppercase tracking-product text-espresso">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-0.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-border-light'}`}
            />
          ))}
        </div>
        <p className="font-sans text-sm text-espresso mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
