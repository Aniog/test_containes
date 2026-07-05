import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';

export default function UgcReels() {
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
    <section className="py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide">@velmora</h2>
        <p className="mt-2 text-sm text-warm-500 tracking-wide">How you wear it</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 pb-2"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] bg-warm-200 overflow-hidden group"
            data-strk-bg-id={`ugc-card-${item.id}`}
            data-strk-bg={`gold jewelry on ear neck close up warm light ${item.caption}`}
            data-strk-bg-ratio="9x16"
            data-strk-bg-width="500"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-cream-50 text-base italic leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
