import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoryTiles = () => {
  const categories = [
    {
      id: 1,
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      href: '/shop?category=Earrings',
    },
    {
      id: 2,
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      href: '/shop?category=Necklaces',
    },
    {
      id: 3,
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      href: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Shop by Category
          </h2>
          <div className="w-24 h-px bg-velmora-gold mx-auto" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group relative h-96 overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-ivory tracking-widest uppercase mb-4">
                    {category.name}
                  </h3>
                  <div className="inline-flex items-center text-velmora-ivory/90 text-sm tracking-wider uppercase group-hover:text-velmora-gold-light transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
