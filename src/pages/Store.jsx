import { useState, useEffect, useRef } from 'react';
import { Search, Star, ShoppingCart, Heart, Filter, ChevronDown, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { storeGames } from '@/data/gameData';

const GENRES = ['All', 'RPG', 'Action', 'Action RPG', 'Horror', 'Metroidvania', 'Roguelike', 'Racing', 'FPS'];
const PLATFORMS_FILTER = ['All', 'PC', 'PS5', 'Xbox', 'Switch'];
const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const BADGE_COLORS = {
  'Best Seller': 'bg-amber-500 text-white',
  'Top Rated': 'bg-cyan-500 text-white',
  'GOTY': 'bg-violet-600 text-white',
  'New': 'bg-green-500 text-white',
  'Early Access': 'bg-orange-500 text-white',
};

function GameCard({ game }) {
  const containerRef = useRef(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-strk-img-id={`store-img-${game.id}`}
          data-strk-img={`[store-desc-${game.id}] [store-title-${game.id}] game cover art`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="300"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {game.badge && (
          <div className="absolute top-2 left-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${BADGE_COLORS[game.badge] || 'bg-gray-600 text-white'}`}>
              {game.badge}
            </span>
          </div>
        )}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-black/70"
        >
          <Heart className={`w-4 h-4 transition-colors ${wishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-violet-400 font-medium">{game.genre}</span>
        <h3 id={`store-title-${game.id}`} className="text-white font-semibold mt-1 mb-1 line-clamp-2 leading-snug flex-1">
          {game.title}
        </h3>
        <p id={`store-desc-${game.id}`} className="text-gray-500 text-xs line-clamp-2 mb-3">
          {game.description}
        </p>

        {/* Platforms */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.platform.map((p) => (
            <span key={p} className="text-xs bg-[#1e1e2a] text-gray-400 px-1.5 py-0.5 rounded border border-[#2a2a3a]">
              {p}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${star <= Math.round(game.rating) ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs">{game.rating} ({game.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-cyan-400 font-bold text-xl">${game.price}</span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 font-semibold px-4 py-2 rounded-lg text-sm transition-all ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-violet-600 hover:bg-violet-500 text-white'
            }`}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Added</>
            ) : (
              <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Store() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [sort, setSort] = useState('popular');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = storeGames
    .filter((g) => {
      const matchGenre = genre === 'All' || g.genre === genre;
      const matchPlatform = platform === 'All' || g.platform.includes(platform);
      const matchSearch =
        !search ||
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.genre.toLowerCase().includes(search.toLowerCase());
      return matchGenre && matchPlatform && matchSearch;
    })
    .sort((a, b) => {
      if (sort === 'popular') return b.reviews - a.reviews;
      if (sort === 'price_asc') return a.price - b.price;
      if (sort === 'price_desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🛒 Game Store</h1>
        <p className="text-gray-400">Buy games directly — instant digital delivery</p>
      </div>

      {/* Search & Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-4 py-2.5 flex-1">
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white placeholder-gray-500 outline-none text-sm flex-1"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] text-gray-300 hover:text-white rounded-lg px-4 py-2.5 text-sm transition-colors"
        >
          <Filter className="w-4 h-4" />
          Filters
          {(genre !== 'All' || platform !== 'All') && (
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
          )}
        </button>
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] text-gray-300 hover:text-white rounded-lg px-4 py-2.5 text-sm transition-colors whitespace-nowrap"
          >
            {sortLabel}
            <ChevronDown className="w-4 h-4" />
          </button>
          {showSortMenu && (
            <div className="absolute right-0 top-full mt-1 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg overflow-hidden z-10 min-w-[180px]">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setSort(opt.value); setShowSortMenu(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    sort === opt.value
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-[#2a2a3a]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-[#16161d] border border-[#2a2a3a] rounded-xl p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Genre</h4>
              <div className="flex flex-wrap gap-2">
                {GENRES.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      genre === g
                        ? 'bg-violet-600 text-white'
                        : 'bg-[#1e1e2a] text-gray-400 hover:text-white border border-[#2a2a3a]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Platform</h4>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS_FILTER.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      platform === p
                        ? 'bg-violet-600 text-white'
                        : 'bg-[#1e1e2a] text-gray-400 hover:text-white border border-[#2a2a3a]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-5">
        Showing <span className="text-white font-medium">{filtered.length}</span> games
      </p>

      {/* Games Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No games found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-16 border-t border-[#2a2a3a] pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🔒', title: 'Secure Checkout', desc: 'SSL encrypted payments' },
            { icon: '⚡', title: 'Instant Delivery', desc: 'Digital keys delivered instantly' },
            { icon: '🔄', title: 'Easy Refunds', desc: '14-day refund policy' },
            { icon: '🎮', title: '10,000+ Games', desc: 'Massive catalog available' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{icon}</span>
              <h4 className="text-white font-semibold text-sm">{title}</h4>
              <p className="text-gray-500 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
