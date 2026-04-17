import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'lucide-react'
import { PlatformBadge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { useCart } from '../../context/CartContext'

export default function GameCard({ game }) {
  const { addToCart, items } = useCart()
  const d = game.data
  const inCart = items.some(i => i.id === game.id)
  const price = d.sale_price || d.price
  const hasDiscount = d.discount_percent > 0

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col">
      <Link to={`/store/${game.id}`} className="block relative overflow-hidden">
        <img
          src={d.cover_image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80'}
          alt={d.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{d.discount_percent}%
          </div>
        )}
        {d.featured && (
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
            Featured
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {d.platform?.slice(0, 2).map(p => <PlatformBadge key={p} platform={p} />)}
          {d.platform?.length > 2 && (
            <span className="text-xs text-gray-500">+{d.platform.length - 2}</span>
          )}
        </div>

        <Link to={`/store/${game.id}`}>
          <h3 className="text-white font-semibold text-sm leading-tight hover:text-indigo-400 transition-colors line-clamp-2 mb-1">
            {d.title}
          </h3>
        </Link>

        {d.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">{d.rating.toFixed(1)}</span>
            <span className="text-gray-600 text-xs">/ 5</span>
          </div>
        )}

        <p className="text-gray-500 text-xs line-clamp-2 mb-3 flex-1">{d.short_description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            {hasDiscount ? (
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">${price?.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">${d.price?.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-white font-bold">${d.price?.toFixed(2)}</span>
            )}
          </div>
          <Button
            size="sm"
            variant={inCart ? 'secondary' : 'primary'}
            onClick={() => !inCart && addToCart(game)}
            disabled={inCart}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {inCart ? 'Added' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
