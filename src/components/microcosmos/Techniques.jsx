import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-sem',
    titleId: 'tech-title-sem',
    descId: 'tech-desc-sem',
    imgId: 'tech-img-sem-mc',
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of a sample, producing detailed 3D-like images with extraordinary depth of field.',
    magnification: 'Up to 500,000×',
    color: 'text-[#00d4ff]',
  },
  {
    id: 'tech-tem',
    titleId: 'tech-title-tem',
    descId: 'tech-desc-tem',
    imgId: 'tech-img-tem-mc',
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Transmits electrons through an ultra-thin specimen to reveal internal structures at the atomic level, ideal for viruses and cell organelles.',
    magnification: 'Up to 50,000,000×',
    color: 'text-purple-400',
  },
  {
    id: 'tech-confocal',
    titleId: 'tech-title-confocal',
    descId: 'tech-desc-confocal',
    imgId: 'tech-img-confocal-mc',
    name: 'Confocal Laser Microscopy',
    abbr: 'CLSM',
    desc: 'Uses laser light and fluorescent dyes to create sharp, high-contrast images of biological specimens, enabling 3D reconstruction of cells.',
    magnification: 'Up to 1,000×',
    color: 'text-[#00b894]',
  },
];

const Techniques = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="techniques" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
            How We See
          </span>
          <h2 id="techniques-title" className="text-4xl md:text-5xl font-black text-[#e2f0fb] mb-4">
            Imaging Techniques
          </h2>
          <p id="techniques-subtitle" className="text-[#7fb3cc] text-lg max-w-xl mx-auto">
            The tools that let us peer into the invisible — each revealing a different layer of the microcosmos.
          </p>
        </div>

        {/* Technique cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group bg-[#0d1a24] border border-[rgba(0,212,255,0.1)] rounded-3xl overflow-hidden hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-subtitle] [techniques-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#0d1a24' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#0d1a24]/80 border border-current ${tech.color}`}>
                  {tech.abbr}
                </span>
              </div>
              <div className="p-6">
                <h3 id={tech.titleId} className={`text-lg font-bold mb-2 ${tech.color}`}>
                  {tech.name}
                </h3>
                <p id={tech.descId} className="text-[#7fb3cc] text-sm leading-relaxed mb-4">
                  {tech.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#4a7a96] uppercase tracking-widest">Magnification:</span>
                  <span className={`text-xs font-bold ${tech.color}`}>{tech.magnification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techniques;
