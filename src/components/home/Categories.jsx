import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cats = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.title}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[#F9F8F6]"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={`collection ${cat.title} jewelry minimal studio`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-12 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 id={cat.id} className="text-white text-3xl font-serif mb-4">{cat.title}</h3>
                <span className="text-white text-[10px] uppercase tracking-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop Category
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
