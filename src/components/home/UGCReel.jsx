import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">@velmorajewelry</p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium">Styled by You</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-charcoal overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`gold jewelry worn on ear neck closeup editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Customer style"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-400 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-sm italic leading-snug">"{post.caption}"</p>
              <p className="text-white/60 text-xs mt-1.5">{post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
