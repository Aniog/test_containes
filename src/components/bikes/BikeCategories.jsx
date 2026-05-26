import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'cat-road',
    imgId: 'cat-img-d4e5f6',
    title: 'Road Bikes',
    titleId: 'cat-title-road',
    desc: 'Built for speed and endurance on paved surfaces.',
    descId: 'cat-desc-road',
    count: '120+ models',
  },
  {
    id: 'cat-mountain',
    imgId: 'cat-img-g7h8i9',
    title: 'Mountain Bikes',
    titleId: 'cat-title-mountain',
    desc: 'Conquer trails, rocks, and rugged terrain with confidence.',
    descId: 'cat-desc-mountain',
    count: '95+ models',
  },
  {
    id: 'cat-city',
    imgId: 'cat-img-j1k2l3',
    title: 'City Bikes',
    titleId: 'cat-title-city',
    desc: 'Comfortable and stylish for everyday urban commuting.',
    descId: 'cat-desc-city',
    count: '80+ models',
  },
  {
    id: 'cat-electric',
    imgId: 'cat-img-m4n5o6',
    title: 'Electric Bikes',
    titleId: 'cat-title-electric',
    desc: 'Pedal-assist power for effortless, extended rides.',
    descId: 'cat-desc-electric',
    count: '60+ models',
  },
];

export default function BikeCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" ref={containerRef} className="bg-[#111111] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Browse by Type</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-3">
            Find Your Category
          </h2>
          <p className="text-neutral-400 mt-3 max-w-xl leading-relaxed">
            Whether you're racing, commuting, or exploring off-road, we have the perfect bike for every rider.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl border border-[#2a2a2a] hover:border-orange-500 transition-all duration-300 cursor-pointer bg-[#1a1a1a]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">{cat.count}</span>
                <h3 id={cat.titleId} className="text-lg font-bold text-neutral-100 mt-1 mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-neutral-400 leading-relaxed mb-4">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all duration-200">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
