import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: '/placeholder.svg',
      description: 'Studs, drops & cuffs',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: '/placeholder.svg',
      description: 'Chains, pendants & chokers',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: '/placeholder.svg',
      description: 'Everyday hoop essentials',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-velmora-charcoal mb-4">
            Shop by Category
          </h2>
          <div className="divider mb-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden aspect-square block animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 
                              transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center 
                              text-white p-8">
                <h3 className="font-serif text-4xl md:text-5xl mb-2 text-center">
                  {category.name}
                </h3>
                <p className="font-sans text-sm uppercase tracking-wider text-white/80 mb-4">
                  {category.description}
                </p>
                <div className="w-12 h-px bg-velmora-gold transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
