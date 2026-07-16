import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[0],
      quantity: 1,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-blush overflow-hidden mb-4">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          data-strk-img-id={`${product.id}-1`}
          data-strk-img={`[${product.id}-name] [${product.id}-category] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          data-strk-img-id={`${product.id}-2`}
          data-strk-img={`[${product.id}-name] alternative view gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />

        {/* Quick add button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/90 backdrop-blur-sm text-velmora-charcoal font-sans text-xs tracking-wide uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            {added ? 'Added!' : (
              <>
                <ShoppingBag size={14} />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe" id={`${product.id}-category`}>
          {product.category}
        </span>
        <h3
          className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal mt-1 leading-tight"
          id={`${product.id}-name`}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center">
            <Star size={11} className="fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-[11px] text-velmora-taupe ml-1">
              {product.rating}
            </span>
          </div>
          <span className="font-sans text-sm font-medium text-velmora-charcoal">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  )
}