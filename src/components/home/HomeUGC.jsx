import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGC_ITEMS = [
  { id: 1, caption: "Golden Hour Glow", user: "@sarah.m" },
  { id: 2, caption: "Everyday Essentials", user: "@emma_lifestyle" },
  { id: 3, caption: "Effortless Elegance", user: "@mia.fine" },
  { id: 4, caption: "The Perfect Gift", user: "@claire_jewelry" },
  { id: 5, caption: "Layered to Perfection", user: "@sophie.a" },
  { id: 6, caption: "Minimalist Magic", user: "@isabella.j" },
];

const HomeUGC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-center">
        <div className="flex flex-col gap-2">
           <h2 className="text-3xl font-serif tracking-tight">Seen on You</h2>
           <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40">Tag @Velmora to be featured</p>
        </div>
      </div>

      <div 
        className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-10 scrollbar-hide no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {UGC_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0 w-64 aspect-[9/16] bg-[#E5E5E5] group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-image-${item.id}`}
              data-strk-img={`woman wearing gold jewelry lifestyle [ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[1.5s] group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
            />
            
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <p id={`ugc-caption-${item.id}`} className="text-white font-serif text-lg italic mb-2">"{item.caption}"</p>
               <p className="text-white/70 text-[10px] uppercase tracking-widest">{item.user}</p>
            </div>
            
            <div className="absolute bottom-6 left-6 text-white text-[10px] uppercase tracking-[0.3em] font-medium group-hover:hidden transition-opacity">
              {item.user}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeUGC;
