import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0].src,
      quantity: 1,
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => { setHovered(true); setImgIdx(1) }}
      onMouseLeave={() => { setHovered(false); setImgIdx(0) }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          src={product.images[imgIdx].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus size={16} strokeWidth={1.5} className="text-velmora" />
        </button>
      </div>

      {/* Info */}
      <div>
        <h3 className="product-name text-xs mb-1">{product.name}</h3>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                fill={i < Math.floor(product.rating) ? '#c2ab8d' : 'none'}
                className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-rose'}
                strokeWidth={1}
              />
            ))}
          </div>
          <span className="text-[0.625rem] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
