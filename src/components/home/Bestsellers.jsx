import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-brand-stone">Curated for you</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mt-3 font-semibold">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product, 'gold', 1)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-brand-charcoal text-brand-charcoal text-xs tracking-widest uppercase py-3 px-10 hover:bg-brand-charcoal hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating) => {
    const full = Math.floor(rating)
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-3 h-3 ${i < full ? 'text-brand-gold fill-brand-gold' : 'text-brand-border'}`}
        />
      )
    }
    return stars
  }

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-brand-warm overflow-hidden mb-3">
        <img
          src={isHovered ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
        />

        {/* Quick add button */}
        <button
          onClick={onAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 text-white text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="flex flex-col gap-1">
        <h3 className="text-xs tracking-widest uppercase font-medium text-brand-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          {renderStars(product.rating)}
          <span className="text-[10px] text-brand-stone ml-1">({product.reviewCount})</span>
        </div>
        <span className="text-sm font-medium text-brand-charcoal">${product.price}</span>
      </Link>
    </div>
  )
}