import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-[#A0988E] max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#D4B878] transition-colors uppercase tracking-[0.15em] font-medium"
          >
            View All Products
            <span className="text-lg">&rarr;</span>
          </Link>
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
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="relative aspect-square bg-[#111111] overflow-hidden rounded-sm mb-3">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product, product.variants[0])
          }}
          className="absolute bottom-3 right-3 bg-[#C9A96E] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4B878]"
          aria-label={`Quick add ${product.name}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="flex flex-col gap-1">
        <h3 className="font-serif text-xs md:text-sm text-[#F5F0EB] tracking-[0.15em] uppercase truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 text-[#C9A96E] fill-[#C9A96E]" />
          <span className="text-[10px] text-[#A0988E]">{product.rating}</span>
        </div>
        <p className="text-sm text-[#C9A96E] font-medium">${product.price}</p>
      </Link>
    </div>
  )
}