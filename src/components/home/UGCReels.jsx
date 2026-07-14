import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', desc: 'Woman wearing gold earrings close-up portrait', imgId: 'ugc-reel-1-j7x2m9', captionId: 'ugc-caption-1', descId: 'ugc-desc-1' },
  { id: 'reel-2', caption: 'Layered & loved', desc: 'Layered gold necklaces on woman neck', imgId: 'ugc-reel-2-k4n8p3', captionId: 'ugc-caption-2', descId: 'ugc-desc-2' },
  { id: 'reel-3', caption: 'Gift-worthy', desc: 'Gold jewelry gift box earrings necklace', imgId: 'ugc-reel-3-l1q5r7', captionId: 'ugc-caption-3', descId: 'ugc-desc-3' },
  { id: 'reel-4', caption: 'Golden hour', desc: 'Woman wearing gold hoop earrings sunset light', imgId: 'ugc-reel-4-m8s2t6', captionId: 'ugc-caption-4', descId: 'ugc-desc-4' },
  { id: 'reel-5', caption: 'Stacked huggies', desc: 'Multiple gold huggie earrings on ear', imgId: 'ugc-reel-5-n5u9v1', captionId: 'ugc-caption-5', descId: 'ugc-desc-5' },
  { id: 'reel-6', caption: 'Date night ready', desc: 'Woman wearing elegant gold drop earrings evening', imgId: 'ugc-reel-6-p3w7x4', captionId: 'ugc-caption-6', descId: 'ugc-desc-6' },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-10">
          Worn by You
        </h2>
      </div>
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 min-w-max">
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <span id={reel.descId} className="absolute w-px h-px overflow-hidden" aria-hidden="true">{reel.desc}</span>
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] [${reel.captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={reel.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
