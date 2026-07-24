import { Link } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext'
import { products } from '@/data/products'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ShoppingBag } from 'lucide-react'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-velmora-textPrimary tracking-[0.05em]">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="font-sans text-sm text-velmora-textSecondary mt-3 tracking-[0.03em]">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image container */}
                <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm">
                  {/* Primary image */}
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Secondary image (hover) */}
                  <img
                    data-strk-img-id={`${product.imgId}-hover`}
                    data-strk-img={`[${product.descId}] worn [${product.titleId}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} worn`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Quick Add to Cart */}
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product); }}
                    className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-velmora-gold text-velmora-base px-4 py-2 font-sans text-xs uppercase tracking-[0.08em] flex items-center gap-2 transition-all duration-300 rounded-sm z-10 ${
                      hoveredId === product.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 md:pointer-events-none'
                    }`}
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </Link>

              {/* Product info */}
              <div className="mt-3 md:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 id={product.titleId} className="font-serif text-sm md:text-base uppercase tracking-[0.15em] text-velmora-textPrimary">
                    {product.name}
                  </h3>
                </Link>
                <p id={product.descId} className="font-sans text-xs text-velmora-textSecondary mt-1 hidden md:block">
                  {product.shortDescription}
                </p>
                <p className="font-serif text-sm md:text-base text-velmora-gold mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
