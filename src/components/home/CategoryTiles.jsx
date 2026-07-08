import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      slug: 'earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop'
    },
    {
      name: 'Necklaces',
      slug: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop'
    },
    {
      name: 'Huggies',
      slug: 'huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="container-premium py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
        <div className="hairline w-16 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/shop?category=${category.slug}`}
            className="group relative overflow-hidden aspect-[4/3] bg-cream"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
