import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 'earrings', name: 'Earrings', image: 'https://placehold.co/800x1000/1a1a1a/d4af37?text=Earrings' },
    { id: 'necklaces', name: 'Necklaces', image: 'https://placehold.co/800x1000/1a1a1a/d4af37?text=Necklaces' },
    { id: 'huggies', name: 'Huggies', image: 'https://placehold.co/800x1000/1a1a1a/d4af37?text=Huggies' },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Explore our curated collections, each designed to complement your personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
