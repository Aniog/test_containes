import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      title: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/collections/earrings'
    },
    {
      title: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/collections/necklaces'
    },
    {
      title: 'Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/collections/huggies'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-stone flex items-center justify-center cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={`${category.title} collection`} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/10 transition-opacity duration-500 group-hover:bg-velmora-charcoal/30 flex items-center justify-center p-8">
                 <div className="bg-background/90 backdrop-blur px-8 py-6 text-center transform transition-transform duration-500 group-hover:-translate-y-2 border border-border/50">
                    <h3 className="font-serif text-2xl tracking-widest uppercase text-velmora-charcoal">
                    {category.title}
                    </h3>
                    <div className="w-0 h-px bg-velmora-gold mx-auto mt-4 transition-all duration-500 group-hover:w-full"/>
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