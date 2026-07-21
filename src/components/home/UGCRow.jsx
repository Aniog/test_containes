import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { caption: 'Golden hour with the Aura cuff', handle: '@_sophiam', id: '1' },
  { caption: 'Stacked & styled for brunch', handle: '@oliviak', id: '2' },
  { caption: 'The Flora necklace changed everything', handle: '@jessicale', id: '3' },
  { caption: 'Everyday glow with Sphere huggies', handle: '@maria.r', id: '4' },
  { caption: 'Date night heirloom set moment', handle: '@emma.w', id: '5' },
  { caption: 'Layered textures, timeless vibe', handle: '@chloe.t', id: '6' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-sand">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">Styled by You</h2>
          <p className="text-velmora-warmgray text-sm">Tag <span className="text-velmora-gold font-medium">@velmorafine</span> to be featured</p>
        </div>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 text-velmora-charcoal" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 text-velmora-charcoal" />
        </button>

        {/* Reels strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-5 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
            >
              <div className="aspect-[9/16] bg-gradient-to-b from-velmora-goldlight/30 via-velmora-stone/20 to-velmora-charcoal/40 rounded-sm overflow-hidden relative group cursor-pointer">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-velmora-warmgray/30 text-xs italic">
                    reel {reel.id}
                  </span>
                </div>
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-velmora-deep/80 via-velmora-deep/30 to-transparent">
                  <p className="text-white/90 text-xs leading-relaxed font-light italic">{reel.caption}</p>
                  <p className="text-white/50 text-[10px] mt-1">{reel.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
