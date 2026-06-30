import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UGCRow = () => {
  return (
    <section className="py-16 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 text-center">As Seen On</h2>
        <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-charcoal-800 rounded-sm overflow-hidden relative">
              <img
                src={`https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80`}
                alt={item.text}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-cream-50/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={18} className="text-charcoal-900 ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-cream-50 text-sm italic leading-snug">
                  "{item.text}"
                </p>
                <p className="text-cream-300 text-xs mt-2 tracking-wide">{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
