import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag } from 'lucide-react'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false)
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
      <div className="relative aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--color-charcoal)] text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-[var(--color-charcoal)] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
        {product.name}
      </h3>
      
      <div className="flex items-center gap-1 mb-2">
        <Star size={12} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
        <span className="text-xs text-[var(--color-muted)]">{product.rating}</span>
        <span className="text-xs text-[var(--color-muted)]">({product.reviews})</span>
      </div>
      
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

export default function BestsellersSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
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
