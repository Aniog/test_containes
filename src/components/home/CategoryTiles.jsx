import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const categories = [
    { id: 'earrings', title: 'Earrings', link: '/shop?category=earrings' },
    { id: 'necklaces', title: 'Necklaces', link: '/shop?category=necklaces' },
    { id: 'huggies', title: 'Huggies', link: '/shop?category=huggies' },
  ];

  return (
    <section className="py-2" ref={containerRef}>
      <h2 className="sr-only" id="categories-title">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.link}
            className="group relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-muted"
          >
            <img
              data-strk-img-id={`cat-${category.id}`}
              data-strk-img={`[cat-title-${category.id}] [categories-title]`}
              data-strk-img-ratio="2x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 id={`cat-title-${category.id}`} className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="overflow-hidden">
                <Button 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-foreground uppercase tracking-widest text-xs translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}