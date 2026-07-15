import React, { useRef, useEffect } from 'react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/common/ProductCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeBestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = PRODUCTS.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold">Curated for you</p>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Essential Bestsellers</h2>
        </div>
        <Link to="/shop">
          <Button variant="outline" className="tracking-widest border-[#1A1A1A]">
            VIEW ALL PIECES
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
        {bestsellers.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeBestsellers;
