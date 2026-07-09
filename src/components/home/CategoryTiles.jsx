import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
      description: 'From studs to statement drops',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
      description: 'Delicate chains & pendants',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop',
      description: 'Hoop earrings reimagined',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4] bg-velmora-charcoal animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <h3
                  className="font-serif text-3xl md:text-4xl text-velmora-cream mb-2 tracking-widest uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {category.name}
                </h3>
                <p className="text-velmora-cream/80 text-sm text-center">
                  {category.description}
                </p>
                <div className="mt-4 w-12 h-px bg-velmora-gold transition-all duration-300 group-hover:w-24" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
