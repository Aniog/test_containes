import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/30">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl text-center mb-12"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="inline-block px-8 py-3 bg-white/95 text-velmora-espresso text-sm tracking-ultra-wide"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {category.name.toUpperCase()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
