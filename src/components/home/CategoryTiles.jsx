import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
];

const CategoryTiles = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-base mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/20 to-transparent transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-3xl text-cream mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {category.name}
                  </h3>
                  <span
                    className={`inline-block text-xs tracking-widest uppercase text-cream/80 border-b border-cream/60 pb-1 transition-all duration-300 ${
                      hoveredId === category.id ? 'border-gold text-gold' : ''
                    }`}
                  >
                    Explore
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