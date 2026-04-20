import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Tag } from 'lucide-react'
import { Card, Badge, Button, Skeleton } from '@/components/ui/index'
import { PLATFORM_BADGE_VARIANTS } from '@/lib/constants'

function GameCard({ game, onAddToCart }) {
  const d = game.data
  const hasDiscount = d.discount_percent > 0
  const displayPrice = hasDiscount ? d.sale_price : d.price

  return (
    <Card className="group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'}
          alt={d.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{d.discount_percent}%
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant={PLATFORM_BADGE_VARIANTS[d.platform] || 'secondary'}>{d.platform}</Badge>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2">{d.title}</h3>
        <p className="text-gray-500 text-xs mb-3">{d.genre}</p>
        {d.rating && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">{d.rating.toFixed(1)}</span>
          </div>
        )}
        <div className="mt-auto flex items-center justify-between gap-2">
          <div>
            {hasDiscount ? (
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">${displayPrice?.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">${d.price?.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-white font-bold">${d.price?.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" onClick={() => onAddToCart(game)} className="shrink-0">
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function FeaturedGames({ games, loading, onAddToCart }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Games</h2>
            <p className="text-gray-500 mt-1">Top picks from our store</p>
          </div>
          <Link to="/store" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors">
            View all <Tag className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full rounded-none" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-8 w-full mt-4" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
