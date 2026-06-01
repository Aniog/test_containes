import { useState, useEffect, useRef, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Star, Clock, Tag, Flame } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORM_CONFIG = {
  steam: {
    label: 'Steam',
    icon: '🎮',
    accent: '#1a9fff',
    bg: 'bg-[#1b2838]',
    border: 'border-[#2a475e]',
    badge: 'bg-[#1b2838] text-[#66c0f4] border border-[#2a475e]',
    activeBg: 'bg-[#1a9fff]',
  },
  epic: {
    label: 'Epic Games',
    icon: '⚡',
    accent: '#ffffff',
    bg: 'bg-[#2d2d2d]',
    border: 'border-[#444]',
    badge: 'bg-[#2d2d2d] text-white border border-[#555]',
    activeBg: 'bg-[#333]',
  },
  nintendo: {
    label: 'Nintendo',
    icon: '🎯',
    accent: '#ff4444',
    bg: 'bg-red-950/50',
    border: 'border-red-800/40',
    badge: 'bg-red-900/50 text-red-300 border border-red-700/50',
    activeBg: 'bg-red-600',
  },
  playstation: {
    label: 'PlayStation',
    icon: '🎮',
    accent: '#0070d1',
    bg: 'bg-blue-950/50',
    border: 'border-blue-800/40',
    badge: 'bg-blue-900/50 text-blue-300 border border-blue-700/50',
    activeBg: 'bg-blue-600',
  },
  xbox: {
    label: 'Xbox',
    icon: '🟢',
    accent: '#107c10',
    bg: 'bg-green-950/50',
    border: 'border-green-800/40',
    badge: 'bg-green-900/50 text-green-300 border border-green-700/50',
    activeBg: 'bg-green-600',
  },
};

const PLATFORM_FILTERS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox'];

const dealImgIds = {
  1982: { imgId: 'deal-img-1982-aa1bb2', titleId: 'deal-title-1982' },
  1983: { imgId: 'deal-img-1983-cc3dd4', titleId: 'deal-title-1983' },
  1984: { imgId: 'deal-img-1984-ee5ff6', titleId: 'deal-title-1984' },
  1985: { imgId: 'deal-img-1985-gg7hh8', titleId: 'deal-title-1985' },
  1986: { imgId: 'deal-img-1986-ii9jj0', titleId: 'deal-title-1986' },
  1987: { imgId: 'deal-img-1987-kk1ll2', titleId: 'deal-title-1987' },
  1988: { imgId: 'deal-img-1988-mm3nn4', titleId: 'deal-title-1988' },
  1989: { imgId: 'deal-img-1989-oo5pp6', titleId: 'deal-title-1989' },
  1990: { imgId: 'deal-img-1990-qq7rr8', titleId: 'deal-title-1990' },
  1991: { imgId: 'deal-img-1991-ss9tt0', titleId: 'deal-title-1991' },
};

function getFallbackDealMeta(id, index) {
  const suffix = ['uu1vv2', 'ww3xx4', 'yy5zz6', 'ab7cd8', 'ef9gh0', 'ij1kl2'][index % 6];
  return { imgId: `deal-img-${id}-${suffix}`, titleId: `deal-title-${id}` };
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-3 h-3 ${i <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-[#2a475e]'}`} />
      ))}
      <span className="text-[#8f98a0] text-xs ml-1">{rating?.toFixed(1)}</span>
    </div>
  );
}

export default function DealsSection() {
  const containerRef = useRef(null);
  const [deals, setDeals] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchDeals = useCallback(async () => {
    setLoading(true);
    const { data: response } = await client
      .from('Game Deals')
      .select('*')
      .order('discount_percent', { ascending: false })
      .limit(10);
    setDeals(response?.data?.list ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchDeals(); }, [fetchDeals]);

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, activeFilter]);

  const filtered = activeFilter === 'all'
    ? deals
    : deals.filter((d) => d.data?.platform === activeFilter);

  return (
    <section id="deals" className="py-20 px-4 md:px-8 bg-[#0f1923]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-[#1a9fff] text-sm font-semibold uppercase tracking-widest">Hot Deals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Game Discounts Across All Stores</h2>
          <p className="text-[#8f98a0] mt-2 max-w-xl">
            The best deals right now on Steam, Epic Games, Nintendo, PlayStation, and Xbox stores.
          </p>
        </div>

        {/* Platform filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PLATFORM_FILTERS.map((key) => {
            const cfg = PLATFORM_CONFIG[key];
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  isActive
                    ? 'bg-[#1a9fff] border-[#1a9fff] text-white'
                    : 'border-[#2a475e] text-[#8f98a0] hover:text-white hover:border-[#1a9fff]'
                }`}
              >
                {key === 'all' ? 'All Stores' : cfg.label}
              </button>
            );
          })}
        </div>

        {/* Deals grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-[#16202d] border border-[#2a475e] rounded-xl overflow-hidden animate-pulse">
                <div className="h-40 bg-[#2a475e]" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-[#2a475e] rounded w-1/3" />
                  <div className="h-4 bg-[#2a475e] rounded w-3/4" />
                  <div className="h-3 bg-[#2a475e] rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-[#8f98a0]">No deals found for this platform.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((deal, index) => {
              const d = deal.data ?? {};
              const cfg = PLATFORM_CONFIG[d.platform] ?? PLATFORM_CONFIG.steam;
              const meta = dealImgIds[deal.id] ?? getFallbackDealMeta(deal.id, index);
              const savings = d.original_price - d.sale_price;

              return (
                <div
                  key={deal.id}
                  className={`bg-[#16202d] border rounded-xl overflow-hidden hover:border-[#1a9fff] transition-all duration-300 group cursor-pointer ${cfg.border}`}
                >
                  {/* Game image */}
                  <div className="relative overflow-hidden">
                    <img
                      alt={d.game_title}
                      data-strk-img-id={meta.imgId}
                      data-strk-img={`[${meta.titleId}] ${d.genre ?? ''}`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#1b2838]"
                    />
                    {/* Discount badge */}
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-sm font-black px-2 py-1 rounded-lg shadow-lg">
                      -{d.discount_percent}%
                    </div>
                    {/* Free badge */}
                    {d.is_free && (
                      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded-lg shadow-lg uppercase tracking-wide">
                        Free!
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    {/* Platform + genre */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cfg.badge}`}>
                        {cfg.label}
                      </span>
                      {d.genre && (
                        <span className="flex items-center gap-1 text-[#8f98a0] text-xs">
                          <Tag className="w-3 h-3" />{d.genre}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 id={meta.titleId} className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-[#66c0f4] transition">
                      {d.game_title}
                    </h3>

                    {/* Rating */}
                    {d.rating && <div className="mb-3"><StarRating rating={d.rating} /></div>}

                    {/* Price block */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[#8f98a0] text-xs line-through">${d.original_price?.toFixed(2)}</div>
                        <div className={`text-lg font-black ${d.is_free ? 'text-yellow-400' : 'text-green-400'}`}>
                          {d.is_free ? 'FREE' : `$${d.sale_price?.toFixed(2)}`}
                        </div>
                        {!d.is_free && (
                          <div className="text-green-500 text-xs font-medium">Save ${savings.toFixed(2)}</div>
                        )}
                      </div>
                      {d.sale_end_date && (
                        <div className="flex items-center gap-1 text-[#8f98a0] text-xs">
                          <Clock className="w-3 h-3" />
                          <span>Ends {d.sale_end_date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
