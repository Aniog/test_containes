import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, []);

  const categories = [
    { id: 'earrings', title: 'Earrings', path: '/shop?category=earrings' },
    { id: 'necklaces', title: 'Necklaces', path: '/shop?category=necklaces' },
    { id: 'huggies', title: 'Huggies', path: '/shop?category=huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.path}
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              <img 
                src={`https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={`${category.title} category`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay that darkens slightly on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm px-8 py-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <h3 className="font-serif tracking-widest uppercase text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              {/* Always visible on mobile, hidden on desktop until hover */}
              <div className="absolute bottom-8 left-0 right-0 text-center md:hidden">
                <span className="bg-background/90 backdrop-blur-sm px-6 py-3 font-serif tracking-widest uppercase text-sm inline-block">
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

export default Categories;
