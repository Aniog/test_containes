import { useRef } from 'react';
import { Heart } from 'lucide-react';

const ugcItems = [
  { caption: 'Obsessed with my new hoops', handle: '@sophie_m', color: 'from-ink-800 to-ink-900' },
  { caption: 'Everyday elegance', handle: '@emma_k', color: 'from-ink-900 to-ink-950' },
  { caption: 'Gift for my bestie', handle: '@julia_c', color: 'from-ink-800 via-ink-900 to-ink-950' },
  { caption: 'The necklace of the season', handle: '@claire_r', color: 'from-ink-900 to-ink-800' },
  { caption: 'Gold never goes out of style', handle: '@mia_t', color: 'from-ink-950 to-ink-900' },
  { caption: 'Stacking my favorites', handle: '@lily_w', color: 'from-ink-800 to-ink-950' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 lg:py-20 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gold-400/80 text-xs uppercase tracking-widestplus font-medium">As seen on</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 font-light mt-2 tracking-wide">
              Worn by You
            </h2>
          </div>
          <Heart className="w-4 h-4 text-cream-50/40" />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2"
      >
        {ugcItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 sm:w-56 aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
          >
            {/* Card background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
              {/* Decorative gold ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-gold-500/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-gold-400/30" />
            </div>

            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <p className="text-cream-50 text-sm font-serif italic leading-snug">
                "{item.caption}"
              </p>
              <p className="text-cream-50/60 text-xs mt-2 tracking-wide">{item.handle}</p>
            </div>

            {/* Top play button hint */}
            <div className="absolute top-3 right-3">
              <div className="w-6 h-6 rounded-full border border-cream-50/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-cream-50/60 border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}