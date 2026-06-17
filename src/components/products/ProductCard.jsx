import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '../../lib/CartContext'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const cardRef = useRef(null)
  const fields = product?.data ?? product

  const discount = fields.original_price && fields.original_price > fields.price
    ? Math.round((1 - fields.price / fields.original_price) * 100)
    : null

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current)
    }
  }, [product.id])

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: fields.name,
      price: fields.price,
      category: fields.category,
      brand: fields.brand,
    })
  }

  const titleId = `product-title-${product.id}`
  const catId = `product-cat-${product.id}`

  return (
    <div ref={cardRef} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 overflow-hidden group flex flex-col">
      <Link to={`/products?category=${encodeURIComponent(fields.category)}`} className="block relative overflow-hidden bg-slate-50 aspect-square">
        <img
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[${catId}] [${titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={fields.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {fields.is_new && (
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">新品</span>
          )}
          {discount && (
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">-{discount}%</span>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span id={catId} className="text-xs text-blue-600 font-medium mb-1">{fields.category}</span>
        <h3 id={titleId} className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2 flex-1">{fields.name}</h3>

        {fields.brand && (
          <p className="text-xs text-slate-500 mb-2">{fields.brand}</p>
        )}

        {fields.rating && (
          <div className="flex items-center gap-1.5 mb-2">
            <StarRating rating={fields.rating} />
            <span className="text-xs text-slate-500">({fields.review_count?.toLocaleString()})</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
          <div>
            <span className="text-lg font-bold text-red-600">¥{fields.price?.toFixed(2)}</span>
            {fields.original_price && fields.original_price > fields.price && (
              <span className="text-xs text-slate-400 line-through ml-1">¥{fields.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            title="加入购物车"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
