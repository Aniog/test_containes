import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, ShoppingBag, BookOpen, Calendar, Hash } from 'lucide-react'
import { fetchBookById } from '../api/books'
import { useCart } from '../context/CartContext'

export default function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    fetchBookById(id)
      .then(b => {
        console.log('[BookDetail] loaded:', b?.data?.title)
        setBook(b)
      })
      .catch(err => {
        console.error('[BookDetail] error:', err)
        navigate('/books')
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  const handleAddToCart = () => {
    addItem(book)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="animate-pulse flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-64 aspect-[3/4] bg-muted rounded-xl flex-shrink-0" />
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-4 bg-muted rounded w-1/4" />
              <div className="h-24 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!book) return null

  const d = book.data ?? {}
  const discount = d.original_price && d.original_price > d.price
    ? Math.round((1 - d.price / d.original_price) * 100)
    : null

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 bg-transparent border-0 p-0"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* Cover */}
          <div className="flex-shrink-0 w-full md:w-56 lg:w-64">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary shadow-lg">
              {d.cover_url ? (
                <img src={d.cover_url} alt={d.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif text-4xl text-muted-foreground">{d.title?.[0]}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {d.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {d.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-secondary text-muted-foreground font-sans text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-3">
              <Link
                to={`/books?category=${d.category}`}
                className="font-sans text-xs text-accent hover:underline tracking-wide"
              >
                {d.category}
              </Link>
              {d.is_featured && (
                <span className="px-2 py-0.5 bg-primary text-primary-foreground font-sans text-xs rounded">精选</span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground leading-tight mb-2">
              {d.title}
            </h1>
            <p className="font-sans text-base text-muted-foreground mb-4">{d.author}</p>

            {/* Rating */}
            {d.rating && (
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(d.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`}
                  />
                ))}
                <span className="font-sans text-sm text-muted-foreground ml-1">{d.rating.toFixed(1)} 分</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl font-medium text-foreground">¥{d.price?.toFixed(2)}</span>
              {d.original_price && d.original_price > d.price && (
                <>
                  <span className="font-sans text-base text-muted-foreground line-through">¥{d.original_price}</span>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent font-sans text-sm rounded">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            {d.description && (
              <div className="mb-8">
                <h3 className="font-serif text-sm font-medium text-foreground mb-2 tracking-wide">内容简介</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{d.description}</p>
              </div>
            )}

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-3 mb-8 p-4 bg-secondary/40 rounded-xl">
              {d.publisher && (
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-sans text-xs text-muted-foreground">{d.publisher}</span>
                </div>
              )}
              {d.publish_date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-sans text-xs text-muted-foreground">{d.publish_date}</span>
                </div>
              )}
              {d.pages && (
                <div className="flex items-center gap-2">
                  <Hash className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-sans text-xs text-muted-foreground">{d.pages} 页</span>
                </div>
              )}
              {d.isbn && (
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs text-muted-foreground font-medium">ISBN</span>
                  <span className="font-sans text-xs text-muted-foreground">{d.isbn}</span>
                </div>
              )}
            </div>

            {/* Stock */}
            <p className="font-sans text-xs text-muted-foreground mb-4">
              {d.stock > 10 ? '库存充足' : d.stock > 0 ? `仅剩 ${d.stock} 本` : '暂时缺货'}
            </p>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={d.stock === 0}
              className={`inline-flex items-center gap-2 px-8 py-3.5 font-sans text-sm tracking-widest rounded-lg transition-all border-0 ${
                added
                  ? 'bg-green-600 text-white'
                  : d.stock === 0
                  ? 'bg-muted text-muted-foreground cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? '已加入购物车 ✓' : d.stock === 0 ? '暂时缺货' : '加入购物车'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
