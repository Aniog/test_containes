import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop',
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-dark overflow-hidden">
      <div className="section-padding mb-8 md:mb-12 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
            Styled by You
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar pl-6 md:pl-12 lg:pl-20 xl:pl-28 pr-6"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] bg-velmora-charcoal overflow-hidden group"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn ear neck woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={ugcImages[item.id - 1] || ugcImages[0]}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-lg text-white/90 italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
