import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photoStrip = [
  { id: 'strip-mc017', titleId: 'strip-t1', title: 'Spirulina algae spiral microscopy', ratio: '2x3', width: 400 },
  { id: 'strip-mc018', titleId: 'strip-t2', title: 'Amoeba pseudopod microscopy', ratio: '2x3', width: 400 },
  { id: 'strip-mc019', titleId: 'strip-t3', title: 'Nematode worm soil microscopy', ratio: '2x3', width: 400 },
  { id: 'strip-mc020', titleId: 'strip-t4', title: 'Dinoflagellate bioluminescent ocean', ratio: '2x3', width: 400 },
  { id: 'strip-mc021', titleId: 'strip-t5', title: 'Slime mold network microscopy', ratio: '2x3', width: 400 },
];

const PhotoStripSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
          05 — More Specimens
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          The Endless<br />
          <span className="italic font-normal">Variety of Life</span>
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {photoStrip.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-56 md:w-72 overflow-hidden group">
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <img
              alt={item.title}
              className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id={item.id}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoStripSection;
