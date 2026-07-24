import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings editorial warm tone jewelry' },
  { id: 'ugc-2', caption: 'Stacked & styled', query: 'woman wearing layered gold necklaces editorial warm lighting' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'gold huggie earrings on model close up editorial jewelry' },
  { id: 'ugc-4', caption: 'Effortless charm', query: 'woman wearing gold ear cuff editorial warm tone' },
  { id: 'ugc-5', caption: 'Signature sparkle', query: 'gold crystal necklace on model editorial jewelry photography' },
  { id: 'ugc-6', caption: 'Day to night', query: 'gold hoop earrings on woman warm editorial tone' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-ink font-light tracking-wide">
            As Seen On You
          </h2>
          <div className="hairline w-24 mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-${item.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/60 via-transparent to-transparent" />
              <p
                id={`ugc-${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}