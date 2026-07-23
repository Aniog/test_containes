import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import Button from '@/components/ui/button'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]" id="bestsellers-title">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[#E5DDD3] overflow-hidden mb-3">
                  {/* Primary image */}
                  <img
                    data-strk-img-id={`product-${product.id}-primary`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Hover image (second image) */}
                  <img
                    data-strk-img-id={`product-${product.id}-hover`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Quick Add button on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                      hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-[#1A1A1A] text-xs font-sans font-medium tracking-wider uppercase hover:bg-gold hover:text-white transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <h3
                  className="font-serif text-xs uppercase tracking-wider text-[#1A1A1A] mb-1"
                  id={`product-name-${product.id}`}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-taupe" id={`product-desc-${product.id}`}>
                  ${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/collection">
            <Button variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}