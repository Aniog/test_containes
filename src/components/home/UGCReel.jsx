import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'reel-1', caption: 'Effortless elegance' },
    { id: 'reel-2', caption: 'Golden hour glow' },
    { id: 'reel-3', caption: 'Timeless huggies' },
    { id: 'reel-4', caption: 'The perfect gift' },
    { id: 'reel-5', caption: 'Layered perfection' },
    { id: 'reel-6', caption: 'Daily luxury' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] font-sans text-accent mb-4">Seen on you</h2>
        <h3 className="text-3xl md:text-5xl font-serif">Velmora In the Wild</h3>
      </div>

      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 snap-x no-scrollbar">
        {reels.map((reel) => (
          <motion.div
            key={reel.id}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-muted relative group snap-start cursor-pointer"
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`an aesthetic vertical video still of gold jewelry being worn ${reel.caption} editorial style`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC Content"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white font-serif text-xl tracking-wide italic">
                "{reel.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
