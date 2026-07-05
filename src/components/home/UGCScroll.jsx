import React from 'react';
import { ugcContent } from '../../data/products';

const UGCScroll = () => {
  return (
    <section className="py-12 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center">
          Worn by You
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 md:px-8 animate-scroll">
          {[...ugcContent, ...ugcContent].map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-40 md:w-56"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-stone-200">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent flex items-end p-4">
                  <p className="font-serif text-cream text-sm italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default UGCScroll;