import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { caption: 'Morning light, golden huggies — @olivia.r', bgColor: '#D5CDC1' },
  { caption: 'Sunday stack ft. the ear cuff — @sophia.k', bgColor: '#C8BFB3' },
  { caption: 'Date night, heirloom set — @priya.m', bgColor: '#D5CDC1' },
  { caption: 'Never taking these off — @emma.w', bgColor: '#BFB5A8' },
  { caption: 'Golden hour glow — @lucia.j', bgColor: '#C8BFB3' },
  { caption: 'Layer game strong — @maya.t', bgColor: '#D5CDC1' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-stone-lighter">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide">
            As Seen On
          </h2>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 items-center justify-center rounded-full shadow-md hover:bg-cream transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide px-2 pb-4"
          >
            {ugcItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[180px] lg:w-[220px]">
                <div
                  className="aspect-[9/16] relative overflow-hidden group"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="product-name text-[10px] text-taupe/50 tracking-[0.25em] uppercase">
                      9:16
                    </span>
                  </div>
                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/60 to-transparent p-4 pt-12">
                    <p className="text-cream text-xs font-serif italic leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 items-center justify-center rounded-full shadow-md hover:bg-cream transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
