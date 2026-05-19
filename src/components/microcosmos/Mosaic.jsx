import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const mosaicImages = [
  { id: 'mosaic-mc030', titleId: 'mosaic-t1', title: 'Paramecium', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc031', titleId: 'mosaic-t2', title: 'Amoeba', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc032', titleId: 'mosaic-t3', title: 'Euglena', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc033', titleId: 'mosaic-t4', title: 'Volvox algae', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc034', titleId: 'mosaic-t5', title: 'Hydra microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc035', titleId: 'mosaic-t6', title: 'Spirogyra algae', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc036', titleId: 'mosaic-t7', title: 'Stentor microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-mc037', titleId: 'mosaic-t8', title: 'Vorticella microscope', ratio: '1x1', width: 400 },
];

const Mosaic = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              Species Spotlight
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Meet the Inhabitants
            </h2>
          </div>
          <p className="text-neutral-400 max-w-xs leading-relaxed text-sm">
            Each organism is a masterpiece of evolutionary engineering, perfectly adapted to its microscopic niche.
          </p>
        </div>

        {/* 4-column mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {mosaicImages.map((img) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-800">
              <img
                id={img.titleId}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={img.id}
                data-strk-img={`[${img.titleId}] microscopic organism`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold uppercase tracking-wider">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
