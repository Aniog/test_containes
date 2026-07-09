import { useState } from 'react'
import { Link } from 'react-router-dom'
import StarRating from '@/components/common/StarRating'
import { useCart } from '@/context/CartContext'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.id}-main`}
            data-strk-img={`[shop-${product.id}-name] gold jewelry product shot warm`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'/%3E`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-velmora-deep/30 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product)
              }}
              className="w-full py-2.5 bg-white/95 text-velmora-deep text-[10px] tracking-[0.12em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3
            id={`shop-${product.id}-name`}
            className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-deep"
          >
            {product.name}
          </h3>
          <p className="text-xs text-velmora-taupe capitalize">{product.category}</p>
          <StarRating rating={product.rating} reviews={product.reviews} />
          <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
