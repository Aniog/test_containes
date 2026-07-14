import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: "@sarah.style wearing the Vivid Aura Ear Cuff", imgId: "ugc-img-1" },
    { id: 'ugc-2', caption: "Weekend layers featuring the Majestic Flora Nectar", imgId: "ugc-img-2" },
    { id: 'ugc-3', caption: "Golden hour with the Hovering Sphere Huggies", imgId: "ugc-img-3" },
    { id: 'ugc-4', caption: "@chic.minimalist styling the Amber Lace collection", imgId: "ugc-img-4" },
    { id: 'ugc-5', caption: "Everyday essentials.", imgId: "ugc-img-5" },
    { id: 'ugc-6', caption: "The Royal Heirloom Set in its element.", imgId: "ugc-img-6" },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#f8f6f3] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <h2 id="ugc-title" className="text-center font-serif text-2xl md:text-3xl font-light tracking-wide mb-12">
          As Seen On You
        </h2>
        
        {/* Hide scrollbar but allow horizontal scroll */}
        <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {ugcItems.map((item) => (
            <div 
              key={item.id} 
              className="flex-none w-[200px] md:w-[280px] lg:w-[320px] aspect-[9/16] relative snap-center group cursor-pointer overflow-hidden rounded-md"
            >
              <img
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p id={`${item.id}-caption`} className="text-white font-serif text-sm md:text-base font-light tracking-wide line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center text-white/80 text-xs tracking-widest uppercase">
                  <span>Shop Look</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetContent={{__html: `
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
}