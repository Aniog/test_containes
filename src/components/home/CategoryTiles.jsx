import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      id: 1,
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      link: '/shop?category=Earrings'
    },
    {
      id: 2,
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
      link: '/shop?category=Necklaces'
    },
    {
      id: 3,
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop',
      link: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Shop by Category</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="group relative overflow-hidden aspect-[4/3] md:aspect-square block"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-colors duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-serif tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {category.name}
              </h3>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-4 border-2 border-white/0 group-hover:border-white/50 transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}
