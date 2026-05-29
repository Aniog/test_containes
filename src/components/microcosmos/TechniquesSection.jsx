import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-1',
    titleId: 'tech-title-1',
    descId: 'tech-desc-1',
    imgId: 'tech-img-a1b2c3',
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    description: 'Uses a focused beam of electrons to scan the surface of specimens, producing detailed 3D-like images with extraordinary depth of field.',
    magnification: 'Up to 500,000×',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'tech-2',
    titleId: 'tech-title-2',
    descId: 'tech-desc-2',
    imgId: 'tech-img-d4e5f6',
    name: 'Fluorescence Microscopy',
    abbr: 'FM',
    description: 'Fluorescent dyes or proteins are used to label specific structures, making them glow under UV light and revealing the inner workings of cells.',
    magnification: 'Up to 1,000×',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'tech-3',
    titleId: 'tech-title-3',
    descId: 'tech-desc-3',
    imgId: 'tech-img-g7h8i9',
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    description: 'Electrons pass through ultra-thin specimen slices, revealing internal cellular structures at near-atomic resolution.',
    magnification: 'Up to 50,000,000×',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'tech-4',
    titleId: 'tech-title-4',
    descId: 'tech-desc-4',
    imgId: 'tech-img-j1k2l3',
    name: 'Confocal Microscopy',
    abbr: 'CLSM',
    description: 'Uses a pinhole aperture to eliminate out-of-focus light, enabling optical sectioning and 3D reconstruction of biological specimens.',
    magnification: 'Up to 1,500×',
    ratio: '1x1',
    width: 500,
  },
];

export default function TechniquesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="techniques" ref={containerRef} className="bg-cosmos-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            How We See Them
          </p>
          <h2
            id="tech-section-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Imaging
            <span className="bg-gradient-to-r from-cosmos-purple to-cosmos-amber bg-clip-text text-transparent"> Technologies</span>
          </h2>
          <p
            id="tech-section-desc"
            className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Modern microscopy techniques have transformed our ability to visualize the microscopic world in stunning detail and color.
          </p>
        </div>

        {/* Techniques grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="bg-cosmos-bg border border-cosmos-elevated rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-cosmos-purple/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)]"
            >
              {/* Square image */}
              <div className="relative w-full md:w-48 flex-shrink-0 aspect-square md:aspect-auto overflow-hidden">
                <span id={tech.titleId} className="sr-only">{tech.name}</span>
                <span id={tech.descId} className="sr-only">{tech.description}</span>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [tech-section-desc] [tech-section-title]`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                />
                {/* Abbr badge */}
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-cosmos-purple/80 text-white font-grotesk font-bold text-xs">
                  {tech.abbr}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-grotesk font-bold text-lg text-cosmos-text mb-2">
                  {tech.name}
                </h3>
                <p className="font-inter text-cosmos-muted text-sm leading-relaxed mb-3">
                  {tech.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-inter text-cosmos-dim text-xs">Magnification:</span>
                  <span className="font-grotesk text-cosmos-teal text-xs font-semibold">
                    {tech.magnification}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
