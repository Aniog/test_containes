import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-sub] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
        <motion.p 
          id="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Timeless Demi-Fine Jewelry
        </motion.p>
        <motion.h1 
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-10 leading-tight"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/shop"
            className="inline-block bg-white text-primary px-10 py-4 text-xs uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>

      {/* Decorative hairline */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-white/30" />
    </section>
  );
};

export default Hero;

cat <<'EOF' > /workspace/my-app/src/components/home/TrustBar.jsx
import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-muted py-4 border-b border-black/5 overflow-hidden">
      <div className="flex justify-around items-center space-x-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center space-x-2 shrink-0">
            <span className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground italic">
              {item}
            </span>
            {i !== items.length - 1 && <span className="text-black/10 text-lg">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;

cat <<'EOF' > /workspace/my-app/src/components/home/Bestsellers.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../shop/ProductCard';
import { PRODUCTS } from '@/config';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = PRODUCTS.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <h2 id="bs-title" className="text-3xl font-serif mb-4 md:mb-0">Bestsellers</h2>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:opacity-60 transition-opacity">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

cat <<'EOF' > /workspace/my-app/src/components/home/Reels.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Reels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 1, caption: 'Everyday elegance' },
    { id: 2, caption: 'Golden Hour' },
    { id: 3, caption: 'Details that matter' },
    { id: 4, caption: 'The Perfect Huggie' },
    { id: 5, caption: 'Layered in gold' }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-xs uppercase tracking-[.4em] mb-12 text-center text-muted-foreground">Worn by You</h2>
        
        <div className="flex space-x-4 overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
          {reels.map((reel) => (
            <div key={reel.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-muted overflow-hidden group">
              <img
                data-strk-img-id={`reel-img-${reel.id}`}
                data-strk-img={`[reel-cap-${reel.id}] jewelry ear neck worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p id={`reel-cap-${reel.id}`} className="text-white font-serif italic text-lg opacity-90">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;
