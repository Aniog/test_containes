import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-gold' : 'text-warm-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-espresso">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3x4] bg-warm-100 overflow-hidden mb-3">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  alt={product.name}
                  data-strk-img-id={`${product.imgId}-hover`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Quick add */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addItem(product)
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-espresso/90 text-white font-sans text-[10px] tracking-product uppercase py-2.5 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-espresso"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
              <div>
                <h3
                  id={product.titleId}
                  className="font-serif text-xs md:text-sm tracking-product uppercase text-espresso group-hover:text-gold transition-colors"
                >
                  {product.name}
                </h3>
                <p id={product.descId} className="sr-only">{product.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <StarRating rating={product.rating} />
                  <span className="text-[10px] text-warm-400 font-sans">({product.reviews})</span>
                </div>
                <p className="font-sans text-sm font-medium text-espresso mt-1">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
