import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      path: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden block"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-black/30 group-hover:bg-velmora-black/40 transition-colors duration-300" />

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="font-serif text-3xl md:text-4xl text-velmora-white uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
