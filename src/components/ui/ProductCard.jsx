import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3x4] bg-surfaceAlt overflow-hidden">
        <img
          src={product.imageUrl}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={product.imageUrl2}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className={`w-full font-sans text-xs tracking-widest uppercase py-3 transition-colors duration-200 rounded-none ${
              added
                ? 'bg-foreground text-surface'
                : 'bg-accent hover:bg-accentHover text-foreground'
            }`}
          >
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <h3 id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-foreground">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-foreground mt-1">${product.price}</p>
      </div>
    </Link>
  )
}
