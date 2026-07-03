import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                <img
                  data-strk-img-id={hoveredId === product.id ? product.imgId2 : product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Quick add */}
                <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm py-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="flex items-center gap-2 text-cream text-[11px] tracking-nav uppercase font-semibold hover:text-gold transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3
                id={product.titleId}
                className="font-serif text-xs md:text-sm tracking-product uppercase text-charcoal text-center"
              >
                {product.name}
              </h3>
              <p
                id={product.descId}
                className="text-[11px] text-stone-500 text-center mt-0.5 hidden"
              >
                {product.description}
              </p>
              <p className="text-sm font-medium text-charcoal text-center mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
