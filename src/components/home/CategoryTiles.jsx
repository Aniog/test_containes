import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://placehold.co/600x800/f7f4ef/c9a96e?text=Earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://placehold.co/600x800/ede8df/b08d4a?text=Necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://placehold.co/600x800/f7f4ef/c9a96e?text=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] bg-cream-dark overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl sm:text-3xl text-cream tracking-[0.15em] group-hover:tracking-[0.25em] transition-all duration-500">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
