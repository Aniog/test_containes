import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcReels = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3d3229] mb-10">As Seen On</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`ugc-${item.id}`}
                data-strk-bg={`[ugc-${item.id}-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
                style={{ backgroundColor: '#3d3229' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p id={`ugc-${item.id}-title`} className="font-serif text-xs text-white/90 tracking-wide">
                  {item.title}
                </p>
                <p className="text-[10px] text-white/60 mt-1">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
