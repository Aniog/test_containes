import React from 'react';
import { motion } from 'framer-motion';

const Reels = () => {
  const cards = [
    { id: 1, caption: 'Golden Hour' },
    { id: 2, caption: 'Everyday Essentials' },
    { id: 3, caption: 'The Statement Piece' },
    { id: 4, caption: 'Layered Perfection' },
    { id: 5, caption: 'Minimalist Muse' },
  ];

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex items-center justify-between">
        <h2 className="text-2xl font-serif">Seen on you</h2>
        <span className="text-[10px] uppercase tracking-widest text-muted">@VelmoraFineJewelry</span>
      </div>

      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto no-scrollbar pb-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group"
          >
            <div
              className="absolute inset-0 z-0 bg-zinc-200"
              data-strk-bg-id={`reel-bg-${card.id}`}
              data-strk-bg={`[reel-caption-${card.id}] girl wearing gold jewelry aesthetic model`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            >
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            </div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <span 
                id={`reel-caption-${card.id}`}
                className="text-white text-lg font-serif italic opacity-90 group-hover:opacity-100 transition-opacity"
              >
                {card.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
