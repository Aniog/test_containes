import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingCart } from 'lucide-react';

const bikes = [
  {
    id: 'bike-1',
    imgId: 'feat-img-p7q8r9',
    nameId: 'feat-name-1',
    descId: 'feat-desc-1',
    name: 'Apex Carbon Pro',
    category: 'Road Bike',
    price: '$2,499',
    rating: 4.9,
    reviews: 128,
    badge: 'Best Seller',
    desc: 'Ultra-lightweight carbon frame with precision shifting for competitive road racing.',
  },
  {
    id: 'bike-2',
    imgId: 'feat-img-s1t2u3',
    nameId: 'feat-name-2',
    descId: 'feat-desc-2',
    name: 'TrailBlazer X9',
    category: 'Mountain Bike',
    price: '$1,899',
    rating: 4.8,
    reviews: 94,
    badge: 'New Arrival',
    desc: 'Full-suspension mountain bike engineered for aggressive trail riding and enduro racing.',
  },
  {
    id: 'bike-3',
    imgId: 'feat-img-v4w5x6',
    nameId: 'feat-name-3',
    descId: 'feat-desc-3',
    name: 'UrbanFlow E5',
    category: 'Electric Bike',
    price: '$3,199',
    rating: 4.7,
    reviews: 76,
    badge: 'Top Rated',
    desc: 'Smart electric commuter with 80km range, integrated lights, and app connectivity.',
  },
  {
    id: 'bike-4',
    imgId: 'feat-img-y7z8a9',
    nameId: 'feat-name-4',
    descId: 'feat-desc-4',
    name: 'Gravel King 700',
    category: 'Gravel Bike',
    price: '$1,599',
    rating: 4.8,
    reviews: 61,
    badge: null,
    desc: 'Versatile gravel bike that handles both smooth roads and rough unpaved paths.',
  },
  {
    id: 'bike-5',
    imgId: 'feat-img-b1c2d3',
    nameId: 'feat-name-5',
    descId: 'feat-desc-5',
    name: 'Metro Cruiser',
    category: 'City Bike',
    price: '$799',
    rating: 4.6,
    reviews: 112,
    badge: null,
    desc: 'Classic city cruiser with upright geometry, fenders, and a rear rack for daily commutes.',
  },
  {
    id: 'bike-6',
    imgId: 'feat-img-e4f5g6',
    nameId: 'feat-name-6',
    descId: 'feat-desc-6',
    name: 'Summit Hardtail 29',
    category: 'Mountain Bike',
    price: '$1,199',
    rating: 4.7,
    reviews: 88,
    badge: 'Value Pick',
    desc: 'Hardtail 29er with a rigid fork and wide tires for cross-country trail adventures.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'text-orange-500 fill-orange-500' : 'text-neutral-600'}`}
        />
      ))}
    </div>
  );
}

export default function FeaturedBikes() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="bg-[#1a1a1a] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Hand-Picked</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-3">Featured Bikes</h2>
            <p className="text-neutral-400 mt-3 max-w-xl leading-relaxed">
              Our editors' top picks — the finest bikes across every category, chosen for performance and value.
            </p>
          </div>
          <a
            href="#categories"
            className="shrink-0 border border-neutral-600 hover:border-orange-500 text-neutral-100 font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 self-start md:self-auto"
          >
            View All
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="group bg-[#222222] border border-[#2a2a2a] hover:border-orange-500 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={bike.name}
                  data-strk-img-id={bike.imgId}
                  data-strk-img={`[${bike.descId}] [${bike.nameId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {bike.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {bike.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1">{bike.category}</span>
                <h3 id={bike.nameId} className="text-lg font-bold text-neutral-100 mb-2">{bike.name}</h3>
                <p id={bike.descId} className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">{bike.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={bike.rating} />
                  <span className="text-sm text-neutral-400">{bike.rating} ({bike.reviews})</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-neutral-100">{bike.price}</span>
                  <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-orange-500/20">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
