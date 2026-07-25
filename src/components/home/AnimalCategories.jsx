import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'mammals',
    titleId: 'cat-mammals-title',
    descId: 'cat-mammals-desc',
    imgId: 'cat-img-mammals-9a2b1c',
    title: 'Mammals',
    desc: 'Warm-blooded creatures that nurse their young, from tiny shrews to the mighty blue whale.',
    count: '5,500+ species',
    emoji: '🦁',
    color: 'from-amber-600 to-amber-800',
  },
  {
    id: 'birds',
    titleId: 'cat-birds-title',
    descId: 'cat-birds-desc',
    imgId: 'cat-img-birds-3d4e5f',
    title: 'Birds',
    desc: 'Masters of the sky, with feathers, beaks, and songs that fill every corner of the globe.',
    count: '10,000+ species',
    emoji: '🦅',
    color: 'from-sky-500 to-sky-700',
  },
  {
    id: 'reptiles',
    titleId: 'cat-reptiles-title',
    descId: 'cat-reptiles-desc',
    imgId: 'cat-img-reptiles-6g7h8i',
    title: 'Reptiles',
    desc: 'Ancient survivors — scaly, cold-blooded, and remarkably adapted to harsh environments.',
    count: '10,000+ species',
    emoji: '🦎',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 'ocean',
    titleId: 'cat-ocean-title',
    descId: 'cat-ocean-desc',
    imgId: 'cat-img-ocean-9j0k1l',
    title: 'Ocean Life',
    desc: 'The deep blue is home to the most diverse and mysterious creatures on the planet.',
    count: '230,000+ species',
    emoji: '🐋',
    color: 'from-blue-600 to-blue-900',
  },
  {
    id: 'insects',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-img-insects-2m3n4o',
    title: 'Insects',
    desc: 'The most numerous animals on Earth, vital to ecosystems as pollinators and decomposers.',
    count: '1,000,000+ species',
    emoji: '🦋',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'amphibians',
    titleId: 'cat-amphibians-title',
    descId: 'cat-amphibians-desc',
    imgId: 'cat-img-amphibians-5p6q7r',
    title: 'Amphibians',
    desc: 'Living between water and land, frogs, salamanders, and caecilians are nature\'s indicators.',
    count: '8,000+ species',
    emoji: '🐸',
    color: 'from-teal-500 to-teal-700',
  },
];

const AnimalCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" ref={containerRef} className="py-20 px-4 md:px-8 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            Explore by Kingdom
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c2b1e] mb-4">
            Animal Categories
          </h2>
          <p className="text-[#4b6b52] text-lg max-w-2xl mx-auto leading-relaxed">
            Life on Earth is astonishingly diverse. Dive into the major groups that make up our planet's incredible fauna.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-50`} />
                <span className="absolute top-4 left-4 text-3xl">{cat.emoji}</span>
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {cat.count}
                </span>
              </div>

              {/* Content */}
              <div className="bg-white p-5">
                <h3 id={cat.titleId} className="text-xl font-bold text-[#1c2b1e] mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-[#4b6b52] text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center text-[#1a5c38] text-sm font-semibold group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalCategories;
