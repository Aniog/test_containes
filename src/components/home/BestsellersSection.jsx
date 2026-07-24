import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-100 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.shortName}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        <img
          src={product.images[1]}
          alt={product.shortName}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-900 text-velmora-50 text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-charcoal-900/90 backdrop-blur-sm text-white py-3 text-xs tracking-widest uppercase font-sans flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
      <div className="text-center">
        <h3 className="product-name mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-500">{product.rating} ({product.reviews})</span>
        </div>
        <p className="text-charcoal-900 font-medium">${product.price}</p>
      </div>
    </Link>
  )
}

export default function BestsellersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-3 font-sans">Most Loved</p>
          <h2 className="section-title mb-4">Bestsellers</h2>
          <p className="section-subtitle">
            The pieces our customers can't stop wearing — and talking about.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
