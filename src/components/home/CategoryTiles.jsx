import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    link: '/shop?category=earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    link: '/shop?category=necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=800&fit=crop',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">Explore</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">Shop by Category</h2>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-3xl md:text-4xl tracking-[0.15em] mb-3">{cat.name}</h3>
                  <span className="text-xs tracking-[0.2em] uppercase border-b border-white/60 pb-1 group-hover:border-white transition-colors">
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
