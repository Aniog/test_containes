import { useRef } from 'react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const bgGradients = [
    'from-amber-800/90 to-stone-900',
    'from-rose-800/70 to-stone-900',
    'from-yellow-800/70 to-stone-900',
    'from-orange-800/70 to-stone-900',
    'from-amber-900/80 to-stone-900',
    'from-rose-900/60 to-stone-900',
  ];

  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-dark-900 text-center">
          Styled by You
        </h2>
        <p className="text-muted text-sm text-center mt-2 font-sans tracking-wide">
          Tag @velmora to be featured
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-none w-40 sm:w-48 aspect-[9/16] snap-start relative overflow-hidden group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${bgGradients[i % bgGradients.length]}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-gold-300/40 text-2xl italic">VELMORA</span>
              </div>
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-white text-sm italic leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
