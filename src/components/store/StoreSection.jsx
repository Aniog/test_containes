import { useState, useEffect } from 'react';
import { ShoppingCart, Star, ShoppingBag, Search, ChevronRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import PlatformBadge from '@/components/ui/PlatformBadge.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORM_FILTERS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox', 'multi'];

const PLATFORM_GRADIENTS = {
  steam: 'from-blue-900 to-gray-900',
  epic: 'from-gray-800 to-gray-900',
  nintendo: 'from-red-900 to-gray-900',
  playstation: 'from-blue-800 to-gray-900',
  xbox: 'from-green-900 to-gray-900',
  multi: 'from-purple-900 to-gray-900',
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating?.toFixed(1)}</span>
    </div>
  );
}

function GameCard({ game, titleId, descId }) {
  const [added, setAdded] = useState(false);
  const d = game.data;
  const isFree = d.original_price === 0;
  const gradient = PLATFORM_GRADIENTS[d.platform] || 'from-gray-800 to-gray-900';

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-600/50 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        {d.cover_image_url ? (
          <img
            alt={d.title}
            src={d.cover_image_url}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {d.on_sale && d.discount_percent > 0 && (
            <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded">
              -{d.discount_percent}%
            </span>
          )}
          {isFree && (
            <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded">
              FREE
            </span>
          )}
          {d.featured && (
            <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <PlatformBadge platform={d.platform} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 id={titleId} className="text-sm font-bold text-white mb-1 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {d.title}
        </h3>
        <p id={descId} className="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">
          {d.description}
        </p>

        {/* Genre tags */}
        {d.genre && d.genre.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {d.genre.slice(0, 2).map(g => (
              <span key={g} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                {g}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        {d.rating && (
          <div className="flex items-center justify-between mb-3">
            <StarRating rating={d.rating} />
            {d.review_count > 0 && (
              <span className="text-xs text-gray-500">({d.review_count.toLocaleString()})</span>
            )}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            {isFree ? (
              <span className="text-lg font-black text-green-400">Free to Play</span>
            ) : d.on_sale && d.sale_price ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-white">${d.sale_price.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${d.original_price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-black text-white">${d.original_price.toFixed(2)}</span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-all ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {added ? 'Added!' : isFree ? 'Get Free' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreSection() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platform, setPlatform] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data: response } = await client
        .from('Store Games')
        .select('*')
        .order('featured', { ascending: false })
        .range(0, 23);
      setGames(response?.data?.list ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = games.filter(g => {
    const matchPlatform = platform === 'all' || g.data.platform === platform;
    const matchSearch = !search || g.data.title.toLowerCase().includes(search.toLowerCase());
    return matchPlatform && matchSearch;
  });

  return (
    <section id="store" className="py-20 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
              <ShoppingBag className="w-4 h-4" />
              GAME STORE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Buy Games Here
            </h2>
            <p className="text-gray-400 mt-2">Best prices, instant delivery</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm pl-10 pr-4 py-2.5 rounded-xl w-64 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Platform filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PLATFORM_FILTERS.map(p => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl capitalize transition-all ${
                platform === p
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/30'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {p === 'all' ? 'All Platforms' : p === 'multi' ? 'Multi-Platform' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl h-80 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No games found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filtered.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                titleId={`store-title-${game.id}`}
                descId={`store-desc-${game.id}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 font-semibold px-6 py-3 rounded-xl transition-all">
            <ShoppingBag className="w-4 h-4" />
            Browse Full Catalog
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
