import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const microscopyTypes = [
  {
    id: 'light',
    name: 'Light Microscopy',
    desc: 'The classic technique using visible light and lenses to magnify specimens up to 2,000×. Ideal for living cells and tissue samples.',
    detail: 'Up to 2,000× magnification',
    imgId: 'micro-light-mc030',
    titleId: 'micro-light-name',
    descId: 'micro-light-desc',
  },
  {
    id: 'electron',
    name: 'Electron Microscopy',
    desc: 'Uses beams of electrons instead of light, achieving magnifications of up to 10,000,000×. Reveals atomic-level structures.',
    detail: 'Up to 10,000,000× magnification',
    imgId: 'micro-electron-mc031',
    titleId: 'micro-electron-name',
    descId: 'micro-electron-desc',
  },
  {
    id: 'fluorescence',
    name: 'Fluorescence Microscopy',
    desc: 'Fluorescent dyes or proteins illuminate specific cellular structures, creating vivid, colorful images of living cells in action.',
    detail: 'Nanometer resolution',
    imgId: 'micro-fluorescence-mc032',
    titleId: 'micro-fluorescence-name',
    descId: 'micro-fluorescence-desc',
  },
  {
    id: 'confocal',
    name: 'Confocal Microscopy',
    desc: 'Laser scanning technology creates sharp 3D images by eliminating out-of-focus light, producing stunning cross-sections of cells.',
    detail: '3D cellular imaging',
    imgId: 'micro-confocal-mc033',
    titleId: 'micro-confocal-name',
    descId: 'micro-confocal-desc',
  },
];

const MicroscopySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="microscopy" className="bg-cosmos-surface py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Tools of Discovery
          </span>
          <h2
            id="microscopy-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            How We See the Invisible
          </h2>
          <p
            id="microscopy-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Modern microscopy techniques have transformed our understanding of life at the cellular and molecular scale.
          </p>
        </div>

        {/* Two large feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {microscopyTypes.slice(0, 2).map((type) => (
            <div
              key={type.id}
              className="relative rounded-3xl overflow-hidden group border border-cosmos-teal/20 hover:border-cosmos-teal/50 transition-all duration-300"
            >
              <div className="relative h-72 md:h-80">
                <img
                  alt={type.name}
                  data-strk-img-id={type.imgId}
                  data-strk-img={`[${type.descId}] [${type.titleId}] [microscopy-section-desc] [microscopy-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-cosmos-teal/20 border border-cosmos-teal/40 text-cosmos-teal text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {type.detail}
                </div>
                <h3 id={type.titleId} className="text-cosmos-text text-2xl font-bold mb-2">{type.name}</h3>
                <p id={type.descId} className="text-cosmos-muted text-sm leading-relaxed">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {microscopyTypes.slice(2).map((type) => (
            <div
              key={type.id}
              className="flex gap-5 bg-cosmos-elevated border border-cosmos-teal/20 rounded-2xl overflow-hidden group hover:border-cosmos-teal/50 transition-all duration-300"
            >
              <div className="w-40 md:w-48 flex-shrink-0 relative overflow-hidden">
                <img
                  alt={type.name}
                  data-strk-img-id={type.imgId}
                  data-strk-img={`[${type.descId}] [${type.titleId}] [microscopy-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <div className="text-cosmos-teal text-xs font-semibold uppercase tracking-wider mb-2">{type.detail}</div>
                <h3 id={type.titleId} className="text-cosmos-text text-lg font-bold mb-2">{type.name}</h3>
                <p id={type.descId} className="text-cosmos-muted text-sm leading-relaxed">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroscopySection;
