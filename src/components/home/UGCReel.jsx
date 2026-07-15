import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', search: 'woman wearing gold hoop earrings portrait warm light' },
  { id: 'ugc-2', caption: 'Layered perfection', search: 'gold necklace layering on woman neck close up' },
  { id: 'ugc-3', caption: 'Huggie season', search: 'gold huggie earrings on woman ear close up jewelry' },
  { id: 'ugc-4', caption: 'Statement moment', search: 'woman wearing gold drop earrings fashion portrait' },
  { id: 'ugc-5', caption: 'Everyday elegance', search: 'minimalist gold jewelry on woman collarbone area' },
  { id: 'ugc-6', caption: 'Gift-worthy', search: 'luxury jewelry gift box opened gold pieces' },
  { id: 'ugc-7', caption: 'Ear stack goals', search: 'multiple gold earrings ear stack woman fashion' },
];

export default function UGCReel() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-section-sm md:py-section bg-cream" ref={containerRef}>
      <div className="section-container">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold text-center mb-2">
          @VelmoraJewelry
        </p>
        <h2 className="section-title">Styled by You</h2>
        <p className="section-subtitle">
          See how our community wears their Velmora pieces.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 snap-start w-[200px] md:w-[240px] relative group"
          >
            <div className="aspect-[9/16] rounded-sm overflow-hidden bg-charcoal/5">
              <img
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.id}
                data-strk-img={item.search}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-ivory italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
