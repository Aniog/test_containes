import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/shop?category=earrings',
      count: 24
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      link: '/shop?category=necklaces',
      count: 18
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      link: '/shop?category=huggies',
      count: 12
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="heading-md mb-4">Shop by Category</h2>
        <div className="divider-gold w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-charcoal"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80 
                       transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white
                          bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-500">
              <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-wider uppercase mb-2">
                {category.name}
              </h3>
              <p className="font-sans text-sm tracking-wide">
                {category.count} pieces
              </p>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-4 border-2 border-white/0 group-hover:border-white/60 
                            transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
