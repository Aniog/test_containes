import { useRef } from 'react';

const reels = [
  { id: 1, caption: 'Everyday gold', user: '@emmarose' },
  { id: 2, caption: 'Date night ready', user: '@sophial' },
  { id: 3, caption: 'Layered love', user: '@miachen' },
  { id: 4, caption: 'Minimal & chic', user: '@zoe.j' },
  { id: 5, caption: 'Gift to self', user: '@annak' },
  { id: 6, caption: 'Office glam', user: '@lilyw' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">As Seen On You</p>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white">The Velmora Woman</h2>
          </div>
          <span className="hidden md:block text-sm text-taupe">Scroll to explore</span>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={`https://placehold.co/560x996/1A1918/C8A97E?text=${encodeURIComponent(reel.caption)}`}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-serif text-lg text-warm-white italic leading-snug">
                {reel.caption}
              </p>
              <p className="text-xs text-warm-white/60 mt-2 font-sans">{reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
