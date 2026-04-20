import React from 'react';
import { Headphones, Keyboard, Monitor, Watch, LayoutGrid } from 'lucide-react';

const iconMap = {
  Grid: LayoutGrid,
  Headphones: Headphones,
  Keyboard: Keyboard,
  Monitor: Monitor,
  Watch: Watch,
};

const categoryMeta = {
  all: { bg: 'from-slate-800 to-slate-700', accent: 'text-slate-300', border: 'border-slate-600' },
  audio: { bg: 'from-purple-900 to-purple-800', accent: 'text-purple-300', border: 'border-purple-600' },
  accessories: { bg: 'from-blue-900 to-blue-800', accent: 'text-blue-300', border: 'border-blue-600' },
  displays: { bg: 'from-cyan-900 to-cyan-800', accent: 'text-cyan-300', border: 'border-cyan-600' },
  wearables: { bg: 'from-emerald-900 to-emerald-800', accent: 'text-emerald-300', border: 'border-emerald-600' },
};

const CATEGORY_DEFS = [
  { id: 'all', label: 'All Products', icon: 'Grid', desc: null },
  { id: 'audio', label: 'Audio', icon: 'Headphones', desc: 'Earbuds & Headphones' },
  { id: 'accessories', label: 'Accessories', icon: 'Keyboard', desc: 'Keyboards & Power' },
  { id: 'displays', label: 'Displays', icon: 'Monitor', desc: '4K Monitors' },
  { id: 'wearables', label: 'Wearables', icon: 'Watch', desc: 'Smart Watches' },
];

const CategoriesSection = ({ products = [], activeCategory, onCategoryChange }) => {
  const categories = CATEGORY_DEFS.map((cat) => ({
    ...cat,
    count: cat.id === 'all'
      ? products.length
      : products.filter((p) => p.category === cat.id).length,
  }));

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Shop by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Curated collections of premium tech — engineered for performance, designed for life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const meta = categoryMeta[cat.id];
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left hover:scale-105 hover:shadow-xl ${
                  isActive
                    ? `bg-gradient-to-br ${meta.bg} ${meta.border} shadow-lg scale-105`
                    : 'bg-gray-900 border-white/5 hover:border-white/20 hover:bg-gray-800'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                    isActive
                      ? `bg-white/10 ${meta.accent}`
                      : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`font-semibold text-sm mb-1 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {cat.label}
                </div>
                {cat.desc && (
                  <div className={`text-xs ${isActive ? meta.accent : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {cat.desc}
                  </div>
                )}
                <div className={`text-xs mt-2 font-medium ${isActive ? meta.accent : 'text-gray-600 group-hover:text-gray-400'}`}>
                  {cat.count} {cat.count === 1 ? 'product' : 'products'}
                </div>

                {isActive && (
                  <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
