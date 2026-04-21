import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Loader2 } from 'lucide-react'
import BookCard from '../shop/BookCard.jsx'
import { fetchFeaturedEbooks } from '../../api/ebooks.js'

export default function FeaturedBooks() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedEbooks()
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">精选推荐</h2>
            <p className="text-gray-500 mt-1">编辑精心挑选的优质书籍</p>
          </div>
          <Link
            to="/shop?featured=true"
            className="hidden sm:inline-flex items-center gap-1.5 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}

        <div className="text-center mt-6 sm:hidden">
          <Link to="/shop" className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
