import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photoGrid = [
  {
    id: 'pg-mc040',
    titleId: 'pg-title-mc040',
    descId: 'pg-desc-mc040',
    title: 'Amoeba',
    desc: 'Amoeba proteus single cell organism pseudopod movement microscope',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'pg-mc041',
    titleId: 'pg-title-mc041',
    descId: 'pg-desc-mc041',
    title: 'Spirogyra Algae',
    desc: 'Spirogyra green algae spiral chloroplast freshwater microscope',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'pg-mc042',
    titleId: 'pg-title-mc042',
    descId: 'pg-desc-mc042',
    title: 'Dust Mite',
    desc: 'Dust mite arachnid scanning electron microscope close-up',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'pg-mc043',
    titleId: 'pg-title-mc043',
    descId: 'pg-desc-mc043',
    title: 'Euglena',
    desc: 'Euglena flagellate protozoa green chloroplast microscope',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'pg-mc044',
    titleId: 'pg-title-mc044',
    descId: 'pg-desc-mc044',
    title: 'Hydra',
    desc: 'Hydra freshwater polyp tentacles microscope aquatic organism',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'pg-mc045',
    titleId: 'pg-title-mc045',
    descId: 'pg-desc-mc045',
    title: 'Rotifer',
    desc: 'Rotifer wheel animalcule microscopic aquatic invertebrate',
    ratio: '1x1',
    width: 400,
  },
];

const PhotoGridSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="photogrid" ref={containerRef} className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4 text-center">
          More From the Lens
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 text-center mb-14">
          Microscopic Portraits
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoGrid.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#0d1f3c] border border-slate-800 hover:border-[#00d4c8]/40 transition-all duration-300"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-sm font-bold text-slate-50">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-xs text-slate-400 mt-1 leading-snug">
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

export default PhotoGridSection;
