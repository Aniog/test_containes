import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '../../data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-3">@velmorajewelry</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">Styled by You</h2>
          </div>
          <p className="hidden md:block text-xs font-sans uppercase tracking-[0.1em] text-velmora-lightgray">
            Drag to explore
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-10 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div key={post.id} className="flex-shrink-0 w-[180px] md:w-[240px] relative group">
            <div className="aspect-[9/16] bg-velmora-charcoal overflow-hidden relative">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[${post.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-transparent to-transparent" />
              <p
                id={`${post.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-white italic"
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
