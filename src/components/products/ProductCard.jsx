import { Star, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const fields = product?.data ?? product ?? {}
  const id = product?.id

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const discount = fields.original_price && fields.original_price > fields.price
    ? Math.round((1 - fields.price / fields.original_price) * 100)
    : null

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id, ...fields })
  }

  const titleId = `product-title-${id}`
  const descId = `product-desc-${id}`

  return (
    <div ref={containerRef}>
      <Link
        to={`/products/${id}`}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 flex flex-col group block"
      >
        {/* Image */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <img
            data-strk-img-id={`product-img-${id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={fields.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discount && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                -{discount}%
              </span>
            )}
            {fields.is_new && (
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                新品
              </span>
            )}
          </div>
          {/* Quick add */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1">
          <p id={titleId} className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-1">
            {fields.name}
          </p>
          <p id={descId} className="text-xs text-gray-500 line-clamp-1 mb-2">
            {fields.brand || fields.category}
          </p>

          {/* Rating */}
          {fields.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${star <= Math.round(fields.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">({fields.review_count?.toLocaleString()})</span>
            </div>
          )}

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-red-600">¥{fields.price?.toFixed(2)}</span>
              {fields.original_price && fields.original_price > fields.price && (
                <span className="text-xs text-gray-400 line-through">¥{fields.original_price?.toFixed(2)}</span>
              )}
            </div>
            {fields.stock === 0 && (
              <span className="text-xs text-gray-400 mt-1 block">已售罄</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
