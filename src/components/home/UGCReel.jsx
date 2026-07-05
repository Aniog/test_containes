import React from 'react';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const reels = [
    { 
      id: 1, 
      imgId: 'ugc-1',
      caption: 'Golden hour in our Aura Studs'
    },
    { 
      id: 2, 
      imgId: 'ugc-2',
      caption: 'The perfect dainty stack'
    },
    { 
      id: 3, 
      imgId: 'ugc-3',
      caption: 'Daily essentials'
    },
    { 
      id: 4, 
      imgId: 'ugc-4',
      caption: 'Vintage inspired textures'
    },
    { 
      id: 5, 
      imgId: 'ugc-5',
      caption: 'Statement huggies'
    },
    { 
      id: 6, 
      imgId: 'ugc-6',
      caption: 'Layered in gold'
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <span className="text-secondary/60 text-[10px] uppercase tracking-[0.5em] mb-2 block font-medium">As Seen On You</span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-light italic">Follow Our Journey</h2>
        </div>
        <a href="#" className="hidden md:block text-[10px] uppercase tracking-extrawide underline underline-offset-8 decoration-border hover:decoration-primary transition-all">
          @velmorajewelry
        </a>
      </div>

      <div id="ugc-reel" className="flex overflow-x-auto gap-4 px-6 md:px-12 no-scrollbar pb-8 snap-x">
        {reels.map((reel) => (
          <motion.div
            key={reel.id}
            className="relative flex-none w-[280px] aspect-[9/16] bg-secondary/10 group cursor-pointer snap-start overflow-hidden shadow-sm"
            whileHover={{ y: -5 }}
          >
            <img 
              data-strk-img-id={reel.imgId}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC" 
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <p id={`ugc-caption-${reel.id}`} className="font-serif text-white text-lg tracking-wide italic leading-snug">
                  "{reel.caption}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
