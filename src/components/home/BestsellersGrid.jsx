import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null)
  const { addToCart } = useCart()

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Most Loved
          </p>
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add */}
                <button
                  onClick={() => addToCart(product, product.variants[0])}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-3 text-sm tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <ShoppingBag size={14} className="inline mr-2" />
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={12} className="fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
                <p className="font-medium">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
