import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCartDispatch } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const cardRef = useRef(null)
  const dispatch = useCartDispatch()

  useEffect(() => {
    if (imgLoaded) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    setImgLoaded(true)
    return cleanup
  }, [imgLoaded])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'ADD', product, color: product.colors[0] })
  }

  return (
    <div
      ref={cardRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
          <img
            alt={product.name}
            data-strk-img-id={`card-${product.id}-primary`}
            data-strk-img={`[card-name-${product.id}] gold demi-fine jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          {/* Second image on hover */}
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={`card-${product.id}-alt`}
            data-strk-img={`[card-name-${product.id}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
          <span className="hidden" id={`card-name-${product.id}`}>{product.name}</span>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('new') && (
              <span className="px-2 py-0.5 text-[10px] font-sans font-medium tracking-wider uppercase bg-cream-50/90 text-velvet-800 backdrop-blur-sm">
                New
              </span>
            )}
            {product.tags.includes('bestseller') && (
              <span className="px-2 py-0.5 text-[10px] font-sans font-medium tracking-wider uppercase bg-warm-600/90 text-cream-50 backdrop-blur-sm">
                Bestseller
              </span>
            )}
          </div>

          {/* Quick add */}
          <button
            className={`absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 bg-cream-50/95 backdrop-blur-sm text-velvet-800 text-xs font-medium tracking-wider uppercase shadow-lg transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-serif text-sm md:text-base uppercase tracking-widest text-velvet-800 leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-warm-500 text-warm-500'
                      : 'fill-velvet-200 text-velvet-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-velvet-400">({product.reviewCount})</span>
          </div>
          <p className="font-sans text-sm font-medium text-velvet-700 mt-1">${product.price}</p>
          <p className="text-xs text-velvet-400 mt-0.5 capitalize">{product.colors.join(' · ')} tone</p>
        </div>
      </Link>
    </div>
  )
}
