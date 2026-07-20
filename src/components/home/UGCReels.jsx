import React, { useRef, useEffect } from 'react';

const reels = [
  { id: 'r1', caption: 'Everyday gold', user: '@elenam' },
  { id: 'r2', caption: 'Minimal but bold', user: '@sophiaw' },
  { id: 'r3', caption: 'Gift-worthy', user: '@amara.k' },
  { id: 'r4', caption: 'Layered up', user: '@nina.b' },
  { id: 'r5', caption: 'Office to dinner', user: '@clairej' },
  { id: 'r6', caption: 'Self-love ritual', user: '@miriam' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

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
    <section className="py-14 sm:py-20 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-superwide uppercase text-gold-400 mb-2">
              Styled by You
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              The Velmora Reel
            </h2>
          </div>
          <p className="hidden sm:block text-xs text-cream-300/60 tracking-wider uppercase">
            Scroll to explore
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[9rem] sm:w-[11rem] aspect-[9/16] rounded-lg overflow-hidden snap-start cursor-grab active:cursor-grabbing group"
          >
            <img
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={`gold jewelry on ear neck ${reel.caption} demi-fine`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/10 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-ink-950/80 to-transparent">
              <p className="font-serif text-sm text-white italic leading-snug">
                {reel.caption}
              </p>
              <p className="text-[10px] text-cream-200/70 mt-1">{reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
