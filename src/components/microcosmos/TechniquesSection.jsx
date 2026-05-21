import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-mc012',
    titleId: 'tech-title-1',
    title: 'Electron Microscopy',
    abbr: 'SEM / TEM',
    description: 'Uses beams of electrons to create images with resolution far beyond optical microscopes, revealing atomic-level structures.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'tech-mc013',
    titleId: 'tech-title-2',
    title: 'Fluorescence Imaging',
    abbr: 'CLSM',
    description: 'Fluorescent dyes and proteins illuminate specific cellular components, creating vivid, colorful maps of biological activity.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'tech-mc014',
    titleId: 'tech-title-3',
    title: 'Atomic Force Microscopy',
    abbr: 'AFM',
    description: 'A nanoscale probe physically traces surface topography, generating 3D maps of molecules and materials at atomic resolution.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'tech-mc015',
    titleId: 'tech-title-4',
    title: 'Light Sheet Microscopy',
    abbr: 'LSFM',
    description: 'Illuminates thin slices of a sample with a sheet of light, enabling rapid 3D imaging of living organisms with minimal damage.',
    ratio: '3x2',
    width: 700,
  },
];

const TechniquesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="techniques" ref={containerRef} className="bg-[#0d1b2a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="tech-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            How We See
          </p>
          <h2 id="tech-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Imaging Techniques
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern microscopy employs a diverse toolkit of technologies, each revealing different aspects of the microscopic world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 bg-[#050a14] transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden md:w-48 flex-shrink-0 h-48 md:h-auto">
                <img
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={tech.id}
                  data-strk-img={`[${tech.titleId}] [tech-title] [tech-label] microscopy technique`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                />
              </div>
              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">{tech.abbr}</span>
                <h3 id={tech.titleId} className="text-white text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
