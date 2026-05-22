import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame } from 'lucide-react';
import { PLATFORM_DEALS, PLATFORMS } from '@/lib/mockData';
import { formatDistanceToNow } from 'date-fns';

const PLATFORM_ICONS = {
  Steam: '🎮',
  Epic: '⚡',
  Nintendo: '🎯',
  PlayStation: '🎮',
  Xbox: '🟢',
};

function DealCard({ deal }) {
  const platform = PLATFORMS[deal.platform];
  const expiresIn = formatDistanceToNow(new Date(deal.expires_at), { addSuffix: true });

  return (
    <div className="game-card bg-card border border-border rounded-xl overflow-hidden">
      {/* Cover */}
      <div className={`h-32 bg-gradient-to-br ${deal.cover_color} relative flex items-center justify-center`}>
        <span className="text-white/10 text-5xl font-black font-gaming select-none">
          {deal.game_title.slice(0, 2).toUpperCase()}
        </span>
        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          {deal.is_free ? (
            <span className="px-2 py-1 rounded-md bg-green-500 text-white text-xs font-black">FREE</span>
          ) : (
            <span className="px-2 py-1 rounded-md bg-green-500 text-white text-xs font-black">-{deal.discount_percent}%</span>
          )}
        </div>
        {/* Platform badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-bold border ${platform?.border || 'border-gray-600'} ${platform?.text || 'text-gray-300'} bg-black/50`}>
          {deal.platform}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-white font-bold text-sm mb-1 truncate">{deal.game_title}</h3>
        <p className="text-gray-500 text-xs mb-2">{deal.genre}</p>
        <div className="flex items-center justify-between">
          <div>
            {deal.is_free ? (
              <span className="text-green-400 font-black text-base">FREE</span>
            ) : (
              <>
                <span className="text-purple-400 font-black text-base">${deal.sale_price}</span>
                <span className="text-gray-600 text-xs line-through ml-1">${deal.original_price}</span>
              </>
            )}
          </div>
          <span className="flex items-center gap-1 text-gray-600 text-xs">
            <Clock className="w-3 h-3" />
            {expiresIn}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HotDeals() {
  const featured = PLATFORM_DEALS.filter(d => d.is_featured);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-6 h-6 text-orange-400" />
            <h2 className="text-3xl font-black text-white font-gaming">Hot Deals</h2>
          </div>
          <p className="text-gray-500">Best discounts across all platforms right now</p>
        </div>
        <Link to="/deals" className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
          All Deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Platform filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(PLATFORMS).map(([key, p]) => (
          <Link
            key={key}
            to={`/deals?platform=${key}`}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:opacity-80 ${p.border} ${p.text} bg-black/30`}
          >
            {p.label}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featured.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
