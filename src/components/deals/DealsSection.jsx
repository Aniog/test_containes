import { useState } from 'react';
import { ExternalLink, Clock, Tag } from 'lucide-react';

const PLATFORMS = [
  { id: 'all', label: 'All Platforms', color: 'text-white', bg: 'bg-violet-600' },
  { id: 'steam', label: 'Steam', color: 'text-[#66c0f4]', bg: 'bg-[#1b2838]' },
  { id: 'epic', label: 'Epic', color: 'text-white', bg: 'bg-[#2d2d2d]' },
  { id: 'nintendo', label: 'Nintendo', color: 'text-white', bg: 'bg-[#e4000f]' },
  { id: 'playstation', label: 'PlayStation', color: 'text-white', bg: 'bg-[#003087]' },
  { id: 'xbox', label: 'Xbox', color: 'text-white', bg: 'bg-[#107c10]' },
];

const PLATFORM_BADGE_STYLES = {
  steam: { bg: 'bg-[#1b2838]', text: 'text-[#66c0f4]', border: 'border-[#66c0f4]/30' },
  epic: { bg: 'bg-[#2d2d2d]', text: 'text-white', border: 'border-white/20' },
  nintendo: { bg: 'bg-[#e4000f]/20', text: 'text-red-400', border: 'border-red-500/30' },
  playstation: { bg: 'bg-[#003087]/30', text: 'text-blue-400', border: 'border-blue-500/30' },
  xbox: { bg: 'bg-[#107c10]/20', text: 'text-green-400', border: 'border-green-500/30' },
};

const DEALS = [
  {
    id: 1, platform: 'steam', game_title: 'Cyberpunk 2077', genre: 'RPG',
    original_price: 59.99, deal_price: 17.99, discount_percent: 70,
    expires_at: '2026-06-01T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 2, platform: 'epic', game_title: 'Borderlands 3', genre: 'Shooter',
    original_price: 39.99, deal_price: 7.99, discount_percent: 80,
    expires_at: '2026-05-30T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 3, platform: 'nintendo', game_title: 'Hollow Knight', genre: 'Action',
    original_price: 14.99, deal_price: 7.49, discount_percent: 50,
    expires_at: '2026-06-05T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 4, platform: 'playstation', game_title: 'God of War Ragnarök', genre: 'Action',
    original_price: 69.99, deal_price: 41.99, discount_percent: 40,
    expires_at: '2026-06-03T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 5, platform: 'xbox', game_title: 'Halo Infinite', genre: 'Shooter',
    original_price: 59.99, deal_price: 23.99, discount_percent: 60,
    expires_at: '2026-05-31T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 6, platform: 'steam', game_title: 'Elden Ring', genre: 'RPG',
    original_price: 59.99, deal_price: 35.99, discount_percent: 40,
    expires_at: '2026-06-07T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 7, platform: 'epic', game_title: 'Control Ultimate Edition', genre: 'Action',
    original_price: 39.99, deal_price: 9.99, discount_percent: 75,
    expires_at: '2026-06-02T00:00:00Z',
    cover_image_url: null,
  },
  {
    id: 8, platform: 'nintendo', game_title: 'Stardew Valley', genre: 'Simulation',
    original_price: 14.99, deal_price: 9.74, discount_percent: 35,
    expires_at: '2026-06-10T00:00:00Z',
    cover_image_url: null,
  },
];

const getDaysLeft = (expiresAt) => {
  const diff = new Date(expiresAt) - new Date();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

const PlatformBadge = ({ platform }) => {
  const style = PLATFORM_BADGE_STYLES[platform] || PLATFORM_BADGE_STYLES.steam;
  const label = PLATFORMS.find((p) => p.id === platform)?.label || platform;
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${style.bg} ${style.text} ${style.border}`}>
      {label}
    </span>
  );
};

const DealCard = ({ deal }) => {
  const daysLeft = getDaysLeft(deal.expires_at);
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl overflow-hidden hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-200 group flex flex-col">
      {/* Cover placeholder */}
      <div className="relative h-36 bg-gradient-to-br from-[#13131f] to-[#0d0d14] flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-full"
          data-strk-bg-id={`deal-bg-${deal.id}`}
          data-strk-bg={`[deal-title-${deal.id}] [deal-genre-${deal.id}] video game cover art`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="400"
        />
        {/* Discount badge */}
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-extrabold px-2 py-1 rounded-lg shadow-lg">
          -{deal.discount_percent}%
        </div>
        <div className="absolute top-2 left-2">
          <PlatformBadge platform={deal.platform} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 id={`deal-title-${deal.id}`} className="text-white font-semibold text-sm mb-1 line-clamp-1 group-hover:text-violet-300 transition-colors">
          {deal.game_title}
        </h3>
        <span id={`deal-genre-${deal.id}`} className="text-gray-500 text-xs mb-3 flex items-center gap-1">
          <Tag className="w-3 h-3" /> {deal.genre}
        </span>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-gray-500 text-xs line-through">${deal.original_price.toFixed(2)}</div>
            <div className="text-green-400 font-bold text-lg">${deal.deal_price.toFixed(2)}</div>
          </div>
          <div className="flex items-center gap-1 text-orange-400 text-xs">
            <Clock className="w-3 h-3" />
            <span>{daysLeft}d left</span>
          </div>
        </div>

        <button className="mt-3 w-full flex items-center justify-center gap-1.5 bg-[#13131f] border border-[#2a2a3e] hover:border-violet-500 hover:bg-violet-900/20 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-150">
          <ExternalLink className="w-3.5 h-3.5" />
          View Deal
        </button>
      </div>
    </div>
  );
};

const DealsSection = () => {
  const [activePlatform, setActivePlatform] = useState('all');

  const filtered = activePlatform === 'all'
    ? DEALS
    : DEALS.filter((d) => d.platform === activePlatform);

  return (
    <section id="deals" className="py-16 px-4 md:px-8 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Hot Deals</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Platform Discounts</h2>
            <p className="text-gray-500 text-sm mt-1">Best deals across all major gaming platforms</p>
          </div>
          <a href="#" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors self-start md:self-auto">
            View all deals →
          </a>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                activePlatform === p.id
                  ? `${p.bg} ${p.color} border-transparent shadow-md`
                  : 'bg-[#1a1a2e] text-gray-400 border-[#2a2a3e] hover:border-violet-500 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Deal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
