import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from './StarRating'
import ProductImage from './ProductImage'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAdd = () => {
    setIsAdding(true)
    addItem(product, product.variants[0], 1)
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <article
      className="group relative animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        id={`product-desc-${product.id}`}
        className="sr-only"
      >
        {product.category} — {product.description}
      </p>

      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-warm-gray">
          <ProductImage
            product={product}
            imgId={`velmora-product-${product.id}-main`}
            ratio="4x5"
            width={600}
            className={`transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ProductImage
              product={product}
              imgId={`velmora-product-${product.id}-hover`}
              ratio="4x5"
              width={600}
              className="opacity-100"
              alt={`${product.name} alternate view`}
            />
          </div>
        </div>

        <div className="pt-4 text-center">
          <h3
            id={`product-title-${product.id}`}
            className="text-xs md:text-sm font-sans font-medium uppercase tracking-widest-plus text-espresso"
          >
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs text-taupe">({product.reviewCount})</span>
          </div>
          <p className="mt-2 text-sm md:text-base font-sans font-medium text-espresso">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={handleAdd}
        className={`mt-3 w-full hidden md:flex items-center justify-center gap-2 py-3 uppercase text-xs tracking-ui font-medium transition-all duration-300 ${
          isHovered
            ? 'bg-espresso text-cream hover:bg-charcoal'
            : 'bg-warm-gray text-espresso hover:bg-espresso hover:text-cream'
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        {isAdding ? 'Added to Cart' : 'Add to Cart'}
      </button>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-3 w-full md:hidden flex items-center justify-center gap-2 bg-espresso text-cream py-3 uppercase text-xs tracking-ui font-medium hover:bg-charcoal transition-colors"
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Add to Cart
      </button>
    </article>
  )
}
