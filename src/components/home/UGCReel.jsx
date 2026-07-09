import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden Hour Glow', query: 'gold jewelry ear close-up warm light editorial' },
  { id: 'ugc-2', caption: 'Stack & Layer', query: 'layered gold necklaces woman neck editorial warm tone' },
  { id: 'ugc-3', caption: 'Everyday Elegance', query: 'gold huggie earrings on ear minimalist warm light' },
  { id: 'ugc-4', caption: 'Gift of Gold', query: 'gold jewelry gift box elegant luxury warm background' },
  { id: 'ugc-5', caption: 'Statement Piece', query: 'crystal necklace on woman collarbone editorial' },
  { id: 'ugc-6', caption: 'Curated Ear', query: 'multiple gold earrings ear stack close-up editorial' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velvet-950 overflow-hidden">
      <div className="velmora-container mb-8 md:mb-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="velmora-overline mb-2 text-gold-400">Inspiration</p>
            <h2 className="font-serif text-heading-3 md:text-heading-2 text-cream">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-sans tracking-widest uppercase text-velvet-400 hover:text-gold transition-colors"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 md:w-48 aspect-[9/16] rounded-sm overflow-hidden group"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] gold jewelry editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
