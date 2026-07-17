import React from 'react';
import { motion } from 'framer-motion';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: "Perfect Daily Stack" },
    { id: 2, caption: "Bridal Radiance" },
    { id: 3, caption: "Modern Minimal" },
    { id: 4, caption: "Effortless Glow" },
    { id: 5, caption: "The Gift of Gold" },
    { id: 6, caption: "Signature Classics" },
  ];

  return (
    <section className="py-24 bg-velmora-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
         <h2 className="text-3xl md:text-4xl font-serif italic text-center md:text-left">Seen On You</h2>
         <p className="hidden md:block text-[10px] uppercase tracking-widest text-velmora-muted">Tag @VelmoraJewelry to be featured</p>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 scrolling-touch">
        {reels.map((reel, idx) => (
          <motion.div 
            key={reel.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-velmora-primary overflow-hidden rounded-sm group cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg={`gold jewelry worn on model ear neck editorial aesthetic ${reel.caption}`}
              data-strk-bg-id={`ugc-reel-${reel.id}`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            {/* Soft overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-white font-serif italic text-xl drop-shadow-md">
                "{reel.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default UGCReels;
