import { useState, useMemo } from 'react';
import { Star, ShoppingCart, Filter, ChevronDown } from 'lucide-react';
import { DEALS, PLATFORMS } from '../lib/data';

const PlatformBadge = ({ platform }) => {
  const p = PLATFORMS[platform];
  if (!p) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full border ${p.color} ${p.textColor} ${p.borderColor}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
      {p.name}
    </span>
  );
};

const DealCard = ({ deal, onAddToCart }) => (
  <div className="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group flex flex-col">
    <div className="relative h-44 bg-gradient-to-br from-[#22222f] to-[#1a1a24] flex items-center justify-center">
      <div className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">🎮</div>
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        -{deal.discount}%
      </div>
      <div className="absolute top-3 right-3">
        <PlatformBadge platform={deal.platform} />
      </div>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-slate-100 font-semibold text-sm leading-tight mb-1 line-clamp-2">{deal.title}</h3>
      <div className="flex items-center gap-1 mb-3">
        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        <span className="text-xs text-slate-400">{deal.rating}</span>
        <span className="text-xs text-slate-600 ml-1">• {deal.genre}</span>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="text-slate-500 text-xs line-through">${deal.originalPrice}</span>
          <div className="text-cyan-400 font-bold text-xl">${deal.salePrice}</div>
        </div>
        <button
          onClick={() => onAddToCart && onAddToCart(deal)}
          className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add
        </button>
      </div>
    </div>
  </div>
);

const Deals = ({ onAddToCart }) => {
  const [activePlatform, setActivePlatform] = useState('all');
  const [sortBy, setSortBy] = useState('discount');

  const filtered = useMemo(() => {
    let list = activePlatform === 'all' ? DEALS : DEALS.filter(d => d.platform === activePlatform);
    if (sortBy === 'discount') list = [...list].sort((a, b) => b.discount - a.discount);
    else if (sortBy === 'price') list = [...list].sort((a, b) => a.salePrice - b.salePrice);
    else if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activePlatform, sortBy]);

  const platformFilters = [
    { key: 'all', label: 'All Platforms' },
    ...Object.entries(PLATFORMS).map(([key, val]) => ({ key, label: val.name })),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight mb-2">🔥 Game Deals</h1>
        <p className="text-slate-400">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {platformFilters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActivePlatform(key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePlatform === key
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#1a1a24] text-slate-400 border border-[#2d2d3d] hover:text-slate-100 hover:border-violet-500/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="sm:ml-auto flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-[#1a1a24] border border-[#2d2d3d] text-slate-100 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-violet-500"
          >
            <option value="discount">Biggest Discount</option>
            <option value="price">Lowest Price</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">{filtered.length} deals found</p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(deal => (
          <DealCard key={deal.id} deal={deal} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
