import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Earrings',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Necklaces',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Huggies',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="font-sans text-gray-warm max-w-2xl mx-auto">
            Explore our collections by style
          </p>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative aspect-square overflow-hidden block"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-cream tracking-widest uppercase">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}