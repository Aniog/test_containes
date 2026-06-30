import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      description: 'Studs, drops & statement pieces',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      description: 'Layers & pendants',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      description: 'Huggie & hoop earrings',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-base-paper">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-base-charcoal mb-4">
              Shop by Category
            </h2>
            <p className="text-base-muted max-w-xl mx-auto">
              Find your perfect piece from our curated collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-base-sand"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-base-charcoal/20 group-hover:bg-base-charcoal/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-display text-3xl md:text-4xl font-medium text-base-cream mb-2 tracking-wider">
                    {category.name}
                  </h3>
                  <p
                    className={`text-sm text-base-cream/90 transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {category.description}
                  </p>
                  <span
                    className={`mt-4 text-xs font-medium tracking-widest uppercase text-gold border-b border-gold pb-1 transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
