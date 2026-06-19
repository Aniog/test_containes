import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden mb-3 sm:mb-4">
          <img
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-1 bg-[var(--velmora-gold)] text-[var(--velmora-black)] text-[10px] tracking-widest uppercase">
              {product.badge}
            </span>
          )}
          {/* Quick add overlay - hidden on mobile, shown on hover for desktop */}
          <div className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 transition-all duration-300 hidden sm:block ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                addToCart(product, product.variants[0])
              }}
              className="w-full btn-gold text-xs py-2.5 sm:py-3"
              aria-label={`Add ${product.name} to cart`}
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs sm:text-sm text-[var(--velmora-text)] mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
          <Star className="w-3 h-3 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
          <span className="text-xs text-[var(--velmora-text-secondary)]">{product.rating}</span>
          <span className="text-xs text-[var(--velmora-text-muted)]">({product.reviews})</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--velmora-text)]">${product.price}</p>
      </Link>
    </div>
  )
}

export default function BestsellersSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            Most Loved
          </p>
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)]">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
