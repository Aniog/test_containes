import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import ProductCard from '../components/ProductCard';
import { getBestsellers } from '../data/products';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-5xl font-light text-velmora-dark mb-3"
          >
            Bestsellers
          </h2>
          <p
            id="bestsellers-subtitle"
            className="text-velmora-muted text-sm md:text-base"
          >
            The pieces our community wears on repeat.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              containerId="bestsellers"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
