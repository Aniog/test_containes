import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
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
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.shortName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="velmora-btn velmora-btn-primary w-full text-xs py-3"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="velmora-product-name text-sm mb-1.5 group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
          <span className="velmora-body-xs text-[var(--velmora-text-muted)]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="velmora-body-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}

export default function BestsellersSection() {
  return (
    <section className="velmora-section">
      <div className="velmora-container mx-auto">
        <div className="text-center mb-12">
          <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
            Most Loved
          </p>
          <h2 className="velmora-heading velmora-heading-md">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn velmora-btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
