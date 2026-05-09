import { Star, Clock, ArrowRight, Tag, Zap } from 'lucide-react';
import { DEALS } from '../data/gameData';

const platformBadgeStyle = {
  steam: 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/30',
  epic: 'bg-[#0078f2]/20 text-[#60a5fa] border border-[#0078f2]/30',
  nintendo: 'bg-[#e4000f]/20 text-[#f87171] border border-[#e4000f]/30',
  playstation: 'bg-[#003087]/30 text-[#93c5fd] border border-[#0070d1]/30',
  xbox: 'bg-[#107c10]/20 text-[#4ade80] border border-[#52b043]/30',
};

const platformLabel = {
  steam: 'Steam',
  epic: 'Epic Games',
  nintendo: 'Nintendo',
  playstation: 'PlayStation',
  xbox: 'Xbox',
};

const discountColor = (pct) => {
  if (pct === 100) return 'bg-green-500 text-white';
  if (pct >= 60) return 'bg-red-500 text-white';
  if (pct >= 40) return 'bg-orange-500 text-white';
  return 'bg-yellow-500 text-gray-900';
};

function DealCard({ deal }) {
  const isFree = deal.free || deal.gamepass;
  const discountLabel = deal.gamepass ? 'Game Pass' : deal.free ? 'FREE' : `-${deal.discount}%`;

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-pointer">
      <div className="relative overflow-hidden h-36">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        {/* Discount badge */}
        <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-lg ${discountColor(deal.discount)}`}>
          {discountLabel}
        </div>
        {deal.featured && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
            <Zap className="w-3 h-3" /> Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${platformBadgeStyle[deal.platform]}`}>
            {platformLabel[deal.platform]}
          </span>
          <span className="text-xs text-gray-500">{deal.genre}</span>
        </div>

        <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-1 group-hover:text-purple-300 transition-colors">
          {deal.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(deal.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
            />
          ))}
          <span className="text-gray-400 text-xs ml-1">{deal.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-green-400 font-bold text-base">
                {deal.gamepass ? 'With Game Pass' : 'FREE'}
              </span>
            ) : (
              <>
                <span className="text-white font-bold text-base">${deal.salePrice}</span>
                <span className="text-gray-500 text-xs line-through">${deal.originalPrice}</span>
              </>
            )}
          </div>
          {deal.endDate && (
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              <span>Ends {deal.endDate}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DealsSection({ activePlatform, searchQuery }) {
  const filtered = DEALS.filter(d => {
    const matchPlatform = activePlatform === 'all' || d.platform === activePlatform;
    const matchSearch = !searchQuery ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchSearch;
  });

  const featured = filtered.filter(d => d.featured);
  const regular = filtered.filter(d => !d.featured);

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <Tag className="w-5 h-5 text-orange-400" />
            Deals & Discounts
          </h2>
          <p className="text-gray-400 text-sm mt-0.5">{filtered.length} deals available</p>
        </div>
        <button className="text-purple-400 text-sm font-medium flex items-center gap-1 hover:text-purple-300 transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg font-medium">No deals found</p>
          <p className="text-sm mt-1">Try a different platform or search term</p>
        </div>
      ) : (
        <>
          {/* Featured deals */}
          {featured.length > 0 && (
            <div className="mb-6">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-purple-400" /> Featured Deals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featured.map(deal => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          )}

          {/* Regular deals */}
          {regular.length > 0 && (
            <div>
              {featured.length > 0 && (
                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  More Deals
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {regular.map(deal => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
