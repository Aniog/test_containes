import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Loader2, Star } from 'lucide-react'
import { fetchBestsellers } from '../../api/ebooks.js'
import { useCart } from '../../api/CartContext.jsx'

function BestsellerRow({ book, rank }) {
  const { addToCart, isInCart } = useCart()
  const d = book?.data ?? {}
  const inCart = isInCart(book.id)

  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
        rank === 1 ? 'bg-amber-400 text-white' :
        rank === 2 ? 'bg-gray-300 text-gray-700' :
        rank === 3 ? 'bg-orange-400 text-white' :
        'bg-gray-100 text-gray-500'
      }`}>{rank}</span>

      <Link to={`/book/${book.id}`} className="w-12 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        {d.cover_url ? (
          <img src={d.cover_url} alt={d.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-indigo-100" />
        )}
      </Link>

      <div className="flex-1 min-w-0">
        <Link to={`/book/${book.id}`}>
          <p className="font-semibold text-gray-900 text-sm truncate hover:text-indigo-600 transition-colors">{d.title}</p>
        </Link>
        <p className="text-xs text-gray-500 truncate">{d.author}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-500">{d.rating?.toFixed(1)}</span>
          <span className="text-xs text-gray-400 ml-1">{d.sales_count?.toLocaleString()}销量</span>
        </div>
      </div>

      <div className="text-right flex-shrink-0">
        <p className="font-bold text-gray-900 text-sm">¥{d.price?.toFixed(2)}</p>
        <button
          onClick={() => addToCart(book)}
          disabled={inCart}
          className={`mt-1 text-xs px-2 py-1 rounded-full font-medium transition-all ${
            inCart ? 'bg-green-100 text-green-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {inCart ? '已加入' : '购买'}
        </button>
      </div>
    </div>
  )
}

export default function BestsellerSection() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBestsellers()
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">畅销榜</h2>
              <p className="text-gray-500 text-sm mt-0.5">最受读者喜爱的书籍</p>
            </div>
          </div>
          <Link to="/shop?sort=sales" className="hidden sm:inline-flex items-center gap-1.5 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {books.map((book, i) => (
              <BestsellerRow key={book.id} book={book} rank={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
