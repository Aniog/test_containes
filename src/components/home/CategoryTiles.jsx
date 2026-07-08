import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/shop?category=Earrings'
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      link: '/shop?category=Necklaces'
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      link: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="font-serif text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Shop by Category
        </h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            to={category.link}
            className="category-tile group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay with Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="font-serif text-2xl md:text-3xl text-white tracking-wider uppercase text-center"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {category.name}
                </h3>
              </div>
            </div>

            {/* Static Label (visible when not hovered) */}
            <div className="absolute bottom-8 left-0 right-0 md:opacity-0 md:group-hover:opacity-0 transition-opacity duration-300">
              <h3
                className="font-serif text-2xl md:text-3xl text-white tracking-wider uppercase text-center"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
