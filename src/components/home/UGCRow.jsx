import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance ✨', query: 'woman wearing gold earrings ear closeup' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'woman wearing gold layered necklace' },
  { id: 'ugc-3', caption: 'Stacked & styled', query: 'gold huggie earrings stacked ear styling' },
  { id: 'ugc-4', caption: 'Golden hour glow', query: 'woman wearing gold jewelry sunset' },
  { id: 'ugc-5', caption: 'Minimal but make it luxe', query: 'minimal gold jewelry woman styling' },
  { id: 'ugc-6', caption: 'The perfect gift', query: 'gold jewelry gift box unboxing' },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">As Worn By You</h2>
        <p className="section-subtitle">Tag @velmorajewelry to be featured</p>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 snap-start relative group"
            >
              <div className="aspect-[9/16] overflow-hidden bg-velmora-gray">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.id}-caption] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p id={`${item.id}-caption`} className="text-white font-serif text-sm p-4 italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
