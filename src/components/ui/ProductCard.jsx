import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, { quantity: 1, tone: product.tone })
  }

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-champagne/30 overflow-hidden">
        <Link
          to={`/products/${product.slug}`}
          className="block absolute inset-0"
          aria-label={product.name}
        >
          <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: isHovered ? 0 : 1 }}>
            <ProductImage
              product={product}
              variant="primary"
              ratio="4x5"
              width={600}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: isHovered ? 1 : 0 }}>
            <ProductImage
              product={product}
              variant="hover"
              ratio="4x5"
              width={600}
              className="w-full h-full"
            />
          </div>
        </Link>
        {product.bestseller && (
          <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest font-sans text-cream bg-espresso/80 px-2.5 py-1">
            Bestseller
          </span>
        )}
        {showQuickAdd && (
          <button
            type="button"
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-cream text-espresso py-3 text-xs uppercase tracking-widest font-sans opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gold hover:text-espresso"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        )}
      </div>
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base uppercase tracking-widest text-espresso"
        >
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p
          id={product.descId}
          className="mt-1.5 text-xs text-charcoal/70 font-sans line-clamp-2 px-2"
        >
          {product.shortDescription}
        </p>
        <p className="mt-2 font-serif text-base md:text-lg text-gold">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
