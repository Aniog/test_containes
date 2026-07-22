import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'cat-earrings', title: 'Earrings', imgId: 'cat-img-earrings' },
    { id: 'cat-necklaces', title: 'Necklaces', imgId: 'cat-img-necklaces' },
    { id: 'cat-huggies', title: 'Huggies', imgId: 'cat-img-huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 id="categories-title" className="text-3xl md:text-4xl font-serif text-center mb-16">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.title.toLowerCase()}`} className="group relative block overflow-hidden aspect-[4/5] bg-secondary">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}-title] flat lay fine jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm px-8 py-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <span id={`${cat.id}-title`} className="font-serif text-xl uppercase tracking-widest text-foreground">
                    {cat.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;