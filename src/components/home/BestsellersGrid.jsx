import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
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
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-taupe-light mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-velmora-base/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-sm tracking-wider text-velmora-base group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-text-light mt-1">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-text-light">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-velmora-base mt-2">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export default function BestsellersGrid() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-velmora-base text-velmora-base text-xs tracking-widest uppercase hover:bg-velmora-base hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
