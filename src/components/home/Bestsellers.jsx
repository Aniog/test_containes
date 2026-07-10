import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img
            alt={product.name}
            data-strk-img-id={`home-${product.id}-img1`}
            data-strk-img={`[home-${product.id}-desc] [home-${product.id}-name] bestsellers`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={`home-${product.id}-img2`}
            data-strk-img={`[home-${product.id}-desc] [home-${product.id}-name] worn detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add - desktop hover */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`hidden md:block absolute bottom-3 left-1/2 -translate-x-1/2 bg-cream/95 backdrop-blur-sm text-base text-xs tracking-widest uppercase font-sans font-medium px-5 py-2.5 transition-all duration-300 hover:bg-gold hover:text-white z-10 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
        Add to Cart
      </button>

      {/* Quick add - mobile always visible */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className="md:hidden mt-2 w-full bg-cream border border-stone-200 text-base text-[10px] tracking-widest uppercase font-sans font-medium px-3 py-2 transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold active:bg-gold active:text-white"
      >
        <ShoppingBag className="w-3 h-3 inline mr-1 -mt-0.5" />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-2 md:mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`home-${product.id}-name`}
            className="font-serif text-[11px] md:text-sm tracking-wide-product uppercase text-base hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`home-${product.id}-desc`}
          className="text-[10px] md:text-xs text-stone-500 font-sans mt-0.5"
        >
          {product.shortDescription}
        </p>
        <p className="text-xs md:text-sm font-sans font-medium text-base mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-xl md:text-3xl tracking-ultra-wide uppercase text-base font-light mb-8 md:mb-14">
          Bestsellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
