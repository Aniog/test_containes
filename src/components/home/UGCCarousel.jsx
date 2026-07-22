import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold jewelry worn on ear close up model' },
  { id: 'ugc-2', caption: 'Layered & loved', query: 'gold necklace layered on neck model' },
  { id: 'ugc-3', caption: 'Statement huggies', query: 'gold huggie earrings on model ear' },
  { id: 'ugc-4', caption: 'Golden hour glow', query: 'gold jewelry woman neck collarbone warm light' },
  { id: 'ugc-5', caption: 'Perfectly paired', query: 'matching earrings necklace set on model' },
  { id: 'ugc-6', caption: 'Effortless style', query: 'gold ear cuff styled on model' },
  { id: 'ugc-7', caption: 'Gift-worthy', query: 'jewelry gift box luxury packaging' },
  { id: 'ugc-8', caption: 'Stack & shine', query: 'stacked gold rings jewelry close up' },
];

export default function UGCCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-cream-dark overflow-hidden">
      <div className="container-wide mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-accent mb-2">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-deep-base">
              As Seen on You
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-48 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-base/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm md:text-base text-cream leading-snug">
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold-accent/0 group-hover:bg-gold-accent/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
