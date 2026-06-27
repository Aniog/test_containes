import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import products from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)
  const [addedId, setAddedId] = useState(null)

  const handleQuickAdd = (product, e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Bestsellers</h2>
          <p className="text-sm text-velmora-500 mt-2">Most loved pieces this season</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-velmora-100 rounded-sm">
                <img
                  src={hoveredId === product.id && product.images[1] ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-900/0 group-hover:bg-velmora-900/10 transition-all duration-300" />
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className={`absolute bottom-3 left-3 right-3 py-2.5 text-[11px] tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                    addedId === product.id
                      ? 'bg-gold-500 text-white'
                      : 'bg-white/90 text-velmora-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white'
                  }`}
                >
                  {addedId === product.id ? 'Added!' : 'Add to Cart'}
                </button>
                <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-velmora-600 hover:text-red-400 transition-colors" />
                </button>
              </div>
              <div className="mt-3 px-0.5">
                <h3 className="product-name text-xs md:text-sm text-velmora-900 truncate">{product.name}</h3>
                <p className="text-xs md:text-sm text-velmora-600 mt-0.5 font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline text-sm inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}