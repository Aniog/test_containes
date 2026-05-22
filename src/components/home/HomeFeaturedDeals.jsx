import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { deals, PLATFORMS } from '@/data/gameData';

function DealCard({ deal }) {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const platform = PLATFORMS[deal.platform];

  return (
    <div
      ref={containerRef}
      className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-strk-img-id={`deal-img-${deal.id}-home`}
          data-strk-img={`[deal-title-${deal.id}] [deal-genre-${deal.id}] game cover art`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded">
            -{deal.discount}%
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${platform.color}`}>
            {platform.name}
          </span>
        </div>
      </div>
      <div className="p-4">
        <span id={`deal-genre-${deal.id}`} className="text-xs text-violet-400 font-medium">{deal.genre}</span>
        <h3 id={`deal-title-${deal.id}`} className="text-white font-semibold mt-1 mb-2 line-clamp-1">{deal.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold text-lg">${deal.salePrice}</span>
            <span className="text-gray-500 text-sm line-through">${deal.originalPrice}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs text-gray-400">{deal.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeFeaturedDeals() {
  const featuredDeals = deals.filter((d) => d.featured).slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">🔥 Hot Deals</h2>
          <p className="text-gray-400 text-sm mt-1">Best discounts across all platforms right now</p>
        </div>
        <Link
          to="/deals"
          className="flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featuredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
