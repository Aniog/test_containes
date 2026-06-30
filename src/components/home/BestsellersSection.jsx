import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#e8e2db] overflow-hidden mb-4">
        <div className={`w-full h-full bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] flex items-center justify-center transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
          <span className="text-[#6b6560] text-xs uppercase tracking-wider">{product.name}</span>
        </div>
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-br from-[#c9b896] to-[#b8a482] flex items-center justify-center transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <span className="text-[#6b6560] text-xs uppercase tracking-wider">{product.name}</span>
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full btn-accent flex items-center justify-center gap-2 text-xs"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-center">{product.name}</h3>
        <p className="text-xs text-[#6b6560] text-center mt-1">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4c5b2]'}
            />
          ))}
          <span className="text-xs text-[#6b6560] ml-1">({product.reviews})</span>
        </div>
        <p className="text-center mt-2 font-medium">${product.price}</p>
      </Link>
    </div>
  )
}

export default function BestsellersSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl lg:text-5xl mb-3">Bestsellers</h2>
          <p className="text-[#6b6560] text-sm">Our most loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
