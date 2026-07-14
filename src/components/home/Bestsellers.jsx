import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-stone-100">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 text-white font-sans text-[11px] font-medium tracking-btn uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      {/* Product info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm font-medium tracking-product uppercase text-charcoal"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.descId}
          className="text-xs text-stone-500 font-sans mt-0.5"
        >
          {product.description}
        </p>
        <p className="text-sm font-sans font-medium text-charcoal mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream-50">
      <div ref={containerRef} className="max-w-container mx-auto px-6">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-tight">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className={`text-center mt-10 md:mt-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-xs font-medium tracking-btn uppercase px-10 py-3 hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
