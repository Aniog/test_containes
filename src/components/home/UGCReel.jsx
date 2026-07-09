import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { caption: 'Everyday gold', bg: 'bg-velmora-base' },
  { caption: 'Stacked & layered', bg: 'bg-[#1f1a14]' },
  { caption: 'The perfect gift', bg: 'bg-[#1a1512]' },
  { caption: 'Warm tones', bg: 'bg-[#1e1913]' },
  { caption: 'Styled by you', bg: 'bg-[#1c1711]' },
  { caption: 'New arrivals', bg: 'bg-[#201b15]' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Styled by You</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {reels.map((reel, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[200px] md:w-[260px] cursor-pointer group"
            >
              <div className={`relative aspect-[9/16] ${reel.bg} overflow-hidden`}>
                {/* Abstract jewelry shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border border-velmora-gold/20 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                    <div className="absolute inset-4 rounded-full border border-velmora-gold/10" />
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/80 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-lg md:text-xl italic tracking-wide">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}