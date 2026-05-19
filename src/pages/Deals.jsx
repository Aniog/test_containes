import { useState } from 'react';
import { Clock, Star, Zap, Filter, TrendingDown, Gift } from 'lucide-react';
import { deals, platforms } from '../data/mockData';
import PlatformBadge from '../components/ui/PlatformBadge';

const platformFilters = [
  { id: 'all', name: 'All Platforms' },
  ...platforms,
];

const sortOptions = [
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const DealCard = ({ deal }) => (
  <div className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300">
    {/* Image */}
    <div className="relative h-36 bg-gradient-to-br from-surface-elevated to-surface flex items-center justify-center overflow-hidden">
      <div className="text-5xl opacity-15">🎮</div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-card/70 to-transparent" />

      {/* Discount badge */}
      <div className="absolute top-3 right-3">
        {deal.isFree ? (
          <span className="flex items-center gap-1 bg-deal text-white text-xs font-black px-2.5 py-1 rounded-lg">
            <Gift className="w-3 h-3" /> FREE
          </span>
        ) : (
          <span className="bg-deal text-white text-sm font-black px-2.5 py-1 rounded-lg">
            -{deal.discount}%
          </span>
        )}
      </div>

      <div className="absolute bottom-3 left-3">
        <PlatformBadge platform={deal.platform} />
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <h3 className="text-text-primary font-bold text-sm leading-tight group-hover:text-brand-light transition-colors line-clamp-2 mb-3">
        {deal.title}
      </h3>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1 text-yellow-400 text-xs">
          <Star className="w-3 h-3 fill-yellow-400" />
          <span className="font-semibold">{deal.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-text-muted text-xs">
          <Clock className="w-3 h-3" />
          <span>Ends in {deal.endsIn}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          {deal.isFree ? (
            <span className="text-deal font-black text-xl">Free</span>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-text-primary font-black text-xl">${deal.salePrice.toFixed(2)}</span>
              <span className="text-text-muted text-sm line-through">${deal.originalPrice.toFixed(2)}</span>
            </div>
          )}
        </div>
        <button className="bg-brand hover:bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
          {deal.isFree ? 'Claim' : 'Get Deal'}
        </button>
      </div>
    </div>
  </div>
);

const PlatformSection = ({ platformId, platformDeals }) => {
  const platformInfo = platforms.find((p) => p.id === platformId);
  if (!platformInfo || platformDeals.length === 0) return null;

  const platformIcons = {
    steam: '🎮',
    epic: '⚡',
    nintendo: '🕹️',
    playstation: '🎯',
    xbox: '🟢',
  };

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{platformIcons[platformId]}</span>
        <h2 className="text-xl font-bold text-text-primary">{platformInfo.name} Deals</h2>
        <span className="text-text-muted text-sm">({platformDeals.length} deals)</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {platformDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

const Deals = () => {
  const [activePlatform, setActivePlatform] = useState('all');
  const [sortBy, setSortBy] = useState('discount');

  const filtered = deals.filter((d) => activePlatform === 'all' || d.platform === activePlatform);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'price_asc') return a.salePrice - b.salePrice;
    if (sortBy === 'price_desc') return b.salePrice - a.salePrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const freeGames = sorted.filter((d) => d.isFree);
  const paidDeals = sorted.filter((d) => !d.isFree);

  const groupedByPlatform = platforms.reduce((acc, p) => {
    acc[p.id] = sorted.filter((d) => d.platform === p.id);
    return acc;
  }, {});

  const totalSavings = filtered.reduce((sum, d) => sum + (d.originalPrice - d.salePrice), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-7 h-7 text-brand-light" />
          <h1 className="text-3xl md:text-4xl font-black text-text-primary">Game Deals</h1>
        </div>
        <p className="text-text-muted">
          {filtered.length} deals available · Save up to ${totalSavings.toFixed(0)} total
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Total Deals', value: deals.length, icon: TrendingDown, color: 'text-brand-light' },
          { label: 'Free Games', value: deals.filter((d) => d.isFree).length, icon: Gift, color: 'text-deal' },
          { label: 'Avg. Discount', value: `${Math.round(deals.reduce((s, d) => s + d.discount, 0) / deals.length)}%`, icon: Zap, color: 'text-hot' },
          { label: 'Platforms', value: 5, icon: Filter, color: 'text-blue-400' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-surface-card border border-surface-border rounded-xl p-4 flex items-center gap-3">
            <Icon className={`w-5 h-5 ${color}`} />
            <div>
              <div className={`text-xl font-black ${color}`}>{value}</div>
              <div className="text-text-muted text-xs">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex gap-2 flex-wrap flex-1">
          {platformFilters.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePlatform === p.id
                  ? 'bg-brand text-white'
                  : 'bg-surface-card border border-surface-border text-text-secondary hover:text-text-primary hover:border-brand/40'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-surface-card border border-surface-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-brand/50 cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-surface-card">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Free games highlight */}
      {freeGames.length > 0 && activePlatform === 'all' && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-deal" />
            <h2 className="text-xl font-bold text-text-primary">Free Games Right Now</h2>
            <span className="bg-deal/20 text-deal text-xs font-bold px-2 py-0.5 rounded border border-deal/30">
              {freeGames.length} FREE
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {freeGames.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      )}

      {/* Platform sections or flat grid */}
      {activePlatform === 'all' ? (
        platforms.map((p) => (
          <PlatformSection
            key={p.id}
            platformId={p.id}
            platformDeals={groupedByPlatform[p.id].filter((d) => !d.isFree)}
          />
        ))
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}

      {sorted.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🎮</div>
          <p className="text-text-secondary text-lg font-semibold">No deals found</p>
          <p className="text-text-muted text-sm mt-1">Try a different platform filter</p>
        </div>
      )}
    </div>
  );
};

export default Deals;
