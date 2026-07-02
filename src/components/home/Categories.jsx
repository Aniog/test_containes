import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Earrings', slug: 'earrings' },
    { name: 'Necklaces', slug: 'necklaces' },
    { name: 'Huggies', slug: 'huggies' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-16 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-square overflow-hidden bg-zinc-50"
            >
              <div
                className="absolute inset-0 z-0 bg-zinc-100 transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat.slug}`}
                data-strk-bg={`luxury gold ${cat.name} jewelry on neutral minimal background`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 backdrop-blur-sm text-primary px-8 py-3 text-[10px] uppercase tracking-super-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity">
                <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-primary/30 pb-1">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
