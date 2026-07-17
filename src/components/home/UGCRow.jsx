import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&h=700&fit=crop',
];

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight">As Seen On</h2>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-warmwhite/90 shadow-md flex items-center justify-center text-deepbrown hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-warmwhite/90 shadow-md flex items-center justify-center text-deepbrown hover:text-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {ugcItems.map((item, i) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[180px] md:w-[220px] scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-sand/20">
                  <img
                    src={ugcImages[i]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepbrown/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-sm text-white tracking-wide italic">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
