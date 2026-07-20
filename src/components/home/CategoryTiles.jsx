import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if(strkImgConfig && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, []);

  const categories = [
    { title: "Earrings", id: "ear" },
    { title: "Necklaces", id: "neck" },
    { title: "Huggies", id: "hug" }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.title}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-muted"
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Shop ${cat.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`fine gold ${cat.title} editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-widest uppercase drop-shadow-md">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}