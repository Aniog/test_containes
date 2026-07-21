import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const UGC_DATA = [
  { id: 1, handle: '@sarah_j', text: 'Golden hour with Velmora.' },
  { id: 2, handle: '@elena_style', text: 'Elevated every day essentials.' },
  { id: 3, handle: '@mia_fine', text: 'Found my new signature huggies.' },
  { id: 4, handle: '@sophia_v', text: 'The shine is unmatched.' },
  { id: 5, handle: '@chloe_lux', text: 'Demure yet striking.' },
  { id: 6, handle: '@isabella_r', text: 'Obsessed with this texture.' },
];

const UGC = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-24 overflow-hidden border-t border-border">
      <div className="px-6 max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-serif mb-4">Seen on You</h2>
        <p className="text-muted-foreground uppercase tracking-widest text-[10px]">Tag #VelmoraJewels to be featured</p>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-8 px-6 scrollbar-hide no-scrollbar -mx-6 md:mx-auto md:max-w-[95%]"
      >
        {UGC_DATA.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] bg-muted group cursor-pointer overflow-hidden"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-text-${item.id}] [ugc-handle-${item.id}] gold jewelry model wearing skin close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              alt={`UGC by ${item.handle}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 p-6 text-white w-full space-y-1">
              <span id={`ugc-handle-${item.id}`} className="text-[10px] tracking-widest font-bold block">
                {item.handle}
              </span>
              <p id={`ugc-text-${item.id}`} className="font-serif italic text-sm md:text-base opacity-90 leading-relaxed">
                "{item.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGC;
