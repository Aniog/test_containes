import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag } from 'lucide-react'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone[0], 1)
  }

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="font-serif text-warm-black text-3xl md:text-4xl font-light uppercase tracking-[0.15em]"
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
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
              <div className="relative aspect-[3x4] overflow-hidden bg-cream">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                  data-strk-img-id={product.imgIdHover}
                  data-strk-img={`[${product.descId}] [${product.titleId}] worn model [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Quick add */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-warm-black/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                  <ShoppingBag className="w-4 h-4 text-muted-gold" />
                  <span className="text-warm-white text-xs uppercase tracking-wider">Add to Cart</span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3 md:mt-4">
                <h3
                  id={product.titleId}
                  className="font-serif text-warm-black text-sm md:text-base uppercase tracking-[0.12em] group-hover:text-muted-gold transition-colors duration-300"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="hidden"
                >
                  {product.description}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-muted-gold fill-muted-gold" />
                  <span className="text-warm-gray text-xs">{product.rating}</span>
                </div>
                <p className="text-warm-black text-sm mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
