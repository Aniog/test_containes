import React from 'react';
import { Play } from 'lucide-react';

const UGCReels = () => {
  const reels = [
    { id: 1, title: 'Golden Hour Glow', handle: '@sarah_m' },
    { id: 2, title: 'Office to Dinner', handle: '@emily_style' },
    { id: 3, title: 'Weekend Brunch', handle: '@jessica_looks' },
    { id: 4, title: 'Date Night Ready', handle: '@olivia_g' },
    { id: 5, title: 'Minimalist Layers', handle: '@ava_j' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fafaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-2 tracking-wide">
            As Seen On
          </h2>
          <p className="text-sm text-[#5c5c5c]">Follow us @velmora for daily inspiration</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-40 md:w-48 group cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-[#e5e5e5] rounded-lg overflow-hidden mb-2">
                <img
                  src={`https://placehold.co/300x533/e5e5e5/5c5c5c?text=${encodeURIComponent(reel.title)}`}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={18} className="text-[#1a1a1a] ml-0.5" fill="#1a1a1a" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate">{reel.title}</p>
                  <p className="text-white/80 text-[10px]">{reel.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReels;
