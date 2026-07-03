import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { name: 'Necklaces', slug: 'Necklaces', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
  { name: 'Huggies', slug: 'Huggies', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
