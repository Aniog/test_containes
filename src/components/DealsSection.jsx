import { Star, Clock, ArrowRight, Tag, Zap } from 'lucide-react';
import { DEALS } from '../data/gameData';

const platformBadgeStyle = {
  steam: 'bg-blue-50 text-[#1b6fa8] border border-[#1b6fa8]/30',
  epic: 'bg-blue-50 text-[#0060c0] border border-[#0060c0]/30',
  nintendo: 'bg-red-50 text-[#c0000d] border border-[#c0000d]/30',
  playstation: 'bg-blue-50 text-[#0058a8] border border-[#0058a8]/30',
  xbox: 'bg-green-50 text-[#107c10] border border-[#107c10]/30',
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
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100/60 cursor-pointer">
      <div className="relative overflow-hidden h-36">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-lg ${discountColor(deal.discount)}`}>
          {discountLabel}
        </div>
        {deal.featured && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
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

        <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2 line-clamp-1 group-hover:text-green-700 transition-colors">
          {deal.title}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(deal.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-gray-500 text-xs ml-1">{deal.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-green-600 font-bold text-base">
                {deal.gamepass ? 'With Game Pass' : 'FREE'}
              </span>
            ) : (
              <>
                <span className="text-gray-900 font-bold text-base">${deal.salePrice}</span>
                <span className="text-gray-400 text-xs line-through">${deal.originalPrice}</span>
              </>
            )}
          </div>
          {deal.endDate && (
            <div className="flex items-center gap-1 text-gray-400 text-xs">
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
          <h2 className="text-gray-900 text-xl font-bold flex items-center gap-2">
            <Tag className="w-5 h-5 text-green-600" />
            Deals & Discounts
          </h2>
          <p className="text-gray-500 text-sm mt-0.5">{filtered.length} deals available</p>
        </div>
        <button className="text-green-600 text-sm font-medium flex items-center gap-1 hover:text-green-700 transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No deals found</p>
          <p className="text-sm mt-1">Try a different platform or search term</p>
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="mb-6">
              <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-green-600" /> Featured Deals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featured.map(deal => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          )}

          {regular.length > 0 && (
            <div>
              {featured.length > 0 && (
                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
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
