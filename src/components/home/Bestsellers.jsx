import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle">Our most-loved pieces, chosen by women like you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onAdd({ ...product, image: product.images[0] })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[4/5] bg-[#F5EFE6] overflow-hidden relative mb-3">
        <img
          src={hovered ? product.images[1] || product.images[0] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        {/* Quick Add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-[#1C1814] py-2.5 font-body text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            added ? 'bg-[#C9A96E] text-white' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
      <h3 className="product-name text-[#1C1814] truncate">{product.name}</h3>
      <p className="product-price mt-1">${product.price}</p>
    </Link>
  )
}