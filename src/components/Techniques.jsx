import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'sem',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to produce detailed 3D-like surface images at nanometer resolution.',
    imgId: 'tech-img-sem-mc050',
    titleId: 'tech-title-sem',
    descId: 'tech-desc-sem',
  },
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Fluorescent dyes illuminate specific cellular structures, creating vivid, colorful images of living cells.',
    imgId: 'tech-img-fluor-mc051',
    titleId: 'tech-title-fluor',
    descId: 'tech-desc-fluor',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    abbr: 'CM',
    desc: 'Optical sectioning technique that builds 3D reconstructions of biological specimens with exceptional clarity.',
    imgId: 'tech-img-confocal-mc052',
    titleId: 'tech-title-confocal',
    descId: 'tech-desc-confocal',
  },
];

const Techniques = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-3">
            How We See the Invisible
          </p>
          <h2 id="tech-section-title" className="text-4xl md:text-5xl font-bold text-white">
            Microscopy Techniques
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            The tools that let us peer into the hidden universe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan/40 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [tech-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-cosmos-cyan text-cosmos-bg text-xs font-black px-3 py-1 rounded-full tracking-widest">
                    {tech.abbr}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={tech.titleId} className="text-white font-bold text-lg mb-3">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-slate-400 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techniques;
