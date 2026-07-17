import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-sand overflow-hidden">
      <div className="container-wide section-padding mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-3">Styled by You</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">As Worn by Our Community</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 border border-velmora-stone flex items-center justify-center hover:border-velmora-gold transition-colors">
              <ChevronLeft size={18} className="text-velmora-charcoal" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 border border-velmora-stone flex items-center justify-center hover:border-velmora-gold transition-colors">
              <ChevronRight size={18} className="text-velmora-charcoal" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-6 md:px-12 lg:px-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="aspect-[9/16] bg-velmora-stone relative overflow-hidden group">
              {/* Placeholder gradient simulating jewelry on skin */}
              <div className="absolute inset-0 bg-gradient-to-b from-velmora-bronze/30 via-velmora-sand/40 to-velmora-bronze/30" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-velmora-gold/30 blur-md" />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-velmora-ink/70 to-transparent">
                <p className="font-serif text-white text-sm italic">{item.caption}</p>
                <p className="text-white/60 text-[10px] tracking-wider uppercase mt-0.5">{item.product}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}