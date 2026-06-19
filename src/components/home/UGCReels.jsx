import { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="bg-ink-900 py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs tracking-[0.35em] uppercase text-gold-400 font-medium mb-3">
          Styled by You
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-cream-50">#VelmoraWomen</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-cream-100 italic leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
