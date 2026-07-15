import React from 'react';
import { Link } from 'react-router-dom';

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            Explore
          </p>
          <h2 className="velmora-heading text-3xl sm:text-4xl text-[var(--velmora-text)]">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[var(--velmora-accent)] mx-auto mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categoryData.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="velmora-heading-uppercase text-white text-xl sm:text-2xl tracking-[0.2em] mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.name}
                  </h3>
                  <span className="inline-block text-xs tracking-[0.2em] uppercase text-white/80 border-b border-white/60 pb-1 group-hover:border-white group-hover:text-white transition-colors">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
