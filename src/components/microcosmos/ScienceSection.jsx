import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Eye, FlaskConical } from 'lucide-react';

const techniques = [
  {
    id: 'tech-1',
    icon: Microscope,
    name: 'Electron Microscopy',
    abbr: 'SEM / TEM',
    desc: 'Uses beams of electrons instead of light to create images with resolution up to 0.1 nanometers — revealing atomic-scale structures.',
    imgId: 'science-img-mc015',
    titleId: 'science-tech-1-title',
    descId: 'science-tech-1-desc',
  },
  {
    id: 'tech-2',
    icon: Zap,
    name: 'Confocal Microscopy',
    abbr: 'CLSM',
    desc: 'Laser-based technique that creates sharp 3D images of fluorescently labeled biological specimens, enabling visualization of living cells.',
    imgId: 'science-img-mc016',
    titleId: 'science-tech-2-title',
    descId: 'science-tech-2-desc',
  },
  {
    id: 'tech-3',
    icon: Eye,
    name: 'Polarized Light',
    abbr: 'PLM',
    desc: 'Reveals crystalline structures and birefringent materials with stunning color patterns, transforming ordinary minerals into abstract art.',
    imgId: 'science-img-mc017',
    titleId: 'science-tech-3-title',
    descId: 'science-tech-3-desc',
  },
  {
    id: 'tech-4',
    icon: FlaskConical,
    name: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Specific molecules are tagged with fluorescent dyes, allowing scientists to track proteins, DNA, and organelles within living cells.',
    imgId: 'science-img-mc018',
    titleId: 'science-tech-4-title',
    descId: 'science-tech-4-desc',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            The Tools of Discovery
          </span>
          <h2 id="science-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Microscopy Techniques
          </h2>
          <p id="science-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Modern microscopy has transformed our understanding of life. Each technique reveals a different dimension of the microscopic world.
          </p>
        </div>

        {/* Techniques grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techniques.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="group bg-cosmos-card border border-cosmos-teal/20 rounded-2xl overflow-hidden hover:border-cosmos-teal/50 hover:shadow-[0_0_40px_rgba(0,212,200,0.12)] transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="relative w-full md:w-48 flex-shrink-0 overflow-hidden">
                  <img
                    alt={tech.name}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}] [science-subtitle] [science-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-cosmos-surface"
                    style={{ opacity: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cosmos-card/50 hidden md:block" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-cosmos-teal/10 border border-cosmos-teal/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cosmos-teal" />
                    </div>
                    <span className="text-cosmos-dim text-xs font-semibold tracking-widest uppercase">{tech.abbr}</span>
                  </div>
                  <h3 id={tech.titleId} className="text-cosmos-text text-lg font-bold mb-2">{tech.name}</h3>
                  <p id={tech.descId} className="text-cosmos-muted text-sm leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide feature image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden border border-cosmos-teal/20 shadow-[0_0_40px_rgba(0,212,200,0.1)]">
          <img
            alt="Advanced microscopy laboratory"
            data-strk-img-id="science-lab-img-mc019"
            data-strk-img="[science-subtitle] [science-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full object-cover bg-cosmos-card"
            style={{ opacity: 0, maxHeight: '400px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/90 via-cosmos-bg/40 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <span className="text-cosmos-teal text-xs font-semibold tracking-widest uppercase mb-3 block">Research Frontier</span>
              <h3 className="text-cosmos-text text-2xl md:text-3xl font-black mb-3">
                Pushing the Limits of Resolution
              </h3>
              <p className="text-cosmos-muted text-sm leading-relaxed">
                Super-resolution microscopy techniques like STORM and PALM now achieve resolutions below 20 nanometers — breaking the diffraction limit of light itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
