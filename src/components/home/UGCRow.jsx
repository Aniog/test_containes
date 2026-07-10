import React, { useRef, useEffect, useState } from 'react';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setIsScrolling(true);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="container-main mb-8">
        <div className="text-center">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            @velmorajewelry
          </span>
          <h2 className="font-serif text-section text-white">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-52 md:w-64 scroll-snap-align-start"
            style={{
              scrollSnapAlign: 'start',
            }}
          >
            <div className="relative aspect-[9/16] overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm italic leading-relaxed">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Card */}
        <div
          className="flex-shrink-0 w-52 md:w-64 scroll-snap-align-start"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="relative aspect-[9/16] bg-gold/10 border border-gold/30 flex flex-col items-center justify-center p-6 text-center">
            <span className="font-sans text-xs uppercase tracking-widest text-gold mb-2">
              Share Your Style
            </span>
            <h3 className="font-serif text-white text-lg mb-4">
              Tag us @velmorajewelry
            </h3>
            <p className="text-white/60 text-sm">
              Get featured in our feed
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Fade Edges (desktop) */}
      <div className="hidden md:block absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-charcoal to-transparent pointer-events-none" />
      <div className="hidden md:block absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-charcoal to-transparent pointer-events-none" />
    </section>
  );
}
