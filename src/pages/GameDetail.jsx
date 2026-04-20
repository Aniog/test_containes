import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, ShoppingCart, Check, Calendar, User, Tag } from 'lucide-react'
import { fetchGameById } from '@/api/gamesite'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { format } from 'date-fns'

const PLATFORM_BADGE = {
  PC: 'secondary', PlayStation: 'playstation', Xbox: 'xbox', 'Nintendo Switch': 'nintendo', Mobile: 'secondary',
}

export default function GameDetail() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart, isInCart } = useCart()

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const data = await fetchGameById(id)
        setGame(data)
      } catch (err) {
        console.error('Failed to load game:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-gray-800 rounded-xl h-80 animate-pulse mb-6" />
        <div className="space-y-3">
          <div className="bg-gray-800 rounded h-10 w-2/3 animate-pulse" />
          <div className="bg-gray-800 rounded h-4 w-full animate-pulse" />
        </div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-400 text-lg">Game not found.</p>
        <Link to="/store" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">← Back to Store</Link>
      </div>
    )
  }

  const d = game.data
  const inCart = isInCart(game.id)
  const onSale = d.sale_price && d.sale_price < d.price
  const displayPrice = onSale ? d.sale_price : d.price

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/store" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Cover */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden aspect-video lg:aspect-[3/4]">
            <img
              src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80'}
              alt={d.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {(d.platform || []).map(p => (
              <Badge key={p} variant={PLATFORM_BADGE[p] || 'secondary'}>{p}</Badge>
            ))}
            {(d.genre || []).map(g => (
              <Badge key={g} variant="outline">{g}</Badge>
            ))}
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-3">{d.title}</h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(d.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                />
              ))}
              <span className="text-yellow-400 font-bold ml-1">{d.rating?.toFixed(1)}</span>
            </div>
            <span className="text-gray-500 text-sm">({(d.review_count || 0).toLocaleString()} reviews)</span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{d.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            {d.developer && (
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1 flex items-center gap-1"><User className="w-3 h-3" /> Developer</p>
                <p className="text-white font-medium">{d.developer}</p>
              </div>
            )}
            {d.publisher && (
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Tag className="w-3 h-3" /> Publisher</p>
                <p className="text-white font-medium">{d.publisher}</p>
              </div>
            )}
            {d.release_date && (
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Release Date</p>
                <p className="text-white font-medium">{format(new Date(d.release_date), 'MMMM d, yyyy')}</p>
              </div>
            )}
            {d.age_rating && (
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1">Age Rating</p>
                <p className="text-white font-medium">{d.age_rating}</p>
              </div>
            )}
          </div>

          {d.tags && d.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {d.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          )}

          {/* Price & Buy */}
          <div className="bg-gray-800 rounded-xl p-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-extrabold text-white">${displayPrice?.toFixed(2)}</span>
              {onSale && (
                <>
                  <span className="text-gray-500 text-lg line-through">${d.price?.toFixed(2)}</span>
                  <span className="bg-red-500 text-white text-sm font-bold px-2 py-0.5 rounded">
                    -{Math.round(((d.price - d.sale_price) / d.price) * 100)}%
                  </span>
                </>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                variant={inCart ? 'success' : 'default'}
                onClick={() => addToCart(game)}
                disabled={inCart}
                className="flex-1"
              >
                {inCart
                  ? <><Check className="w-5 h-5" /> Added to Cart</>
                  : <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
                }
              </Button>
            </div>
            {!d.in_stock && (
              <p className="text-red-400 text-sm mt-2">Currently out of stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
