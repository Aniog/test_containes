import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, containerRef }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Secondary image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close-up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-cream font-manrope text-[9px] uppercase tracking-[0.12em] px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-obsidian font-manrope text-[9px] uppercase tracking-[0.12em] px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-cream font-manrope text-[10px] uppercase tracking-[0.15em] py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.12em] text-obsidian font-medium group-hover:text-gold transition-colors duration-300">
          {product.name}
        </p>
        <p id={product.descId} className="font-manrope text-xs text-taupe leading-relaxed line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-manrope text-sm font-medium text-obsidian">${product.price}</p>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-taupe">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
