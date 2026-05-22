import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Star, Clock, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { deals, PLATFORMS } from '@/data/gameData';
import { formatDistanceToNow, parseISO } from 'date-fns';

const SORT_OPTIONS = [
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

function DealCard({ deal }) {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const platform = PLATFORMS[deal.platform];
  const savings = (deal.originalPrice - deal.salePrice).toFixed(2);
  const endsIn = formatDistanceToNow(parseISO(deal.endDate), { addSuffix: true });

  return (
    <div
      ref={containerRef}
      className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-strk-img-id={`deals-img-${deal.id}`}
          data-strk-img={`[deals-genre-${deal.id}] [deals-title-${deal.id}] game cover art`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded">
            -{deal.discount}%
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${platform.color}`}>
            {platform.name}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center gap-1 text-xs text-gray-300">
            <Clock className="w-3 h-3" />
            <span>Ends {endsIn}</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span id={`deals-genre-${deal.id}`} className="text-xs text-violet-400 font-medium">{deal.genre}</span>
        <h3 id={`deals-title-${deal.id}`} className="text-white font-semibold mt-1 mb-3 line-clamp-2 leading-snug flex-1">
          {deal.title}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-xl">${deal.salePrice}</span>
              <span className="text-gray-500 text-sm line-through">${deal.originalPrice}</span>
            </div>
            <span className="text-green-400 text-xs">Save ${savings}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span className="text-gray-300 text-sm font-medium">{deal.rating}</span>
          </div>
        </div>
        <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
          Get Deal
        </button>
      </div>
    </div>
  );
}

export default function Deals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('discount');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const activePlatform = searchParams.get('platform') || 'all';

  const setActivePlatform = (p) => {
    if (p === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ platform: p });
    }
  };

  const filtered = deals
    .filter((d) => {
      const matchPlatform = activePlatform === 'all' || d.platform === activePlatform;
      const matchSearch =
        !search ||
        d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.genre.toLowerCase().includes(search.toLowerCase());
      return matchPlatform && matchSearch;
    })
    .sort((a, b) => {
      if (sort === 'discount') return b.discount - a.discount;
      if (sort === 'price_asc') return a.salePrice - b.salePrice;
      if (sort === 'price_desc') return b.salePrice - a.salePrice;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🏷️ Game Deals</h1>
        <p className="text-gray-400">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
      </div>

      {/* Platform Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActivePlatform('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activePlatform === 'all'
              ? 'bg-violet-600 text-white'
              : 'bg-[#1e1e2a] text-gray-400 hover:text-white border border-[#2a2a3a]'
          }`}
        >
          All Platforms
        </button>
        {Object.entries(PLATFORMS).map(([key, platform]) => (
          <button
            key={key}
            onClick={() => setActivePlatform(key)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
              activePlatform === key
                ? `${platform.color} opacity-100`
                : 'bg-[#1e1e2a] text-gray-400 hover:text-white border-[#2a2a3a]'
            }`}
          >
            {platform.name}
          </button>
        ))}
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-4 py-2.5 flex-1">
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search deals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white placeholder-gray-500 outline-none text-sm flex-1"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] text-gray-300 hover:text-white rounded-lg px-4 py-2.5 text-sm transition-colors whitespace-nowrap"
          >
            <SlidersHorizontal className="w-4 h-4" />
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

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-5">
        Showing <span className="text-white font-medium">{filtered.length}</span> deals
        {activePlatform !== 'all' && (
          <span> on <span className="text-violet-400 font-medium">{PLATFORMS[activePlatform]?.name}</span></span>
        )}
      </p>

      {/* Deals Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No deals found. Try a different filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </div>
  );
}
