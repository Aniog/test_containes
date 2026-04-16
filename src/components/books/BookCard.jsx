import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function BookCard({ book }) {
  const { addItem } = useCart()
  const d = book.data ?? {}

  const discount = d.original_price && d.original_price > d.price
    ? Math.round((1 - d.price / d.original_price) * 100)
    : null

  return (
    <div className="group flex flex-col">
      {/* Cover */}
      <Link to={`/books/${book.id}`} className="block relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
        {d.cover_url ? (
          <img
            src={d.cover_url}
            alt={d.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="font-serif text-2xl text-muted-foreground">{d.title?.[0]}</span>
          </div>
        )}
        {discount && (
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-sans rounded">
            -{discount}%
          </span>
        )}
        {d.is_featured && (
          <span className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-sans rounded">
            精选
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="mt-3 flex-1 flex flex-col">
        <Link to={`/books/${book.id}`}>
          <h3 className="font-serif text-sm font-medium text-foreground line-clamp-2 leading-snug hover:text-accent transition-colors">
            {d.title}
          </h3>
        </Link>
        <p className="font-sans text-xs text-muted-foreground mt-1">{d.author}</p>

        {d.rating && (
          <div className="flex items-center gap-1 mt-1.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-sans text-xs text-muted-foreground">{d.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-base font-medium text-foreground">¥{d.price?.toFixed(2)}</span>
            {d.original_price && d.original_price > d.price && (
              <span className="font-sans text-xs text-muted-foreground line-through">¥{d.original_price}</span>
            )}
          </div>
          <button
            onClick={() => addItem(book)}
            className="p-1.5 text-muted-foreground hover:text-accent transition-colors bg-transparent border-0"
            aria-label="加入购物车"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
