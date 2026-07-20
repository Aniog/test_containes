import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null)
  const { addToCart } = useCart()

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what matters.
          </p>
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
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <img
                    src={hoveredId === product.id ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product, product.variants[0])
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-primary/90 text-primary-foreground py-3 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-accent-foreground flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 fill-accent text-accent" />
                <span className="text-xs text-muted-foreground">{product.rating}</span>
              </div>
              <p className="font-medium">${product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
