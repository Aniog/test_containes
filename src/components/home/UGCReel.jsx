import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'ugc-1', text: 'Golden hour with the Golden Sphere Huggies.' },
    { id: 'ugc-2', text: 'Stunning crystal details on the Aura Jewels.' },
    { id: 'ugc-3', text: 'The Royal Heirloom Set in its natural habitat.' },
    { id: 'ugc-4', text: 'Dainty layers for everyday elegance.' },
    { id: 'ugc-5', text: 'Breathtaking floral crystal necklace.' },
    { id: 'ugc-6', text: 'Chasing sunlight in Velmora Fine.' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-velmora-stone overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-sans font-semibold mb-2">Social Journal</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Worn by You</h2>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 px-6 md:px-12 scrollbar-hide no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div key={reel.id} className="relative w-64 md:w-72 aspect-[9/16] shrink-0 bg-velmora-dark/5 overflow-hidden group">
            <img
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`[${reel.id}-caption] jewelry lifestyle worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                id={`${reel.id}-caption`}
                className="font-serif text-white text-sm leading-relaxed italic"
              >
                "{reel.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
