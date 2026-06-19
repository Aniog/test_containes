import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3x4] bg-warm-gray/40 overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    alt={product.name}
                    data-strk-img-id={`${product.imgId}-hover`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] hover`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {/* Quick add */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal text-[10px] tracking-widest uppercase font-sans font-medium py-2.5 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
                  >
                    <ShoppingBag size={12} />
                    Add to Cart
                  </button>
                </div>
              </Link>
              <h3
                id={product.titleId}
                className="font-serif text-xs uppercase tracking-widest-custom text-charcoal text-center"
              >
                {product.name}
              </h3>
              <p
                id={product.descId}
                className="text-[11px] text-taupe font-sans text-center mt-1"
              >
                {product.description}
              </p>
              <p className="text-sm font-sans font-medium text-charcoal text-center mt-1.5">
                ${product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold text-xs tracking-widest uppercase font-sans font-medium px-10 py-3.5 hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
