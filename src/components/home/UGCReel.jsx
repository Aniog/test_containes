import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden Hour Glow', query: 'woman wearing gold earrings golden hour warm light' },
  { id: 'ugc-2', caption: 'Stack & Layer', query: 'layered gold necklaces on neck closeup elegant' },
  { id: 'ugc-3', caption: 'Everyday Elegance', query: 'gold huggie earrings on ear closeup warm skin' },
  { id: 'ugc-4', caption: 'Gift Her Joy', query: 'woman opening jewelry gift box gold earrings' },
  { id: 'ugc-5', caption: 'Ear Party', query: 'multiple gold ear piercings curated ear stack' },
  { id: 'ugc-6', caption: 'Sunset Styling', query: 'gold jewelry on woman at sunset warm editorial' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title text-2xl md:text-3xl mb-2">As Seen On You</h2>
            <p className="section-subtitle">#VelmoraStyle</p>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-40 md:w-48 aspect-[9/16] overflow-hidden group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm md:text-base text-sand-50 tracking-wide">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
