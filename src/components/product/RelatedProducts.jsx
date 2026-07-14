import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function RelatedProducts({ currentProductId }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [currentProductId])

  return (
    <section ref={containerRef} className="section-padding bg-cream-100">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="heading-serif text-2xl md:text-3xl text-warm-900 text-center mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative overflow-hidden bg-cream-200/50 mb-4 aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.id}`}
                  data-strk-img={`[related-name-${product.id}] gold jewelry product elegant`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addItem(product)
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-stone-950/90 text-cream-100 text-xs tracking-[0.12em] uppercase py-2.5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm"
                >
                  <ShoppingBag size={13} strokeWidth={1.5} />
                  Add to Cart
                </button>
              </div>
              <p id={`related-name-${product.id}`} className="text-product-name text-xs md:text-sm text-warm-900 mb-1">
                {product.name}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-warm-800">{formatPrice(product.price)}</span>
                <div className="flex items-center gap-0.5">
                  <Star size={11} fill="currentColor" className="text-gold-500" />
                  <span className="text-[11px] text-warm-800/60">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
