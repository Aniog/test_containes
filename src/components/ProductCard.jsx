import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
          <img
            data-strk-img-id={hovered ? product.imgId2 : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add button on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-charcoal font-sans text-xs uppercase tracking-wider py-2.5 border-none cursor-pointer hover:bg-gold hover:text-white transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="font-serif text-xs md:text-sm uppercase tracking-[0.15em] text-charcoal mb-1"
          >
            {product.name}
          </h3>
          <p className="font-sans text-sm text-muted">${product.price}</p>
          <p id={product.descId} className="hidden">{product.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
