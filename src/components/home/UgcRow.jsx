import React from 'react';
import { ugcItems } from '@/lib/data';

const UgcRow = () => {
  return (
    <section className="py-24 bg-background">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif mb-2">As Seen On You</h2>
          <p className="text-xs uppercase tracking-ultra-wide text-muted-foreground">Tag @VELMORA for a chance to be featured</p>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-ultra-wide font-medium border-b border-stone-900 pb-1 hover:opacity-70 transition-opacity hidden md:block">
          Visit Instagram
        </a>
      </div>

      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-6 md:px-12">
        {ugcItems.map((item) => (
          <div key={item.id} className="relative group shrink-0 w-[240px] md:w-[320px] aspect-[9/16] bg-secondary overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              data-strk-img-id={`ugc-img-${item.id}`}
              data-strk-img="woman wearing gold earrings necklaces closeup vertical editorial"
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-sm font-serif italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
