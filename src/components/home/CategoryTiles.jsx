import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      href: '/shop?category=earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      description: 'Studs, drops & cuffs'
    },
    {
      name: 'Necklaces',
      href: '/shop?category=necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      description: 'Chains, pendants & chokers'
    },
    {
      name: 'Huggies',
      href: '/shop?category=huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      description: 'Everyday hoop essentials'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="divider-hairline w-24 mx-auto" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h3 className="font-serif text-3xl md:text-4xl mb-2 tracking-wider">
                  {category.name}
                </h3>
                <p className="font-sans text-sm opacity-80 mb-6">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/50 transition-colors duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
