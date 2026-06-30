import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function RelatedProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block flex-shrink-0 w-56 md:w-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-3">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.shortName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="velmora-btn velmora-btn-primary w-full text-xs py-2.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="velmora-product-name text-xs mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
        <span className="velmora-body-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
      </div>
      <p className="velmora-body-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="velmora-section bg-[var(--velmora-bg-alt)]">
      <div className="velmora-container mx-auto">
        <h2 className="velmora-heading velmora-heading-md text-center mb-10">
          You May Also Like
        </h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {related.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
