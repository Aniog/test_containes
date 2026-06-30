import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StrkImg } from '@/components/Image'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'

function ProductImage({ product, isHovered, index }) {
  return (
    <>
      <StrkImg
        id={`product-${product.id}-primary-${index}`}
        query={product.images.primary}
        ratio="4x5"
        width={600}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <StrkImg
        id={`product-${product.id}-secondary-${index}`}
        query={product.images.secondary}
        ratio="4x5"
        width={600}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </>
  )
}

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addToCart(product, { quantity: 1, tone: product.toneOptions[0] })
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <article className="group">
      <Link to={`/products/${product.slug}`} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-velmora-bg-alt mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProductImage product={product} isHovered={isHovered} index={index} />

          {product.new && (
            <span className="absolute top-3 left-3 bg-velmora-ink text-white text-[10px] uppercase tracking-widest px-2 py-1 font-sans font-medium">
              New
            </span>
          )}

          <button
            onClick={handleAdd}
            disabled={isAdding}
            className="absolute bottom-0 left-0 right-0 bg-velmora-ink text-white text-xs uppercase tracking-widest py-3 font-sans font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-velmora-accent"
          >
            {isAdding ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </Link>

      <div className="space-y-1">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={12} />
        <h3 className="font-serif text-sm uppercase tracking-velmora text-velmora-ink">
          <Link to={`/products/${product.slug}`} className="hover:text-velmora-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="font-sans text-sm text-velmora-ink-muted">${product.price}</p>
      </div>
    </article>
  )
}
