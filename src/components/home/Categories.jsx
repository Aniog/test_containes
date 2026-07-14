import React from 'react';
import { Link } from 'react-router-dom';

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings collection editorial close up warm lighting on velvet display',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklaces chain pendant collection editorial warm lighting on neutral background',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings close up collection editorial warm tones',
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">Shop by Category</h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryData.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={`cat-${cat.id}-a9b2c3`}
              data-strk-img={cat.query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-all duration-500" />
            <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-10">
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-[0.1em] uppercase mb-2">
                  {cat.name}
                </h3>
                <span className="inline-block text-[11px] font-sans text-velmora-cream/80 uppercase tracking-[0.2em] border-b border-velmora-cream/40 pb-0.5 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors duration-300">
                  Explore
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
