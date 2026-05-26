import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '../../lib/CartContext'

const BADGE_STYLES = {
  hot: 'bg-orange-500 text-white',
  new: 'bg-yellow-400 text-gray-900',
  sale: 'bg-red-700 text-white',
  limited: 'bg-purple-600 text-white',
}

const BADGE_LABELS = {
  hot: '热销',
  new: '新品',
  sale: '特惠',
  limited: '限量',
}

const CATEGORY_LABELS = {
  jersey: '球衣',
  ball: '足球',
  scarf: '围巾',
  hat: '帽子',
  flag: '旗帜',
  trophy: '奖杯',
  collectible: '收藏品',
  accessory: '配件',
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const cardRef = useRef(null)
  const { data } = product
  const discount = data.original_price
    ? Math.round((1 - data.price / data.original_price) * 100)
    : null

  useEffect(() => {
    if (cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current)
    }
  }, [])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    console.log('Added to cart:', data.name)
  }

  return (
    <div ref={cardRef} className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-700/50 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-200">
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-square bg-gray-800 overflow-hidden">
          <img
            alt={data.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-strk-img-id={`product-img-${product.id}`}
            data-strk-img={`[product-name-${product.id}] [product-team-${product.id}] world cup merchandise`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {data.badge && BADGE_STYLES[data.badge] && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${BADGE_STYLES[data.badge]}`}>
                {BADGE_LABELS[data.badge]}
              </span>
            )}
            {discount && discount > 0 && (
              <span className="bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button className="absolute top-2 right-2 w-8 h-8 bg-gray-900/80 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          {/* Hidden text refs for image search */}
          <span id={`product-team-${product.id}`} className="sr-only">{data.team || ''}</span>
          <span id={`product-name-${product.id}`} className="sr-only">{data.name}</span>

          <div className="flex items-center gap-2 mb-1">
            {data.category && (
              <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full">
                {CATEGORY_LABELS[data.category] || data.category}
              </span>
            )}
            {data.team && (
              <span className="text-gray-500 text-xs">{data.team}</span>
            )}
          </div>

          <h3 className="text-white font-semibold text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
            {data.name}
          </h3>

          {/* Rating */}
          {data.rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i <= Math.round(data.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <span className="text-gray-400 text-xs">({data.review_count || 0})</span>
            </div>
          )}

          {/* Price + Cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-yellow-400 font-bold text-lg">¥{(data.price * 7.2).toFixed(0)}</span>
              {data.original_price && (
                <span className="text-gray-500 text-xs line-through ml-2">
                  ¥{(data.original_price * 7.2).toFixed(0)}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 bg-red-700 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
