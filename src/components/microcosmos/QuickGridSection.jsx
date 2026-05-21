import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const quickImages = [
  { id: 'quick-01', imgId: 'quick-img-q1r2s3', label: 'Bacteria Colony', ratio: '1x1', width: 300 },
  { id: 'quick-02', imgId: 'quick-img-t4u5v6', label: 'Amoeba', ratio: '1x1', width: 300 },
  { id: 'quick-03', imgId: 'quick-img-w7x8y9', label: 'Spirogyra Algae', ratio: '1x1', width: 300 },
  { id: 'quick-04', imgId: 'quick-img-z0a1b2', label: 'Hydra', ratio: '1x1', width: 300 },
  { id: 'quick-05', imgId: 'quick-img-c3d4e5', label: 'Euglena', ratio: '1x1', width: 300 },
  { id: 'quick-06', imgId: 'quick-img-f6g7h8', label: 'Stentor', ratio: '1x1', width: 300 },
  { id: 'quick-07', imgId: 'quick-img-i9j0k1', label: 'Volvox Colony', ratio: '1x1', width: 300 },
  { id: 'quick-08', imgId: 'quick-img-l2m3n4', label: 'Copepod', ratio: '1x1', width: 300 },
];

const QuickGridSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            Quick Glimpses
          </p>
          <h2
            id="quick-section-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            More Microscopic Wonders
          </h2>
          <p id="quick-section-desc" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            A rapid-fire tour through more extraordinary microscopic life forms from around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {quickImages.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-cosmos-border aspect-square bg-cosmos-card cursor-pointer"
            >
              <img
                id={item.id}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}] [quick-section-desc] [quick-section-title] microscopic organism`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-cosmos-text text-xs font-grotesk font-semibold">{item.label}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-cosmos-bg/70 to-transparent">
                <p className="text-cosmos-muted text-xs font-grotesk text-center truncate">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickGridSection;
