import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-muted-fg font-sans">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                    }`}
                  />
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.titleId}] gold jewelry close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />

                  {/* Quick add button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className={`absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal py-2.5 text-xs uppercase tracking-widest font-sans border-none transition-all duration-300 ${
                      hoveredId === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>

              <div className="mt-3">
                <h3
                  id={product.titleId}
                  className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium"
                >
                  {product.name}
                </h3>
                <p id={product.descId} className="sr-only">{product.description}</p>
                <p className="mt-1 text-sm text-charcoal font-sans">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest font-sans hover:bg-gold hover:text-white transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
