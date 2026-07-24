import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Instagram } from 'lucide-react';

const UgcRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const items = [
    { id: 1, handle: '@sarahstyle', caption: 'Everyday layers 💫' },
    { id: 2, handle: '@emily_ward', caption: 'The perfect hoops' },
    { id: 3, handle: '@jessicak', caption: 'Golden hour' },
    { id: 4, handle: '@minimalist.co', caption: 'In the details' },
    { id: 5, handle: '@stylebyannie', caption: 'Stacked' }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif mb-2">Spotted on You</h2>
        <a href="#" className="inline-flex items-center text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
          <span className="mr-2">@VELMORAJEWELRY</span>
          <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
            <Instagram className="h-3 w-3" />
          </div>
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 pt-4 px-4 snap-x hide-scrollbar">
        {/* Creating an infinite scrolling visual effect by adding some extra copies if needed, but simple scroll is fine too */}
        {items.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="flex-none w-[260px] md:w-[320px] aspect-[9/16] relative group rounded-[4px] overflow-hidden snap-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt={`Worn by ${item.handle}`}
              data-strk-img-id={`ugc-reel-${item.id}`}
              data-strk-img={`[ugc-title] jewelry lifestyle editorial worn by model trending`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="flex justify-end">
                <Instagram className="text-white drop-shadow-md h-5 w-5" />
              </div>
              <div>
                <p className="text-white font-medium text-sm tracking-wide">{item.handle}</p>
                <p className="text-white/80 font-serif italic text-lg mt-1">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate for visual continuous scroll feeling if on desktop */}
        {items.slice(0, 2).map((item, idx) => (
          <div 
            key={`dup-${item.id}-${idx}`} 
            className="hidden lg:block flex-none w-[260px] md:w-[320px] aspect-[9/16] relative group rounded-[4px] overflow-hidden snap-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt={`Worn by ${item.handle}`}
              data-strk-img-id={`ugc-reel-dup-${item.id}`}
              data-strk-img={`[ugc-title] jewelry lifestyle editorial photography`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="flex justify-end">
                <Instagram className="text-white drop-shadow-md h-5 w-5" />
              </div>
              <div>
                <p className="text-white font-medium text-sm tracking-wide">{item.handle}</p>
                <p className="text-white/80 font-serif italic text-lg mt-1">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default UgcRow;
