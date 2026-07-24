import React from 'react';
import { ugcItems } from '../../data/products';

const UgcRow = () => {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-8">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-2 block">
            #VelmoraStyle
          </span>
          <h2 className="text-heading text-espresso-900">
            As Seen On You
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4">
            {ugcItems.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-48 md:w-56 relative group"
              >
                <div className="aspect-[9/16] overflow-hidden rounded-lg bg-cream-200">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`ugc-${item.id}`}
                    data-strk-img={`[ugc-caption-${item.id}] Velmora jewelry`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p 
                    id={`ugc-caption-${item.id}`}
                    className="font-serif text-sm text-cream-50 tracking-wide"
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for scroll indication */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-cream-50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-cream-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
