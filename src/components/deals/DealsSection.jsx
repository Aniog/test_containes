import { useState, useEffect } from 'react';
import { Zap, Clock, ExternalLink, ChevronRight, Flame } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import PlatformBadge from '@/components/ui/PlatformBadge.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORM_FILTERS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox', 'gog'];

const PLATFORM_GRADIENTS = {
  steam: 'from-blue-900 to-gray-900',
  epic: 'from-gray-800 to-gray-900',
  nintendo: 'from-red-900 to-gray-900',
  playstation: 'from-blue-800 to-gray-900',
  xbox: 'from-green-900 to-gray-900',
  gog: 'from-purple-900 to-gray-900',
};

function DealCard({ deal, titleId }) {
  const d = deal.data;
  const isFree = d.deal_price === 0;
  const expiresIn = d.expires_at
    ? formatDistanceToNow(new Date(d.expires_at), { addSuffix: true })
    : null;
  const gradient = PLATFORM_GRADIENTS[d.platform] || 'from-gray-800 to-gray-900';

  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
      {/* Discount badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className={`text-sm font-black px-2.5 py-1 rounded-lg ${isFree ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {isFree ? 'FREE' : `-${d.discount_percent}%`}
        </span>
      </div>

      {/* Featured flame */}
      {d.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Flame className="w-5 h-5 text-orange-400" />
        </div>
      )}

      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-gray-800">
        {d.cover_image_url ? (
          <img
            alt={d.game_title}
            src={d.cover_image_url}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <PlatformBadge platform={d.platform} size="xs" />
          {d.genre && (
            <span className="text-xs text-gray-500">{d.genre}</span>
          )}
        </div>

        <h3 id={titleId} className="text-sm font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {d.game_title}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-xl font-black text-green-400">FREE</span>
            ) : (
              <>
                <span className="text-xl font-black text-white">${d.deal_price.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${d.original_price.toFixed(2)}</span>
              </>
            )}
          </div>
          {expiresIn && (
            <div className="flex items-center gap-1 text-xs text-orange-400">
              <Clock className="w-3 h-3" />
              <span>Ends {expiresIn}</span>
            </div>
          )}
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-all">
          <ExternalLink className="w-3.5 h-3.5" />
          {isFree ? 'Get for Free' : 'Get Deal'}
        </button>
      </div>
    </div>
  );
}

export default function DealsSection() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platform, setPlatform] = useState('all');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data: response } = await client
        .from('Game Deals')
        .select('*')
        .order('discount_percent', { ascending: false })
        .range(0, 19);
      setDeals(response?.data?.list ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = platform === 'all'
    ? deals
    : deals.filter(d => d.data.platform === platform);

  const savings = filtered.reduce((acc, d) => {
    return acc + (d.data.original_price - d.data.deal_price);
  }, 0);

  return (
    <section id="deals" className="py-20 px-4 md:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold mb-2">
              <Zap className="w-4 h-4" />
              HOT DEALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Discounts & Offers
            </h2>
            <p className="text-gray-400 mt-2">
              Best deals across all platforms
              {filtered.length > 0 && savings > 0 && (
                <span className="ml-2 text-green-400 font-semibold">
                  — Save up to ${savings.toFixed(0)} total
                </span>
              )}
            </p>
          </div>

          {/* Platform filter */}
          <div className="flex flex-wrap gap-2">
            {PLATFORM_FILTERS.map(p => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${
                  platform === p
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {p === 'all' ? 'All Platforms' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl h-72 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Zap className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No deals found for this platform.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filtered.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                titleId={`deal-title-${deal.id}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold px-6 py-3 rounded-xl transition-all">
            <Zap className="w-4 h-4" />
            View All Deals
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

