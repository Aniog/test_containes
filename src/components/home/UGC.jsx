import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { Instagram } from 'lucide-react';

const ugcContent = [
  { id: 'ugc-1', query: '[ugc-title] aesthetic gold necklace worn on skin minimal', caption: 'Everyday layers. ✨' },
  { id: 'ugc-2', query: '[ugc-title] chunky gold huggies on ear natural light', caption: 'Never taking these off.' },
  { id: 'ugc-3', query: '[ugc-title] stacked gold rings on hand holding coffee', caption: 'Morning essentials.' },
  { id: 'ugc-4', query: '[ugc-title] gold pendant necklace golden hour light', caption: 'Chasing the sun. ☀️' },
  { id: 'ugc-5', query: '[ugc-title] multiple gold ear cuffs styled ear stack', caption: 'The perfect stack.' }
];

const UGC = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 id="ugc-title" className="font-heading text-4xl mb-2">SPOTTED IN VELMORA</h2>
          <p className="text-muted-foreground font-sans">Tag @velmorajewelry to be featured.</p>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors">
          <Instagram className="w-4 h-4" /> Follow Us
        </a>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto hide-scrollbar flex gap-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
      >
        {ugcContent.map((item) => (
          <div 
            key={item.id} 
            className="flex-none w-[280px] sm:w-[320px] aspect-[9/16] relative group overflow-hidden snap-center cursor-pointer"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img={item.query}
              data-strk-img-id={item.id}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Instagram style overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <Instagram className="w-5 h-5 mb-3 text-white/80" />
                <p className="font-heading text-xl">{item.caption}</p>
                <p className="text-sm font-sans tracking-wide text-white/80 mt-1">@velmorajewelry</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center sm:hidden px-4">
        <a href="#" className="flex items-center gap-2 text-sm tracking-widest uppercase font-medium">
          <Instagram className="w-4 h-4" /> Follow @velmorajewelry
        </a>
      </div>
    </section>
  );
};

export default UGC;
