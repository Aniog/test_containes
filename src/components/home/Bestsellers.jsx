import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [hoveredProduct])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-stone-50">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[4x3] overflow-hidden bg-stone-800">
                {/* Primary image */}
                <img
                  data-strk-img-id={product.images[0].imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio={product.images[0].ratio}
                  data-strk-img-width={product.images[0].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Hover image */}
                <img
                  data-strk-img-id={product.images[1].imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio={product.images[1].ratio}
                  data-strk-img-width={product.images[1].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Quick add button */}
                <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product.id, 1, 'gold')
                    }}
                    className="w-full bg-gold text-stone-900 font-serif uppercase tracking-widest text-xs py-2 hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div className="mt-3">
                <h3
                  id={product.titleId}
                  className="font-serif text-sm md:text-base uppercase tracking-widest text-stone-50 group-hover:text-gold transition-colors"
                >
                  {product.name}
                </h3>
                <p className="text-gold text-sm mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-serif uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold hover:text-stone-900 transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
