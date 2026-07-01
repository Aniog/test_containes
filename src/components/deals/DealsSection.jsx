import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ExternalLink, Tag } from 'lucide-react';

const platforms = [
  { id: 'all', label: 'All Platforms', color: 'text-game-purple', bg: 'bg-game-purple' },
  { id: 'steam', label: 'Steam', color: 'text-[#66c0f4]', bg: 'bg-[#1b2838]' },
  { id: 'epic', label: 'Epic Games', color: 'text-white', bg: 'bg-[#2d2d2d]' },
  { id: 'nintendo', label: 'Nintendo', color: 'text-white', bg: 'bg-[#e4000f]' },
  { id: 'playstation', label: 'PlayStation', color: 'text-white', bg: 'bg-[#003087]' },
  { id: 'xbox', label: 'Xbox', color: 'text-white', bg: 'bg-[#107c10]' },
];

const deals = [
  {
    id: 'deal-1', platform: 'steam', platformLabel: 'Steam',
    platformColor: 'bg-[#1b2838] text-[#66c0f4]',
    title: 'Cyberpunk 2077', genre: 'RPG / Open World',
    originalPrice: 59.99, salePrice: 17.99, discount: 70,
    rating: 4.5, endDate: '2026-07-10',
    titleId: 'deal-1-title', descId: 'deal-1-desc',
    imgId: 'deal-img-1-a1b2c3',
    desc: 'Open world action RPG set in a dystopian future megacity',
  },
  {
    id: 'deal-2', platform: 'epic', platformLabel: 'Epic Games',
    platformColor: 'bg-[#2d2d2d] text-white',
    title: 'Fortnite Crew Pack', genre: 'Battle Royale',
    originalPrice: 24.99, salePrice: 9.99, discount: 60,
    rating: 4.2, endDate: '2026-07-08',
    titleId: 'deal-2-title', descId: 'deal-2-desc',
    imgId: 'deal-img-2-d4e5f6',
    desc: 'Monthly subscription with exclusive skins and V-Bucks',
  },
  {
    id: 'deal-3', platform: 'nintendo', platformLabel: 'Nintendo',
    platformColor: 'bg-[#e4000f] text-white',
    title: 'The Legend of Zelda: TOTK', genre: 'Action Adventure',
    originalPrice: 69.99, salePrice: 41.99, discount: 40,
    rating: 4.9, endDate: '2026-07-15',
    titleId: 'deal-3-title', descId: 'deal-3-desc',
    imgId: 'deal-img-3-g7h8i9',
    desc: 'Epic adventure across the skies and lands of Hyrule',
  },
  {
    id: 'deal-4', platform: 'playstation', platformLabel: 'PlayStation',
    platformColor: 'bg-[#003087] text-white',
    title: 'God of War Ragnarök', genre: 'Action / Adventure',
    originalPrice: 69.99, salePrice: 34.99, discount: 50,
    rating: 4.8, endDate: '2026-07-12',
    titleId: 'deal-4-title', descId: 'deal-4-desc',
    imgId: 'deal-img-4-j1k2l3',
    desc: 'Kratos and Atreus journey through the Nine Realms',
  },
  {
    id: 'deal-5', platform: 'xbox', platformLabel: 'Xbox',
    platformColor: 'bg-[#107c10] text-white',
    title: 'Halo Infinite', genre: 'FPS / Shooter',
    originalPrice: 59.99, salePrice: 23.99, discount: 60,
    rating: 4.3, endDate: '2026-07-20',
    titleId: 'deal-5-title', descId: 'deal-5-desc',
    imgId: 'deal-img-5-m4n5o6',
    desc: 'Master Chief returns in an epic sci-fi shooter adventure',
  },
  {
    id: 'deal-6', platform: 'steam', platformLabel: 'Steam',
    platformColor: 'bg-[#1b2838] text-[#66c0f4]',
    title: 'Elden Ring', genre: 'Action RPG',
    originalPrice: 59.99, salePrice: 29.99, discount: 50,
    rating: 4.7, endDate: '2026-07-18',
    titleId: 'deal-6-title', descId: 'deal-6-desc',
    imgId: 'deal-img-6-p7q8r9',
    desc: 'FromSoftware\'s open world masterpiece with George R.R. Martin',
  },
];

function DealCard({ deal }) {
  const daysLeft = Math.ceil(
    (new Date(deal.endDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-game-card border border-game-border rounded-xl overflow-hidden hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40 group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          alt={deal.title}
          data-strk-img-id={deal.imgId}
          data-strk-img={`[${deal.descId}] [${deal.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 bg-game-elevated"
        />
        <span className="absolute top-2 left-2 bg-game-red text-white text-xs font-bold px-2 py-0.5 rounded-md">
          -{deal.discount}%
        </span>
        <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-md ${deal.platformColor}`}>
          {deal.platformLabel}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-game-dim text-xs font-medium uppercase tracking-wider mb-1">{deal.genre}</div>
        <h3 id={deal.titleId} className="text-game-text font-bold text-base mb-1 leading-snug">{deal.title}</h3>
        <p id={deal.descId} className="text-game-muted text-xs leading-relaxed mb-3 flex-1">{deal.desc}</p>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${i < Math.floor(deal.rating) ? 'text-game-amber' : 'text-game-dim'}`}>★</span>
          ))}
          <span className="text-game-dim text-xs ml-1">{deal.rating}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-game-text font-bold text-lg">${deal.salePrice}</span>
            <span className="text-game-dim text-sm line-through">${deal.originalPrice}</span>
          </div>
          <div className="flex items-center gap-1 text-game-amber text-xs">
            <Clock className="w-3 h-3" />
            <span>{daysLeft}d left</span>
          </div>
        </div>

        <a
          href="#store"
          className="flex items-center justify-center gap-2 bg-game-purple hover:bg-purple-500 text-white text-sm font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          <Tag className="w-3.5 h-3.5" />
          Get Deal
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
}

export default function DealsSection() {
  const [activePlatform, setActivePlatform] = useState('all');
  const containerRef = useRef(null);

  const filtered = activePlatform === 'all'
    ? deals
    : deals.filter((d) => d.platform === activePlatform);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activePlatform]);

  return (
    <section id="deals" ref={containerRef} className="py-20 px-4 md:px-8 bg-game-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-game-purple text-xs font-semibold uppercase tracking-wider mb-2">Hot Discounts</div>
            <h2 className="text-3xl md:text-4xl font-bold text-game-text tracking-tight">Platform Deals</h2>
            <p className="text-game-muted mt-2 text-sm">Best discounts across all major gaming platforms, updated daily.</p>
          </div>
          <a href="#store" className="text-game-cyan text-sm font-medium hover:text-game-purple transition-colors flex items-center gap-1 self-start md:self-auto">
            View all deals <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activePlatform === p.id
                  ? `${p.bg} text-white border-transparent`
                  : 'bg-game-card border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
