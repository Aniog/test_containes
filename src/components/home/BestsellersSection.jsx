import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function BestsellersSection() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-3">Most Loved</p>
          <h2 className="font-serif-display text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="product-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <Link to={`/product/${product.id}`} className="product-card-image relative">
                <img src={product.images[0]} alt={product.shortName} />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-[10px] uppercase tracking-wider px-2 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addItem(product, product.variants[0])
                    }}
                    className="bg-white text-[var(--velmora-dark)] px-4 py-2 text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[var(--velmora-accent)] hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                </div>
              </Link>

              <Link to={`/product/${product.id}`}>
                <h3 className="product-card-title">{product.shortName}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                  <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
                </div>
                <p className="product-card-price">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
