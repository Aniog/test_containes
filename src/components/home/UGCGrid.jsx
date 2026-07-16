import React from 'react';
import { Instagram } from 'lucide-react';

const UGC_ITEMS = [
  { id: 1, caption: 'Everyday stacking', query: 'woman wearing gold earrings earrings lifestyle close up' },
  { id: 2, caption: 'The perfect gift', query: 'hands holding jewelry box gold necklace' },
  { id: 3, caption: 'Golden hours', query: 'woman neck wearing gold necklace sunlight' },
  { id: 4, caption: 'Details matter', query: 'close up gold ring on finger luxury' },
  { id: 5, caption: 'Ready for the night', query: 'elegant woman wearing gold jewelry evening' },
  { id: 6, caption: 'Minimalist charm', query: 'gold jewelry on white marble aesthetic' }
];

const UGCGrid = () => {
  return (
    <section className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="serif-caps text-sm mb-4">Follow our journey</h2>
          <h3 className="text-3xl font-serif">@VelmoraFineJewelry</h3>
        </div>
        <a href="#" className="hidden md:flex items-center space-x-2 text-stone-500 hover:text-stone-900 transition-colors">
          <Instagram size={20} />
          <span className="text-xs tracking-widest uppercase">Visit Instagram</span>
        </a>
      </div>

      <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-6 space-x-4 lg:space-x-6">
        {UGC_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group snap-start overflow-hidden"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              alt={item.caption}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p 
                id={`ugc-caption-${item.id}`}
                className="text-white font-serif italic text-lg leading-snug"
              >
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCGrid;
