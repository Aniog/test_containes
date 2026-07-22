import React from 'react';
import { motion } from 'framer-motion';

const UGCRow = () => {
  const ugcItems = [
    { id: 'ugc-1', caption: 'Golden hour favorites.' },
    { id: 'ugc-2', caption: 'The perfect dainty stack.' },
    { id: 'ugc-3', caption: 'Everyday elegance.' },
    { id: 'ugc-4', caption: 'Necklace of my dreams.' },
    { id: 'ugc-5', caption: 'Golden details.' },
    { id: 'ugc-6', caption: 'Radiating luxury.' },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="px-4 md:px-8 mb-12">
        <h2 className="text-2xl font-serif text-[#1A1A1A]">Seen on You</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-2 font-semibold">@VELMORAFINE</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-10 no-scrollbar select-none">
        {ugcItems.map((item, index) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] bg-neutral-200 relative group overflow-hidden shadow-sm"
          >
            <img 
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`aesthetic woman wearing jewelry ${item.caption} editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-serif text-lg leading-tight italic">
                "{item.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
