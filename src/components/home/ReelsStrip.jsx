import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const reels = [
  { id: 1, caption: 'Everyday gold moments', img: 'https://placehold.co/400x700/d4af37/ffffff?text=Velmora' },
  { id: 2, caption: 'Stacked and stunning', img: 'https://placehold.co/400x700/e6c875/ffffff?text=Velmora' },
  { id: 3, caption: 'Gift-worthy details', img: 'https://placehold.co/400x700/c5a028/ffffff?text=Velmora' },
  { id: 4, caption: 'Minimal, maximal impact', img: 'https://placehold.co/400x700/d4af37/ffffff?text=Velmora' },
  { id: 5, caption: 'Worn close to the heart', img: 'https://placehold.co/400x700/e6c875/ffffff?text=Velmora' },
  { id: 6, caption: 'Sunlit gold layers', img: 'https://placehold.co/400x700/c5a028/ffffff?text=Velmora' },
];

export default function ReelsStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-velmora-bg py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-accent mb-2">On You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Styled by Velmora</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reels.map((reel) => (
          <motion.div
            key={reel.id}
            className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={reel.img}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-white italic">{reel.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
