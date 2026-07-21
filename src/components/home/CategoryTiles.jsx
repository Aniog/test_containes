import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    to: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    to: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    to: '/shop?category=Huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x800/1A1A1A/FAF8F5?text=${cat.name}`;
                }}
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-white text-2xl md:text-3xl font-light tracking-[0.15em] uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {cat.name}
                </span>
              </div>

              {/* Hover border */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/50 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
