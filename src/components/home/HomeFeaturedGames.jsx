import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'

const PLACEHOLDER_COVERS = [
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80',
  'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&q=80',
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
]

function GameCard({ game, index, onAddToCart }) {
  const fields = game.data || game
  const imgSrc = fields.cover_image_url || PLACEHOLDER_COVERS[index % PLACEHOLDER_COVERS.length]
  const displayPrice = fields.sale_price ?? fields.price

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
      <div className="relative overflow-hidden h-44">
        <img src={imgSrc} alt={fields.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {fields.sale_price && fields.sale_price < fields.price && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            SALE
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{fields.title}</h3>
        <p className="text-gray-500 text-xs mb-2">{fields.genre}</p>
        {fields.rating > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">{Number(fields.rating).toFixed(1)}</span>
            {fields.review_count > 0 && <span className="text-gray-500 text-xs">({fields.review_count})</span>}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between">
          <div>
            {fields.sale_price && fields.sale_price < fields.price && (
              <span className="text-gray-500 text-xs line-through block">${Number(fields.price).toFixed(2)}</span>
            )}
            <span className="text-white font-bold">${Number(displayPrice).toFixed(2)}</span>
          </div>
          <button
            onClick={() => onAddToCart && onAddToCart(game)}
            className="flex items-center gap-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HomeFeaturedGames({ games = [], onAddToCart }) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Games</h2>
            <p className="text-gray-400 mt-1">Top picks from our store</p>
          </div>
          <Link to="/store" className="hidden sm:flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            Browse store <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {games.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {games.slice(0, 4).map((game, i) => (
              <GameCard key={game.id} game={game} index={i} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
