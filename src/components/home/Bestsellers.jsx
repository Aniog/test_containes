import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.15em] uppercase text-brand-400 font-sans mb-3">
            Curated for you
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative bg-white rounded-sm overflow-hidden transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-brand-100 relative">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          <button
            className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Add to wishlist"
          >
            <Heart className="w-3.5 h-3.5 text-brand-600" />
          </button>
        </div>
      </Link>

      <div className="p-3 md:p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-xs md:text-sm uppercase tracking-widest text-brand-900 leading-relaxed">
            {product.name}
          </h3>
        </Link>
        <p className="text-[10px] md:text-xs text-brand-400 mt-1 font-sans truncate">
          {product.tagline}
        </p>
        <div className="flex items-center gap-1 mt-1.5">
          <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
          <span className="text-[10px] text-brand-500 font-sans">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-gold-700">${product.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="text-[10px] tracking-widest uppercase font-sans text-brand-600 border border-brand-300 px-2.5 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-900 hover:text-cream-50 hover:border-brand-900"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}