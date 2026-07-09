import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryTiles() {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      to: '/shop?category=Earrings',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      to: '/shop?category=Necklaces',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      to: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Shop by Category</h2>
        <div className="divider-hairline w-24 mx-auto my-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.to}
            className="group relative aspect-[4/5] overflow-hidden block"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">{category.name}</h3>
                <div className="flex items-center justify-center gap-2 text-sm tracking-wider uppercase">
                  <span>Shop Now</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
