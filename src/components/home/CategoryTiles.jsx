import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=800&q=80',
    filter: 'earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    filter: 'necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    filter: 'huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.filter}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:opacity-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:group-hover:opacity-0">
                <span className="font-serif text-xl text-cream-50 tracking-wide uppercase">
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
