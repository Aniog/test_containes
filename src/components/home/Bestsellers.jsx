import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
              Bestsellers
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light">
              Most Loved
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] tracking-widest uppercase text-midnight-700 hover:text-midnight-900 transition-colors border-b border-midnight-900/20 hover:border-midnight-900/60 pb-0.5"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory rounded-sm">
          <img
            src={isHovered ? product.images.hover : product.images.primary}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={() => addItem(product, 'Gold', 1)}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cream border border-midnight-900/10"
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-midnight-800" />
      </button>

      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-[10px] text-midnight-500">{product.rating}</span>
        </div>
        <h3 className="text-[11px] tracking-widest uppercase font-medium text-midnight-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-midnight-500 font-medium">
          ${product.price}
        </p>
      </div>
    </div>
  )
}