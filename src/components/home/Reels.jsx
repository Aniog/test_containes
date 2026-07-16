import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const Reels = () => {
  const containerRef = useRef(null);

  const reels = [
    { id: 'reel-1', title: 'AURA COLLECTION', caption: 'Luminous details for your everyday' },
    { id: 'reel-2', title: 'LAYERING ART', caption: 'Create your own story' },
    { id: 'reel-3', title: 'THE HUGGIE EDIT', caption: 'Chunky, classic, and essential' },
    { id: 'reel-4', title: 'GOLDEN HOUR', caption: 'Warm light caught in fine jewelry' },
    { id: 'reel-5', title: 'MINIMALIST LUXE', caption: 'Quiet luxury in every piece' },
    { id: 'reel-6', title: 'HEIRLOOM SETS', caption: 'Gifts meant to be treasured' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-muted">
      <div className="px-6 md:px-12 mb-12 flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">Worn by You</h3>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground italic">Swipe to explore</span>
      </div>

      <div className="flex overflow-x-auto pb-10 hide-scrollbar px-6 md:px-12 space-x-6">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[280px] aspect-[9/16] relative group overflow-hidden bg-white"
          >
            <img
              alt={reel.title}
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-title-${reel.id}] jewelry model worn portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute inset-x-0 bottom-0 p-8 text-white space-y-2">
              <h4 id={`reel-title-${reel.id}`} className="text-xl font-serif italic tracking-wide">
                {reel.title}
              </h4>
              <p className="text-xs font-sans tracking-widest opacity-80 mt-1 uppercase">
                {reel.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Reels;
