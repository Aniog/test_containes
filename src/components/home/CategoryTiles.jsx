import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const tileConfig = {
  earrings: { bg: 'bg-velvet-200', accent: 'bg-velvet-400' },
  necklaces: { bg: 'bg-velvet-300', accent: 'bg-velvet-500' },
  huggies: { bg: 'bg-velvet-100', accent: 'bg-velvet-300' },
};

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-600 mb-4">Shop By</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet-900">Category</h2>
          <hr className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div className={`absolute inset-0 ${tileConfig[cat.id]?.bg || 'bg-velvet-200'} flex items-center justify-center`}>
                <div className={`w-3/5 h-3/5 ${tileConfig[cat.id]?.accent || 'bg-velvet-400'} rounded-full opacity-60 group-hover:scale-105 transition-transform duration-500`} />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-velvet-950/0 group-hover:bg-velvet-950/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-3xl md:text-4xl text-white tracking-widest uppercase drop-shadow-lg">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-sm text-velvet-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
