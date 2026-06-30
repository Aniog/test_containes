import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryTiles } from '../data/products';

export default function CategoryTiles() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-ultra uppercase text-gold mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.slug}`}
              className="relative aspect-[4/5] overflow-hidden group"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={`https://placehold.co/800x1000/2a1f1a/d4b87a?text=${encodeURIComponent(cat.name)}`}
                alt={cat.name}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hovered === cat.id ? 'scale-105' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 bg-charcoal/30 transition-opacity duration-300 ${
                  hovered === cat.id ? 'opacity-60' : 'opacity-40'
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`font-serif text-xl md:text-2xl tracking-widest uppercase text-white transition-all duration-300 ${
                    hovered === cat.id ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
                  }`}
                >
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
