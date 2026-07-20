import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', id: 'cat-earrings', slug: 'earrings' },
    { name: 'Necklaces', id: 'cat-necklaces', slug: 'necklaces' },
    { name: 'Huggies', id: 'cat-huggies', slug: 'huggies' },
  ];

  return (
    <section ref={containerRef} className="pb-24 px-6 md:px-12 bg-velmora-stone">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative h-[600px] overflow-hidden bg-velmora-dark/5"
          >
            <div
              className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={`[${cat.id}-title] gold jewelry category editorial`}
              data-strk-bg-ratio="2x3"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-velmora-dark/10 group-hover:bg-velmora-dark/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                id={`${cat.id}-title`}
                className="font-serif text-3xl md:text-4xl text-white uppercase tracking-widest transition-transform duration-500 translate-y-4 group-hover:translate-y-0"
              >
                {cat.name}
              </h3>
              <div className="w-12 h-[1px] bg-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-[10px] uppercase tracking-widest text-white mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Discover More
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
