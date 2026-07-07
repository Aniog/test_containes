import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
          {/* Primary image */}
          <img
            src={product.imgUrl}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            src={product.imgUrl2}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          {product.tags.includes('bestseller') && (
            <div className="absolute top-3 left-3 bg-velmora-obsidian/80 px-2.5 py-1">
              <span className="font-manrope text-[9px] uppercase tracking-widest text-velmora-gold">
                Bestseller
              </span>
            </div>
          )}

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 font-manrope text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-300 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-gold'
                  : 'bg-velmora-ivory/95 text-velmora-text hover:bg-velmora-gold hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3 h-3" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          <p
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-widest text-velmora-text font-medium leading-tight group-hover:text-velmora-gold transition-colors duration-300"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="font-manrope text-xs text-velmora-muted mt-1 line-clamp-1"
          >
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-manrope text-sm font-medium text-velmora-text">
              ${product.price}
            </span>
            <div className="flex items-center gap-1.5">
              <StarRating rating={product.rating} />
              <span className="font-manrope text-[10px] text-velmora-subtle">
                ({product.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
