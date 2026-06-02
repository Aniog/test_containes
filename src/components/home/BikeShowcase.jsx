import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export const bikes = [
  {
    id: 'trail-x1',
    name: 'Trail X1',
    category: 'Mountain',
    price: '$2,499',
    description: 'Conquer any trail with full suspension and aggressive geometry.',
    badge: 'Best Seller',
  },
  {
    id: 'aero-r5',
    name: 'Aero R5',
    category: 'Road',
    price: '$3,199',
    description: 'Ultra-light carbon frame built for speed on open roads.',
    badge: 'New',
  },
  {
    id: 'gravel-g3',
    name: 'Gravel G3',
    category: 'Gravel',
    price: '$1,899',
    description: 'Versatile all-rounder that thrives on mixed terrain adventures.',
    badge: null,
  },
  {
    id: 'enduro-e7',
    name: 'Enduro E7',
    category: 'Mountain',
    price: '$4,299',
    description: 'Race-ready enduro machine with 160mm travel and premium components.',
    badge: 'Pro',
  },
  {
    id: 'city-c2',
    name: 'City C2',
    category: 'Urban',
    price: '$999',
    description: 'Sleek commuter bike with integrated lighting and rack mounts.',
    badge: null,
  },
  {
    id: 'xc-race-s9',
    name: 'XC Race S9',
    category: 'Cross-Country',
    price: '$5,499',
    description: 'Competition-grade XC bike for podium-chasing performance.',
    badge: 'Limited',
  },
];

const categoryColors = {
  Mountain: 'bg-green-100 text-green-800',
  Road: 'bg-blue-100 text-blue-800',
  Gravel: 'bg-amber-100 text-amber-800',
  Urban: 'bg-purple-100 text-purple-800',
  'Cross-Country': 'bg-red-100 text-red-800',
};

export const BikeCard = ({ bike }) => {
  return (
    <div className="bg-[#16213e] rounded-2xl overflow-hidden border border-white/10 hover:border-[#e94560]/50 transition-all hover:shadow-2xl hover:-translate-y-1 group">
      <div className="relative h-52 bg-[#0f3460] overflow-hidden">
        <img
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`bike-img-${bike.id}`}
          data-strk-img={`[bike-desc-${bike.id}] [bike-name-${bike.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {bike.badge && (
          <span className="absolute top-3 left-3 bg-[#e94560] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {bike.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span id={`bike-name-${bike.id}`} className="text-white font-bold text-xl block">
              {bike.name}
            </span>
            <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[bike.category] || 'bg-gray-100 text-gray-800'}`}>
              {bike.category}
            </span>
          </div>
          <span className="text-[#e94560] font-black text-xl">{bike.price}</span>
        </div>
        <p id={`bike-desc-${bike.id}`} className="text-gray-400 text-sm leading-relaxed mb-5">
          {bike.description}
        </p>
        <button className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-[#e94560] hover:bg-[#e94560] text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BikeShowcase = ({ preview = false }) => {
  const containerRef = useRef(null);
  const displayedBikes = preview ? bikes.slice(0, 3) : bikes;

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="bikes" ref={containerRef} className="py-20 md:py-28 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h2 id="bikes-heading" className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Find Your Perfect Ride
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            From blazing road bikes to rugged mountain machines — there's a Velox for every rider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="text-center mt-14">
          {preview ? (
            <Link
              to="/bikes"
              className="inline-flex items-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
            >
              View Full Catalog <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;
