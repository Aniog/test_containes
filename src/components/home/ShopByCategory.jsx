import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    to: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    to: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    to: '/shop?category=huggies',
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.to}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase font-sans text-white/80 border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
