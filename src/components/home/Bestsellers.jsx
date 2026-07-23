import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (product) => {
    addItem(product, 'gold', 1)
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="bestsellers-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="font-sans text-sm text-warm-black/50 mt-2">Our most loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[3x4] bg-warm-ivory overflow-hidden">
                {/* Primary image */}
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Secondary image on hover */}
                <img
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Quick add overlay */}
                <div className="absolute inset-0 bg-warm-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(product) }}
                    className="bg-gold text-warm-black font-sans text-xs uppercase tracking-wider px-6 py-2.5 hover:bg-gold-light transition-colors flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-3 md:mt-4">
                <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-widest text-warm-black">{product.name}</h3>
                <p id={product.descId} className="font-sans text-xs text-warm-black/50 mt-1 hidden md:block">{product.shortDescription}</p>
                <p className="font-sans font-semibold text-sm text-warm-black mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
