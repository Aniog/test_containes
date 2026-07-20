import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    query: 'woman wearing gold earrings closeup ear jewelry',
    caption: '"These huggies are everything" — @sarah.m',
  },
  {
    id: 'ugc-2',
    query: 'woman wearing gold necklace jewelry portrait',
    caption: '"Layered perfection" — @emma.l',
  },
  {
    id: 'ugc-3',
    query: 'woman wearing gold drop earrings jewelry',
    caption: '"Obsessed with the filigree detail" — @olivia.r',
  },
  {
    id: 'ugc-4',
    query: 'woman wearing gold jewelry set elegant',
    caption: '"The gift set was stunning" — @jess.k',
  },
  {
    id: 'ugc-5',
    query: 'woman wearing gold ear cuff jewelry closeup',
    caption: '"My new everyday staple" — @mia.t',
  },
  {
    id: 'ugc-6',
    query: 'woman wearing gold pendant necklace jewelry',
    caption: '"So delicate and beautiful" — @ava.w',
  },
];

const UGCRow = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-3">
          As Worn By You
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-4" />
        <p className="text-text-secondary text-sm text-center max-w-md mx-auto">
          Real women, real moments. Tag @velmorajewelry to be featured.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-background overflow-hidden rounded-sm">
              <img
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer wearing Velmora jewelry"
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent p-4 pt-12">
                <p className="font-serif text-dark-text text-sm italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
