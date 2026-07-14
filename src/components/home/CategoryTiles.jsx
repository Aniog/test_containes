import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Shop by Category
          </h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative aspect-square overflow-hidden bg-velmora-cream"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-velmora-warm-black/30 group-hover:bg-velmora-warm-black/40 transition-colors duration-300" />
              
              {/* Label on Hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-warm-white font-light
                             transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-0.5 bg-velmora-gold mx-auto mt-4
                               transition-all duration-300" />
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
