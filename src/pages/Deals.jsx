import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tag, Clock, ExternalLink, Filter, Flame, Gift } from 'lucide-react';
import { PLATFORM_DEALS, PLATFORMS } from '@/lib/mockData';
import { formatDistanceToNow } from 'date-fns';

const ALL_PLATFORMS = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox'];

const PLATFORM_STYLES = {
  Steam: { badge: 'bg-[#1b2838] border-[#1b9aaa]/50 text-[#66c0f4]', dot: 'bg-[#1b9aaa]' },
  Epic: { badge: 'bg-[#1a1a2e] border-[#0078f2]/50 text-[#0078f2]', dot: 'bg-[#0078f2]' },
  Nintendo: { badge: 'bg-[#2a0a0a] border-[#e4000f]/50 text-[#e4000f]', dot: 'bg-[#e4000f]' },
  PlayStation: { badge: 'bg-[#001a3d] border-[#0070d1]/50 text-[#0070d1]', dot: 'bg-[#0070d1]' },
  Xbox: { badge: 'bg-[#0a1f0a] border-[#52b043]/50 text-[#52b043]', dot: 'bg-[#52b043]' },
};

function DealCard({ deal }) {
  const style = PLATFORM_STYLES[deal.platform] || {};
  const expiresIn = formatDistanceToNow(new Date(deal.expires_at), { addSuffix: true });
  const savings = deal.original_price - deal.sale_price;

  return (
    <div className="game-card bg-card border border-border rounded-xl overflow-hidden flex flex-col">
      {/* Cover */}
      <div className={`h-36 bg-gradient-to-br ${deal.cover_color} relative flex items-center justify-center`}>
        <span className="text-white/10 text-5xl font-black font-gaming select-none">
          {deal.game_title.slice(0, 2).toUpperCase()}
        </span>
        {/* Discount */}
        <div className="absolute top-3 right-3">
          {deal.is_free ? (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-500 text-white text-xs font-black">
              <Gift className="w-3 h-3" /> FREE
            </span>
          ) : (
            <span className="px-2 py-1 rounded-md bg-green-500 text-white text-xs font-black">
              -{deal.discount_percent}%
            </span>
          )}
        </div>
        {/* Platform */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-bold border ${style.badge || 'border-gray-600 text-gray-300'} bg-black/60`}>
          {deal.platform}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-sm mb-1 truncate">{deal.game_title}</h3>
        <p className="text-gray-500 text-xs mb-3">{deal.genre}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-3">
          {deal.is_free ? (
            <span className="text-green-400 font-black text-xl">FREE</span>
          ) : (
            <>
              <span className="text-purple-400 font-black text-xl">${deal.sale_price}</span>
              <span className="text-gray-600 text-sm line-through mb-0.5">${deal.original_price}</span>
            </>
          )}
        </div>

        {!deal.is_free && (
          <div className="text-green-400 text-xs font-medium mb-3">
            You save ${savings.toFixed(2)}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
            <Clock className="w-3 h-3" />
            Expires {expiresIn}
          </div>
          <a
            href={deal.deal_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold border transition-all hover:opacity-80 ${style.badge || 'border-gray-600 text-gray-300'}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Get Deal on {deal.platform}
          </a>
        </div>
      </div>
    </div>
  );
}

function PlatformStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
      {Object.entries(PLATFORM_STYLES).map(([platform, style]) => {
        const count = PLATFORM_DEALS.filter(d => d.platform === platform && d.is_active).length;
        return (
          <div key={platform} className={`p-4 rounded-xl border ${style.badge} bg-black/30`}>
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-2 h-2 rounded-full ${style.dot}`} />
              <span className="font-bold text-sm">{platform}</span>
            </div>
            <div className="text-2xl font-black font-gaming">{count}</div>
            <div className="text-xs opacity-70">active deals</div>
          </div>
        );
      })}
    </div>
  );
}

export default function Deals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('discount');
  const activePlatform = searchParams.get('platform') || 'All';

  const filtered = useMemo(() => {
    let deals = PLATFORM_DEALS.filter(d => d.is_active);
    if (activePlatform !== 'All') {
      deals = deals.filter(d => d.platform === activePlatform);
    }
    if (sortBy === 'discount') deals = [...deals].sort((a, b) => b.discount_percent - a.discount_percent);
    else if (sortBy === 'price') deals = [...deals].sort((a, b) => a.sale_price - b.sale_price);
    else if (sortBy === 'expiry') deals = [...deals].sort((a, b) => new Date(a.expires_at) - new Date(b.expires_at));
    return deals;
  }, [activePlatform, sortBy]);

  const freeGames = filtered.filter(d => d.is_free);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#080812] border-b border-purple-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-8 h-8 text-orange-400" />
            <h1 className="text-4xl font-black text-white font-gaming">Platform Deals</h1>
          </div>
          <p className="text-gray-400">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Platform Stats */}
        <PlatformStats />

        {/* Free Games Banner */}
        {freeGames.length > 0 && activePlatform === 'All' && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-bold text-white font-gaming">Free Right Now</h2>
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">{freeGames.length} games</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeGames.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {ALL_PLATFORMS.map(p => (
              <button
                key={p}
                onClick={() => setSearchParams(p === 'All' ? {} : { platform: p })}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activePlatform === p
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500/50"
            >
              <option value="discount" className="bg-gray-900">Biggest Discount</option>
              <option value="price" className="bg-gray-900">Lowest Price</option>
              <option value="expiry" className="bg-gray-900">Expiring Soon</option>
            </select>
          </div>
        </div>

        {/* Deals Grid */}
        {filtered.filter(d => !d.is_free || activePlatform !== 'All').length === 0 ? (
          <div className="text-center py-20">
            <Tag className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">No deals found</p>
            <p className="text-gray-600 text-sm mt-1">Try a different platform filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.filter(d => activePlatform !== 'All' || !d.is_free).map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
