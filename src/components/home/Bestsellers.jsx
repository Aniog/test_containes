import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">Bestsellers</h2>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
            >
              {/* Image container */}
              <div className="relative aspect-[3x4] overflow-hidden bg-velmora-cream">
                {/* Primary image */}
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Quick add button */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full bg-velmora-gold text-velmora-dark font-sans text-xs tracking-[0.1em] uppercase py-3 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div className="mt-3 md:mt-4">
                <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-velmora-dark">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-xs text-stone-500 font-sans mt-1 line-clamp-2 hidden md:block">
                  {product.description}
                </p>
                <p className="font-sans text-sm md:text-base font-medium text-velmora-dark mt-1">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
