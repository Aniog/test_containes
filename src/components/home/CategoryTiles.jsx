import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'earrings', title: 'Earrings', path: '/collections/earrings' },
  { id: 'necklaces', title: 'Necklaces', path: '/collections/necklaces' },
  { id: 'huggies', title: 'Huggies', path: '/collections/huggies' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-8" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.path} className="group relative aspect-square overflow-hidden bg-velmora-light block">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-title-${cat.id}] collection category header`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 flex items-center space-x-3 transform group-hover:scale-105 transition-transform duration-500">
                  <h3 id={`cat-title-${cat.id}`} className="font-serif uppercase tracking-widest text-primary">
                    {cat.title}
                  </h3>
                  <ArrowRight size={16} className="text-primary transition-transform duration-300 group-hover:translate-x-1" />
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