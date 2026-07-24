import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoriesSection = () => {
  const categoryImages = {
    earrings: {
      gradient: 'from-gold-200 to-gold-400',
      id: 'category-earrings'
    },
    necklaces: {
      gradient: 'from-espresso-200 to-espresso-400',
      id: 'category-necklaces'
    },
    huggies: {
      gradient: 'from-sage-200 to-sage-400',
      id: 'category-huggies'
    }
  };
  
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-2 block">
            Explore
          </span>
          <h2 className="text-heading text-espresso-900">
            Shop by Category
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.filter(cat => cat.id !== 'sets').map((category) => (
            <Link 
              key={category.id}
              to={`/collections/${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                data-strk-img-id={categoryImages[category.id]?.id}
                data-strk-img={`[category-name-${category.id}] [category-desc-${category.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso-900/30 group-hover:bg-espresso-900/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 
                  id={`category-name-${category.id}`}
                  className="font-serif text-2xl md:text-3xl tracking-wider text-cream-50 uppercase mb-2"
                >
                  {category.name}
                </h3>
                <p 
                  id={`category-desc-${category.id}`}
                  className="font-sans text-sm text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
