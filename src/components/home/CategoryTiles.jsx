import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://picsum.photos/800/1000?random=11',
      link: '/shop?category=earrings'
    },
    {
      name: 'Necklaces',
      image: 'https://picsum.photos/800/1000?random=12',
      link: '/shop?category=necklaces'
    },
    {
      name: 'Huggies',
      image: 'https://picsum.photos/800/1000?random=13',
      link: '/shop?category=huggies'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-widest">
                {category.name}
              </h3>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-4 border-2 border-white border-opacity-0 group-hover:border-opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
