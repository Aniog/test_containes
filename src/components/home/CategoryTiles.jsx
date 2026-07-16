import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/seed';

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="relative block aspect-square md:aspect-[3/4] overflow-hidden group"
            >
              <img
                alt={category.title}
                data-strk-img-id={category.imgId}
                data-strk-img={`[cat-title-${category.id}] fine jewelry collection`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 id={`cat-title-${category.id}`} className="font-serif text-2xl tracking-wide uppercase text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;