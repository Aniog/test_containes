import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { bikes, BikeCard } from '@/components/home/BikeShowcase';

const categories = ['All', ...Array.from(new Set(bikes.map((b) => b.category)))];

const Bikes = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? bikes
    : bikes.filter((b) => b.category === activeCategory);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef} className="bg-[#1a1a2e] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-white">
            All Bikes
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Browse our full lineup — from trail-shredding mountain bikes to sleek road machines.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#e94560] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
