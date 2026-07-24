import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useEffect, useRef } from 'react'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-black">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-stone-500 mt-3">The pieces our customers love most</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                {/* Second image on hover */}
                {hovered === product.id && product.images[1] && (
                  <img
                    data-strk-img-id={product.images[1].imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}

                {/* Quick add button */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addItem(product, 'gold', 1)
                  }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gold text-warm-black font-sans text-xs tracking-wide-15 uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-light flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-wide-15 uppercase text-warm-black group-hover:text-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p id={product.descId} className="font-sans text-xs text-stone-500 mt-1 line-clamp-2 hidden md:block">{product.description}</p>
              <p className="font-sans text-sm font-medium text-warm-black mt-2">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
