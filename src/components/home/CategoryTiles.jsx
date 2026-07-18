import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      description: 'Studs, drops & cuffs'
    },
    {
      name: 'Necklaces',
      path: '/shop?category=necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      description: 'Chains, pendants & chokers'
    },
    {
      name: 'Huggies',
      path: '/shop?category=huggies',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      description: 'Everyday hoop essentials'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Shop by Category
        </h2>
        <div className="w-24 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden cursor-pointer block"
          >
            <div className="aspect-[4/5] bg-[#F5F3F0] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500" />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="font-['Cormorant_Garamond'] text-4xl uppercase tracking-[0.2em] mb-2">
                {category.name}
              </h3>
              <p className="text-sm tracking-wider opacity-90 mb-4">
                {category.description}
              </p>
              <div className="w-12 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
