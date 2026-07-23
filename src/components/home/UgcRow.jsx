import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  const images = [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    'https://images.unsplash.com/photo-1599643478518-a86e2dc20736?w=400&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
  ];

  return (
    <section className="py-12 md:py-20 bg-base text-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-8">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">As Worn By You</p>
        <h2 className="font-serif text-3xl md:text-4xl">Tag @velmora</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 scrollbar-hide">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] bg-base-muted overflow-hidden group cursor-pointer"
          >
            <img
              src={images[index]}
              alt={item.caption}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-[10px] font-medium text-white/90 leading-snug">{item.caption}</p>
              <p className="text-[10px] text-white/60 mt-1">{item.handle}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
