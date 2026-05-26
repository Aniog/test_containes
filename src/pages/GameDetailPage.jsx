import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Star, Clock, Users, Award } from 'lucide-react'
import { fetchGameById } from '../api/gameApi'
import { PlatformBadge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { LoadingScreen } from '../components/ui/Spinner'
import { useCart } from '../context/CartContext'

export default function GameDetailPage() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart, items } = useCart()

  useEffect(() => {
    async function load() {
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

  if (loading) return <div className="pt-20"><LoadingScreen /></div>
  if (!game) return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">🎮</div>
        <p className="text-slate-500 text-lg">Game not found</p>
        <Link to="/store"><Button className="mt-4">Back to Store</Button></Link>
      </div>
    </div>
  )

  const d = game.data
  const inCart = items.some(i => i.id === game.id)
  const price = d.sale_price || d.price
  const hasDiscount = d.discount_percent > 0

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/store" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors py-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Cover + Buy Box */}
          <div className="lg:col-span-1 space-y-5">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={d.cover_image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80'}
                alt={d.title}
                className="w-full aspect-[3/4] object-cover"
              />
              {hasDiscount && (
                <div className="absolute top-3 right-3 bg-gray-700 text-white text-sm font-black px-3 py-1 rounded-xl">
                  -{d.discount_percent}%
                </div>
              )}
            </div>

            {/* Buy Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              <div>
                {hasDiscount ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-slate-900">${price?.toFixed(2)}</span>
                    <span className="text-slate-400 line-through text-lg">${d.price?.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm font-bold">Save ${(d.price - price).toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-black text-slate-900">${d.price?.toFixed(2)}</span>
                )}
              </div>
              <Button
                size="lg"
                className="w-full"
                variant={inCart ? 'secondary' : 'primary'}
                onClick={() => !inCart && addToCart(game)}
                disabled={inCart}
              >
                <ShoppingCart className="w-5 h-5" />
                {inCart ? 'Added to Cart' : 'Add to Cart'}
              </Button>
              <div className="flex flex-wrap gap-2">
                {d.platform?.map(p => <PlatformBadge key={p} platform={p} />)}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {d.genre && (
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300">
                    {d.genre}
                  </span>
                )}
                {d.tags?.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl font-black text-slate-900 mb-3">{d.title}</h1>
              {d.developer && (
                <p className="text-slate-500 text-sm">by <span className="text-slate-700">{d.developer}</span></p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {d.rating && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto mb-1" />
                  <div className="text-slate-900 font-bold">{d.rating.toFixed(1)}</div>
                  <div className="text-slate-500 text-xs">Rating</div>
                </div>
              )}
              {d.release_date && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <Clock className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-slate-900 font-bold text-sm">{new Date(d.release_date).getFullYear()}</div>
                  <div className="text-slate-500 text-xs">Released</div>
                </div>
              )}
              {d.developer && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <div className="text-slate-900 font-bold text-xs line-clamp-1">{d.developer}</div>
                  <div className="text-slate-500 text-xs">Developer</div>
                </div>
              )}
              {d.genre && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <Award className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                  <div className="text-slate-900 font-bold text-sm">{d.genre}</div>
                  <div className="text-slate-500 text-xs">Genre</div>
                </div>
              )}
            </div>

            {/* Description */}
            {d.description && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-slate-900 font-bold text-lg mb-3">About This Game</h2>
                <p className="text-slate-600 leading-relaxed">{d.description}</p>
              </div>
            )}

            {/* Screenshots */}
            {d.screenshots?.length > 0 && (
              <div>
                <h2 className="text-slate-900 font-bold text-lg mb-3">Screenshots</h2>
                <div className="grid grid-cols-2 gap-3">
                  {d.screenshots.slice(0, 4).map((s, i) => (
                    <img key={i} src={s} alt={`Screenshot ${i + 1}`} className="rounded-xl w-full h-36 object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
