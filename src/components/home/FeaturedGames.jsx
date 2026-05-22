import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '@/lib/mockData';
import { useCart } from '@/context/CartContext';

function GameCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="game-card bg-card border border-border rounded-xl overflow-hidden group">
      {/* Cover */}
      <div className={`relative h-44 bg-gradient-to-br ${product.cover_color} flex items-end p-4`}>
        {product.discount_percent > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-green-500 text-white text-xs font-bold">
            -{product.discount_percent}%
          </span>
        )}
        {product.is_featured && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-purple-600 text-white text-xs font-bold">
            Featured
          </span>
        )}
        <div className="text-white/20 text-6xl font-black font-gaming absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          {product.title.slice(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">{product.title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">{product.platform}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">{product.genre}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-purple-400 font-black text-lg">${product.price}</span>
            {product.discount_percent > 0 && (
              <span className="text-gray-600 text-xs line-through ml-2">${product.original_price}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/20 border border-purple-600/30 text-purple-300 text-xs font-medium hover:bg-purple-600/40 transition-all"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedGames() {
  const featured = STORE_PRODUCTS.filter(p => p.is_featured).slice(0, 4);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-white font-gaming">Featured Games</h2>
          <p className="text-gray-500 mt-1">Hand-picked titles you'll love</p>
        </div>
        <Link to="/store" className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map(product => (
          <GameCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
