import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { CartContext } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
          {/* Main Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
          />
          {/* Hover Image */}
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              addToCart(product)
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            <Plus className="w-4 h-4 inline-block mr-2" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-1">
        <h3 className="text-sm font-light tracking-[0.15em] uppercase text-gray-900">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 font-light">{product.description}</p>
        <p className="text-base font-light text-gray-900">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
