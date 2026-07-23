import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ugcItems = [
  { caption: 'Golden hour with my Majestic Flora', handle: '@sophia.m' },
  { caption: 'Everyday elegance — these huggies never leave my ear', handle: '@elena.ra' },
  { caption: 'The perfect gift set for my sister', handle: '@claire.d' },
  { caption: 'Stacked and styled my way', handle: '@maria.k' },
  { caption: 'New season, new staples', handle: '@olivia.t' },
  { caption: 'Date night shimmer', handle: '@isabelle.f' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wider">
            As Seen On
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 hover:shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 hover:shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 lg:px-16 xl:px-24 pb-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[9/16] bg-gradient-to-b from-rose via-warm-white to-rose flex items-center justify-center mb-3 overflow-hidden rounded-sm">
                <div className="text-center px-4">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gold-pale/50 flex items-center justify-center">
                    <span className="text-gold text-xl">✦</span>
                  </div>
                  <span className="text-[10px] text-taupe/50 uppercase tracking-[0.15em]">
                    Velmora Style
                  </span>
                </div>
              </div>
              <p className="text-sm text-espresso/80 italic leading-relaxed mb-1 font-serif">
                &ldquo;{item.caption}&rdquo;
              </p>
              <p className="text-[11px] text-taupe">{item.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}