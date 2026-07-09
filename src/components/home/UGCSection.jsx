import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday luxury', user: '@emmaloves' },
  { id: 'reel-2', caption: 'Layered gold', user: '@sarahj' },
  { id: 'reel-3', caption: 'Gift ready', user: '@mariak' },
  { id: 'reel-4', caption: 'Date night', user: '@juliann' },
  { id: 'reel-5', caption: 'Minimal chic', user: '@anab' },
  { id: 'reel-6', caption: 'Golden hour', user: '@lucy' },
];

export default function UGCSection() {
  const containerRef = useRef(null);

  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[var(--charcoal)] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3"
        >
          As Seen On You
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl text-white"
        >
          The Velmora Woman
        </motion.h2>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex-shrink-0 w-56 md:w-64 aspect-[9/16] relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-${reel.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.7778'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p id={`ugc-${reel.id}-caption`} className="font-serif text-sm text-white italic">
                {reel.caption}
              </p>
              <p className="text-[10px] text-white/60 mt-1">{reel.user}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
