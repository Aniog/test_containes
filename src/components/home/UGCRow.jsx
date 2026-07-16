import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';

const reelImages = [
  'https://images.unsplash.com/photo-1633810542437-03e8e8e5a3b2?w=400&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
  'https://images.unsplash.com/photo-1599643478518-a25e3a5c2e2a?w=400&q=80',
  'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  'https://images.unsplash.com/photo-1602752250015-528e5a20e5b7?w=400&q=80',
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velvet-50">
      <div className="text-center mb-10 md:mb-14 section-padding">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-warmgray-500 mb-3">As Seen On You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-noir">Styled by Our Community</h2>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 flex items-center justify-center shadow-sm hover:bg-cream transition-colors hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-noir" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream/90 flex items-center justify-center shadow-sm hover:bg-cream transition-colors hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-noir" />
        </button>

        {/* Reel strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-16 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcReels.map((reel, i) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] md:w-[220px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[9/16] overflow-hidden relative group">
                <img
                  src={reelImages[i % reelImages.length]}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-cream italic leading-snug">{reel.caption}</p>
                  <p className="font-sans text-[10px] text-cream/70 tracking-wider uppercase mt-1">{reel.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}