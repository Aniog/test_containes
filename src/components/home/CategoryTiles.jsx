import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      title: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=earrings'
    },
    {
      title: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643477174-5ceea654c601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=necklaces'
    },
    {
      title: 'Huggies',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25287f3ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=huggies'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background/90 text-foreground px-8 py-3 uppercase tracking-widest text-sm font-medium backdrop-blur-sm shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary border border-transparent transition-all duration-300">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
