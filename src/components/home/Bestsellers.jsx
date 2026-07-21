import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-100 mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-900/90 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => addToCart(product, product.variants[0])}
            className="w-full py-3 bg-charcoal-900/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-charcoal-900 transition-colors font-sans"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Info */}
      <Link to={`/product/${product.slug}`} className="block">
        <h3 className="font-serif text-sm tracking-wide text-charcoal-900 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-500 font-sans">{product.rating}</span>
          <span className="text-xs text-charcoal-300 font-sans">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans mt-1 text-charcoal-700">${product.price}</p>
      </Link>
    </div>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-3 font-sans">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-charcoal-900 text-charcoal-900 text-xs tracking-widest uppercase hover:bg-charcoal-900 hover:text-white transition-all duration-300 font-sans"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
