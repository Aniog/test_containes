import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      link: '/shop?category=Earrings'
    },
    {
      name: 'Necklaces',
      image: "https://images.unsplash.com/photo-1515562141203-ffd4bd7c8a38?w=800&q=80",
      link: '/shop?category=Necklaces'
    },
    {
      name: 'Huggies',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      link: '/shop?category=Huggies'
    }
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-accent mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link 
            key={category.name}
            to={category.link}
            className="group relative overflow-hidden aspect-[4/5] block"
          >
            <img 
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wider uppercase">
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
