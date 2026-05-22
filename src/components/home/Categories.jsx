import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'cat-1', emoji: '🍓', name: 'Berries', count: 12, color: 'bg-red-50 hover:bg-red-100' },
  { id: 'cat-2', emoji: '🍊', name: 'Citrus', count: 8, color: 'bg-orange-50 hover:bg-orange-100' },
  { id: 'cat-3', emoji: '🍍', name: 'Tropical', count: 15, color: 'bg-yellow-50 hover:bg-yellow-100' },
  { id: 'cat-4', emoji: '🍇', name: 'Grapes', count: 6, color: 'bg-purple-50 hover:bg-purple-100' },
  { id: 'cat-5', emoji: '🍎', name: 'Apples', count: 10, color: 'bg-green-50 hover:bg-green-100' },
  { id: 'cat-6', emoji: '🍑', name: 'Stone Fruits', count: 9, color: 'bg-pink-50 hover:bg-pink-100' },
];

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-2">Browse By Type</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Find exactly what you're looking for — from tropical exotics to everyday favourites.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 transition-all cursor-pointer ${cat.color}`}
            >
              <span className="text-5xl">{cat.emoji}</span>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-500">{cat.count} items</p>
              </div>
            </button>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 relative rounded-3xl overflow-hidden bg-green-700 text-white">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10">
            <div>
              <p id="banner-label" className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-1">Limited Time</p>
              <h3 id="banner-title" className="text-2xl md:text-3xl font-extrabold">Seasonal Fruit Boxes</h3>
              <p id="banner-subtitle" className="text-green-100 mt-2 max-w-sm">
                Get a curated box of the freshest seasonal fruits delivered weekly. Save up to 25%.
              </p>
            </div>
            <a
              href="#shop"
              className="shrink-0 bg-white text-green-700 font-bold rounded-full px-7 py-3 hover:bg-green-50 transition-colors"
            >
              Order a Box
            </a>
          </div>
          <div
            className="absolute inset-0 opacity-10"
            data-strk-bg-id="banner-bg-3d9f1a"
            data-strk-bg="[banner-subtitle] [banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
