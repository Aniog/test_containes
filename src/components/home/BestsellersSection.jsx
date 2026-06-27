import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-border-light mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm mb-1 group-hover:text-gold transition-colors">{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="text-gold fill-gold" />
        <span className="text-xs text-warm-gray">{product.rating}</span>
        <span className="text-xs text-muted">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function BestsellersSection() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-gold-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
