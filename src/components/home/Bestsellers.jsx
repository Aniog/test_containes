import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const bestsellers = products.filter(p => p.tags.includes('bestseller'))

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0].id)
            }}
            className="w-full bg-onyx-950/90 backdrop-blur-sm text-ivory-50 py-3 px-4 flex items-center justify-center gap-2 font-sans text-xs tracking-ultra-wide uppercase hover:bg-onyx-950 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="font-serif text-base sm:text-lg tracking-wide uppercase text-onyx-900 group-hover:text-gold-600 transition-colors">
        {product.name}
      </h3>
      <p className="font-sans text-xs text-onyx-400 mt-1">
        {product.subtitle}
      </p>
      <p className="font-sans text-sm font-medium text-onyx-800 mt-2">
        {formatPrice(product.price)}
      </p>
    </Link>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-onyx-900">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline-gold text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
