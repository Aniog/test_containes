import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { getImage } from '@/data/images'
import { useCart } from '@/components/cart/CartContext'

const productImageMap = {
  'vivid-aura-jewels': { primary: 'vivid-aura-primary', secondary: 'vivid-aura-secondary' },
  'majestic-flora-nectar': { primary: 'majestic-flora-primary', secondary: 'majestic-flora-secondary' },
  'golden-sphere-huggies': { primary: 'golden-sphere-primary', secondary: 'golden-sphere-secondary' },
  'amber-lace-earrings': { primary: 'amber-lace-primary', secondary: 'amber-lace-secondary' },
  'royal-heirloom-set': { primary: 'royal-heirloom-primary', secondary: 'royal-heirloom-secondary' },
}

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const imgKeys = productImageMap[product.id] || {}

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-100">
          {/* Primary image */}
          <img
            src={getImage(imgKeys.primary)}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Secondary image (hover) */}
          <img
            src={getImage(imgKeys.secondary)}
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white text-xs tracking-wide-2 uppercase font-medium py-3 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-xs uppercase tracking-ultra-wide text-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-xs text-warm-500 mt-1"
        >
          {product.description}
        </p>
        <p className="text-sm font-medium text-charcoal mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold text-xs tracking-wide-2 uppercase font-medium px-10 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
