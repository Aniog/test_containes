import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://placehold.co/800x1000/F5F0EB/1A1A1A?text=Earrings',
    link: '/shop?category=Earrings'
  },
  {
    name: 'Necklaces',
    image: 'https://placehold.co/800x1000/F5F0EB/1A1A1A?text=Necklaces',
    link: '/shop?category=Necklaces'
  },
  {
    name: 'Huggies',
    image: 'https://placehold.co/800x1000/F5F0EB/1A1A1A?text=Huggies',
    link: '/shop?category=Huggies'
  }
];

const CategoryTiles = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative overflow-hidden aspect-[4/5] bg-cream"
          >
            <img 
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-charcoal bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white tracking-wider uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
