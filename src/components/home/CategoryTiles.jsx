import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings jewelry product photography editorial warm tones elegant',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklace jewelry product photography editorial warm light elegant',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie earrings jewelry closeup product photography warm editorial',
  },
];

export default function CategoryTiles() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="relative aspect-[4/5] overflow-hidden group"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-${cat.id}-label]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  hovered === cat.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  hovered === cat.id ? 'bg-velmora-deep/30' : 'bg-velmora-deep/10'
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${cat.id}-label`}
                  className={`font-serif text-2xl md:text-3xl text-white tracking-[0.1em] transition-all duration-500 ${
                    hovered === cat.id ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
                  }`}
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
