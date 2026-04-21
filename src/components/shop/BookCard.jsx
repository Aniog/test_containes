import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, BookOpen } from 'lucide-react'
import { useCart } from '../../api/CartContext.jsx'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">{rating?.toFixed(1)}</span>
    </div>
  )
}

export default function BookCard({ book }) {
  const { addToCart, isInCart } = useCart()
  const d = book?.data ?? {}
  const inCart = isInCart(book.id)

  const discount = d.original_price && d.original_price > d.price
    ? Math.round((1 - d.price / d.original_price) * 100)
    : null

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Cover */}
      <Link to={`/book/${book.id}`} className="relative block overflow-hidden bg-gray-100 aspect-[3/4]">
        {d.cover_url ? (
          <img
            src={d.cover_url}
            alt={d.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
            <BookOpen className="w-16 h-16 text-indigo-300" />
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {d.is_bestseller && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">畅销</span>
          )}
          {d.is_featured && (
            <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">精选</span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">-{discount}%</span>
          )}
        </div>
        {/* Format badge */}
        {d.file_format && (
          <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
            {d.file_format}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded-full">{d.category}</span>
        </div>
        <Link to={`/book/${book.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mt-1.5 mb-1 line-clamp-2 hover:text-indigo-600 transition-colors">
            {d.title}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mb-2">{d.author}</p>

        {d.rating && <StarRating rating={d.rating} />}

        <div className="mt-auto pt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">¥{d.price?.toFixed(2)}</span>
            {d.original_price && d.original_price > d.price && (
              <span className="ml-1.5 text-xs text-gray-400 line-through">¥{d.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(book)}
            disabled={inCart}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              inCart
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {inCart ? '已加入' : '加入购物车'}
          </button>
        </div>
      </div>
    </div>
  )
}
