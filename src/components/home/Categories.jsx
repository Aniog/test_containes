import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);

  const categories = [
    { title: 'Earrings', id: 'cat-earrings', slug: 'earrings' },
    { title: 'Necklaces', id: 'cat-necklaces', slug: 'necklaces' },
    { title: 'Huggies', id: 'cat-huggies', slug: 'huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-zinc-100 shadow-md"
          >
             <img
              data-strk-img-id={cat.id}
              data-strk-img={`[cat-title-${cat.id}] jewelry gold luxury`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-10 py-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <h3 id={`cat-title-${cat.id}`} className="text-sm font-serif tracking-widestest uppercase">
                  {cat.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
