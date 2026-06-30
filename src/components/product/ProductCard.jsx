import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { StockImage } from '@/components/ui/StockImage'

export function ProductCard({ product, containerRef }) {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-hairline/30 aspect-[3/4]">
        <StockImage
          id={`product-card-${product.id}`}
          query={`[product-title-${product.id}] gold jewelry editorial product photography warm neutral`}
          ratio="3x4"
          width={600}
          alt={product.name}
          containerRef={containerRef}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addToCart(product, { tone: product.tone?.[0] || 'gold', quantity: 1 })
          }}
          className="absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-deep py-3 uppercase text-xs tracking-widest-xl font-medium flex items-center justify-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-deep hover:text-velmora-cream"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </Link>
      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-title-${product.id}`}
            className="font-serif text-base uppercase tracking-widest-xl text-velmora-deep hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-velmora-taupe mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
