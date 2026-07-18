import { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading md:text-4xl text-brand-charcoal font-light">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Second image on hover */}
              {hoveredId === product.id && product.images[1] && (
                <img
                  data-strk-img-id={product.images[1].imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] alternate view`}
                  data-strk-img-ratio={product.images[1].ratio}
                  data-strk-img-width={product.images[1].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate`}
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                />
              )}
              {/* Quick add */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  addItem(product)
                }}
                className="absolute bottom-3 left-3 right-3 bg-white/90 text-brand-charcoal font-sans text-[10px] tracking-wide uppercase py-2.5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-white"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </div>

            {/* Info */}
            <h3 id={product.titleId} className="font-product-name text-brand-charcoal">
              {product.name}
            </h3>
            <p className="font-sans text-sm text-brand-muted mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
