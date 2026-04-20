import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingCart, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

const PLATFORM_BADGE = {
  PC: 'secondary',
  PlayStation: 'playstation',
  Xbox: 'xbox',
  'Nintendo Switch': 'nintendo',
  Mobile: 'secondary',
}

function GameCard({ game }) {
  const { addToCart, isInCart } = useCart()
  const d = game.data
  const inCart = isInCart(game.id)
  const onSale = d.sale_price && d.sale_price < d.price

  return (
    <Card className="flex flex-col hover:border-indigo-500/50 transition-colors group">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {onSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
        {d.featured && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {(d.platform || []).slice(0, 2).map(p => (
            <Badge key={p} variant={PLATFORM_BADGE[p] || 'secondary'}>{p}</Badge>
          ))}
        </div>
        <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2">{d.title}</h3>
        <p className="text-gray-400 text-xs mb-3 line-clamp-2 flex-1">{d.description}</p>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-400 text-xs font-medium">{d.rating?.toFixed(1)}</span>
          <span className="text-gray-500 text-xs">({(d.review_count || 0).toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {onSale ? (
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">${d.sale_price.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">${d.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-white font-bold">${d.price.toFixed(2)}</span>
            )}
          </div>
          <Button
            size="sm"
            variant={inCart ? 'success' : 'default'}
            onClick={() => addToCart(game)}
            disabled={inCart}
          >
            {inCart ? <><Check className="w-3.5 h-3.5" /> Added</> : <><ShoppingCart className="w-3.5 h-3.5" /> Add</>}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function FeaturedGames({ games, loading }) {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Featured Games</h2>
          <p className="text-gray-400 text-sm mt-1">Hand-picked titles you'll love</p>
        </div>
        <Link to="/store" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      )}
    </section>
  )
}
