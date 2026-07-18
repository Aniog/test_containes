import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold earrings worn ear closeup' },
    { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered styling' },
    { id: 'ugc-3', caption: 'Stacked & styled', query: 'huggie earrings stacked gold' },
    { id: 'ugc-4', caption: 'Golden hour glow', query: 'jewelry golden hour model' },
    { id: 'ugc-5', caption: 'Minimal luxury', query: 'minimalist jewelry elegant' },
    { id: 'ugc-6', caption: 'Statement pieces', query: 'statement earrings luxury' },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">As Worn By You</h2>
          <p className="text-[#6B6560] font-light">Real moments, real beauty</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-[#E8E2DA]">
                <img
                  alt={reel.caption}
                  data-strk-img-id={`ugc-${reel.id}`}
                  data-strk-img={`[${reel.id}-caption] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p id={`${reel.id}-caption`} className="serif-heading text-white text-lg italic">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
