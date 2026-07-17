import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="caption mb-3">Styled by You</p>
            <h2 className="heading-lg text-velmora-charcoal">As Seen On</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-stone hover:border-velmora-charcoal hover:text-velmora-charcoal transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-stone hover:border-velmora-charcoal hover:text-velmora-charcoal transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              {/* 9:16 aspect card */}
              <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-b from-velmora-gold/10 to-velmora-charcoal/30" />

                {/* Caption overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent">
                  <p className="font-serif text-white text-lg italic leading-tight">
                    {item.caption}
                  </p>
                  <p className="text-[11px] text-white/60 tracking-wider uppercase mt-1.5">
                    {item.product}
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
