import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Most Loved</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4 relative">
                  <img
                    src={hoveredId === product.id && product.images[1] ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                  {/* Quick Add */}
                  <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product, product.variants[0])
                      }}
                      className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </Link>

              <Link to={`/product/${product.id}`}>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
                <h3 className="product-name text-sm mb-1">{product.name}</h3>
                <p className="text-sm font-medium">{formatPrice(product.price)}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
