import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"My everyday earrings" — @sarah.m', query: 'woman wearing gold earrings ear closeup instagram style' },
  { id: 'ugc-2', caption: '"Perfect gift for her" — @emma.l', query: 'woman wearing gold necklace neck jewelry lifestyle' },
  { id: 'ugc-3', caption: '"Obsessed with these huggies" — @jess.r', query: 'woman wearing gold huggie earrings ear selfie' },
  { id: 'ugc-4', caption: '"Layered perfection" — @mia.k', query: 'woman wearing layered gold necklaces jewelry flatlay' },
  { id: 'ugc-5', caption: '"The set I keep reaching for" — @ava.w', query: 'woman wearing gold jewelry set earrings necklace portrait' },
  { id: 'ugc-6', caption: '"Gold that goes with everything" — @lily.c', query: 'woman wearing gold earrings jewelry mirror selfie' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-12 md:py-16 overflow-hidden" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
      <div className="mb-8 px-4 md:px-8">
        <p className="text-xs tracking-[0.2em] uppercase text-center mb-2" style={{ color: 'var(--velmora-accent)' }}>
          As Worn By You
        </p>
        <h2 className="velmora-heading text-2xl md:text-3xl text-center" style={{ color: 'var(--velmora-text)' }}>
          The Velmora Edit
        </h2>
      </div>

      <div ref={containerRef} className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 relative group"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* 9:16 card */}
            <div className="aspect-[9/16] rounded-lg overflow-hidden relative" style={{ backgroundColor: 'var(--velmora-dark)' }}>
              <img
                alt={item.caption}
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xs italic leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
