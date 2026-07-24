import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ShopByCategory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-4">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/shop"
                className="group relative block aspect-[4/5] bg-velmora-sand overflow-hidden"
              >
                <img
                  data-strk-img-id={cat.imageId}
                  data-strk-img={`[cat-${cat.id}-label] gold ${cat.name} jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`cat-${cat.id}-label`}
                    className="font-serif text-3xl md:text-4xl text-white tracking-wide"
                  >
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
