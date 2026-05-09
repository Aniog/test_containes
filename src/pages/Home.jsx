import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Zap, Star, Clock, Calendar, Flame } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PlatformStats from '../components/PlatformStats';
import { DEALS, NEWS } from '../data/gameData';

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

function HomeDealCard({ deal }) {
  const isFree = deal.free || deal.gamepass;
  const discountLabel = deal.gamepass ? 'Game Pass' : deal.free ? 'FREE' : `-${deal.discount}%`;

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100/60 cursor-pointer">
      <div className="relative overflow-hidden h-36">
        <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-lg ${discountColor(deal.discount)}`}>
          {discountLabel}
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
          <Zap className="w-3 h-3" /> Featured
        </div>
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
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(deal.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="text-gray-500 text-xs ml-1">{deal.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-green-600 font-bold text-base">{deal.gamepass ? 'With Game Pass' : 'FREE'}</span>
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

function HomeNewsCard({ item }) {
  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100/60 hover:border-green-300">
      <div className="relative overflow-hidden h-44">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {item.hot && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Flame className="w-3 h-3" /> HOT
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${platformBadgeStyle[item.platform]}`}>
            {platformLabel[item.platform]}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.tag}</span>
        </div>
        <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{item.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </div>
          <span className="text-green-600 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const featuredDeals = DEALS.filter(d => d.featured).slice(0, 3);
  const latestNews = NEWS.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <HeroSection activePlatform="all" />

      {/* Platform Stats */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900 text-xl font-bold">Platform Overview</h2>
        </div>
        <PlatformStats activePlatform="all" onPlatformChange={() => {}} />
      </section>

      {/* Featured Deals Preview */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-gray-900 text-xl font-bold flex items-center gap-2">
              <Tag className="w-5 h-5 text-green-600" />
              Featured Deals
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">Top discounts right now</p>
          </div>
          <Link
            to="/deals"
            className="text-green-600 text-sm font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
          >
            View All Deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredDeals.map(deal => (
            <HomeDealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Latest News Preview */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-gray-900 text-xl font-bold">Latest News</h2>
            <p className="text-gray-500 text-sm mt-0.5">What's happening in gaming</p>
          </div>
          <Link
            to="/news"
            className="text-green-600 text-sm font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map(item => (
            <HomeNewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
