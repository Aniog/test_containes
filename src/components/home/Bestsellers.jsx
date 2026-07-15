import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const { addItem } = useCart()

  const bestsellers = products.filter(p => p.bestseller)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-4xl text-deep-charcoal tracking-wide"
          >
            Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-warm-gray-500 tracking-wide">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3x4] bg-antique-white overflow-hidden mb-3">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                {/* Second image on hover */}
                <img
                  data-strk-img-id={`${product.imgId}-hover`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] worn model [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Quick add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className="w-full bg-deep-charcoal/90 text-warm-cream font-sans text-[10px] tracking-super-wide uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-deep-charcoal transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3
                id={product.titleId}
                className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-deep-charcoal text-center"
              >
                {product.name}
              </h3>
              <p
                id={product.descId}
                className="font-sans text-[10px] md:text-xs text-warm-gray-500 text-center mt-0.5"
              >
                {product.description}
              </p>
              <p className="font-sans text-sm text-deep-charcoal text-center mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
