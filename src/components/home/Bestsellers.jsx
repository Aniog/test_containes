import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { products } from '../../data/products'
import { useCartDispatch } from '../../context/CartContext'

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const dispatch = useCartDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'ADD_ITEM', payload: { product } })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading={index < 3 ? 'eager' : 'lazy'}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          loading="lazy"
        />
        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Quick add ${product.name}`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="pt-4 pb-2">
        <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]">
          {product.name}
        </h3>
        <p className="text-sm text-taupe mt-1 font-sans">${product.price}</p>
      </div>
    </Link>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-semibold">
            Bestsellers
          </h2>
          <p className="text-taupe mt-3 text-sm md:text-base max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-[#1a1a1a] text-[#1a1a1a] px-10 py-3.5 text-sm font-medium tracking-[0.15em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}