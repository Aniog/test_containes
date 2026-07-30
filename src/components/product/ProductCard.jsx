import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variant)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[prod-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Second image on hover */}
        <img
          data-strk-img-id={`bestseller-${product.id}-alt`}
          data-strk-img={`[prod-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add on hover */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAdd}
            className="w-full py-2.5 bg-cream/95 backdrop-blur-sm text-charcoal text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-espresso transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <h3
        id={`prod-name-${product.id}`}
        className="font-serif text-xs lg:text-sm tracking-[0.18em] uppercase text-charcoal leading-tight"
      >
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mt-1.5">
        <p className="text-sm text-stone font-light">${product.price}</p>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-warm'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] text-stone ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  )
}
