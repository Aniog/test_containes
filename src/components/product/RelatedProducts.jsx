import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function RelatedProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block flex-shrink-0 w-48 sm:w-56"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-taupe-light mb-3">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-velmora-base/90 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
      <h3 className="font-serif text-xs tracking-wider text-velmora-base group-hover:text-velmora-gold transition-colors truncate">
        {product.name}
      </h3>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-[10px] text-velmora-text-light">{product.rating}</span>
        </div>
        <p className="text-xs font-medium text-velmora-base">${product.price}</p>
      </div>
    </Link>
  )
}

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="py-16 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Complete the Look
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-base">
            You May Also Like
          </h2>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {related.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
