import React from 'react';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Everyday luxury" },
    { id: 2, caption: "The perfect gift" },
    { id: 3, caption: "Stacking favorites" },
    { id: 4, caption: "A touch of gold" },
    { id: 5, caption: "Elegance redefined" }
  ];

  return (
    <section className="py-24 bg-brand-beige overflow-hidden">
      <span id="ugc-context" className="hidden">woman wearing jewelry</span>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-3xl md:text-5xl italic">Worn by You</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group overflow-hidden snap-start"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-context] [ugc-${reel.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p id={`ugc-${reel.id}-caption`} className="text-white font-serif text-lg md:text-xl italic translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
