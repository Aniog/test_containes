import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { products, bestsellerIds } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const bestsellers = bestsellerIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2 font-light">
          Bestsellers
        </h2>
        <p className="text-espresso/50 text-center text-sm font-sans mb-14">
          The pieces everyone is falling in love with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
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

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-muted-gold rounded-sm overflow-hidden mb-4">
        <img
          src={hovered && product.images.hover ? product.images.hover : product.images.primary}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm text-espresso p-2 rounded-sm shadow-md transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-gold hover:text-cream`}
          aria-label={`Add ${product.name} to bag`}
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Info */}
      <h3 className="product-name group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      <p className="product-price mt-1">${product.price}</p>
    </Link>
  )
}