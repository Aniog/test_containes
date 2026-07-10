import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const mosaicItems = [
  { id: 'mo1', imgId: 'mosaic-img-mc018', titleId: 'mosaic-mo1-title', descId: 'mosaic-mo1-desc', title: 'Pollen Grain', desc: 'Sunflower pollen grain surface texture under SEM', span: 'col-span-2 row-span-2', ratio: '1x1', width: '800' },
  { id: 'mo2', imgId: 'mosaic-img-mc019', titleId: 'mosaic-mo2-title', descId: 'mosaic-mo2-desc', title: 'Butterfly Wing Scale', desc: 'Iridescent nanostructures on butterfly wing scales', span: 'col-span-1 row-span-1', ratio: '1x1', width: '400' },
  { id: 'mo3', imgId: 'mosaic-img-mc020', titleId: 'mosaic-mo3-title', descId: 'mosaic-mo3-desc', title: 'Snowflake Crystal', desc: 'Hexagonal ice crystal formation under cryogenic microscope', span: 'col-span-1 row-span-1', ratio: '1x1', width: '400' },
  { id: 'mo4', imgId: 'mosaic-img-mc021', titleId: 'mosaic-mo4-title', descId: 'mosaic-mo4-desc', title: 'Mosquito Eye', desc: 'Compound eye of Aedes mosquito showing facets', span: 'col-span-1 row-span-2', ratio: '2x3', width: '400' },
  { id: 'mo5', imgId: 'mosaic-img-mc022', titleId: 'mosaic-mo5-title', descId: 'mosaic-mo5-desc', title: 'Coral Polyp', desc: 'Microscopic coral polyp tentacles and nematocysts', span: 'col-span-2 row-span-1', ratio: '3x2', width: '800' },
  { id: 'mo6', imgId: 'mosaic-img-mc023', titleId: 'mosaic-mo6-title', descId: 'mosaic-mo6-desc', title: 'Dust Mite', desc: 'House dust mite Dermatophagoides pteronyssinus', span: 'col-span-1 row-span-1', ratio: '1x1', width: '400' },
];

const Mosaic = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
            Visual Exploration
          </span>
          <h2 id="mosaic-title" className="text-4xl md:text-5xl font-bold text-[#f0f6ff] mt-3 mb-5">
            Nature's Hidden Patterns
          </h2>
          <p className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            From pollen to parasites, every surface hides a universe of intricate detail waiting to be discovered.
          </p>
        </div>

        {/* Mosaic grid */}
        <div ref={containerRef} className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[700px]">
          {mosaicItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-[#1a3050] hover:border-[#00d4c8]/40 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [mosaic-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-[#050d1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-sm font-bold text-[#f0f6ff] mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-xs text-[#8ba3c7] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
