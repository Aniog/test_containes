import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const mosaicItems = [
  { id: 'moss-spore', title: 'Moss Spore', desc: 'Bryophyte reproductive capsule under electron microscope', imgId: 'mosaic-img-moss-mc040', titleId: 'mosaic-title-moss', descId: 'mosaic-desc-moss', ratio: '1x1', width: '500' },
  { id: 'butterfly-wing', title: 'Butterfly Wing', desc: 'Iridescent scales of a Morpho butterfly wing', imgId: 'mosaic-img-butterfly-mc041', titleId: 'mosaic-title-butterfly', descId: 'mosaic-desc-butterfly', ratio: '3x2', width: '700' },
  { id: 'salt-crystal', title: 'Salt Crystal', desc: 'Sodium chloride cubic lattice structure', imgId: 'mosaic-img-salt-mc042', titleId: 'mosaic-title-salt', descId: 'mosaic-desc-salt', ratio: '1x1', width: '500' },
  { id: 'spider-eye', title: 'Spider Eye', desc: 'Multiple eyes of a jumping spider at 40x magnification', imgId: 'mosaic-img-spider-mc043', titleId: 'mosaic-title-spider', descId: 'mosaic-desc-spider', ratio: '3x2', width: '700' },
  { id: 'algae', title: 'Green Algae', desc: 'Chlorella vulgaris — a single-celled green alga', imgId: 'mosaic-img-algae-mc044', titleId: 'mosaic-title-algae', descId: 'mosaic-desc-algae', ratio: '3x2', width: '700' },
  { id: 'ant-head', title: 'Ant Head', desc: 'Scanning electron micrograph of a fire ant head', imgId: 'mosaic-img-ant-mc045', titleId: 'mosaic-title-ant', descId: 'mosaic-desc-ant', ratio: '1x1', width: '500' },
  { id: 'vitamin-c', title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystals under polarized light', imgId: 'mosaic-img-vitc-mc046', titleId: 'mosaic-title-vitc', descId: 'mosaic-desc-vitc', ratio: '3x2', width: '700' },
  { id: 'paramecium', title: 'Paramecium', desc: 'Ciliated protozoan swimming in pond water', imgId: 'mosaic-img-param-mc047', titleId: 'mosaic-title-param', descId: 'mosaic-desc-param', ratio: '3x2', width: '700' },
];

const Mosaic = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-navy py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-3">
            More Specimens
          </p>
          <h2 id="mosaic-section-title" className="text-4xl md:text-5xl font-bold text-white">
            The Micro Photo Archive
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            A curated collection of the most visually striking microscopy images from around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {mosaicItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/40 transition-all duration-300 cursor-pointer
                ${index === 1 || index === 3 || index === 6 ? 'md:col-span-2' : ''}
              `}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [mosaic-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 id={item.titleId} className="text-white font-semibold text-sm">
                  {item.title}
                </h4>
                <p id={item.descId} className="text-slate-400 text-xs mt-0.5 line-clamp-2">
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
