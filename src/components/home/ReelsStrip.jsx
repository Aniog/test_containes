import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const reelsData = [
  { id: 1, caption: 'Everyday elegance' },
  { id: 2, caption: 'Sunlight on gold' },
  { id: 3, caption: 'The power of details' },
  { id: 4, caption: 'Effortless layers' },
  { id: 5, caption: 'Timeless sparkle' },
  { id: 6, caption: 'Crafted for you' }
];

const ReelsStrip = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-velmora-stone/30 border-y border-velmora-stone">
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-xs uppercase tracking-widest font-medium mb-2 opacity-50 text-center md:text-left">Shared by you</h2>
        <p className="text-3xl font-serif text-center md:text-left">Seen in Velmora</p>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing"
      >
        {reelsData.map((reel) => (
          <motion.div 
            key={reel.id}
            className="relative flex-shrink-0 w-64 aspect-[9/16] bg-velmora-stone overflow-hidden group shadow-lg"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] jewelry worn on ear neck outfit portrait 9:16`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <p 
                id={`reel-caption-${reel.id}`}
                className="text-white font-serif text-lg leading-tight italic"
              >
                "{reel.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReelsStrip;
