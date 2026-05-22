import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-mc001',
    titleId: 'tech-title-1',
    descId: 'tech-desc-1',
    title: 'Electron Microscopy',
    desc: 'Using beams of electrons instead of light, electron microscopes achieve magnifications up to 10,000,000× — revealing atomic-scale structures.',
    magnification: 'Up to 10,000,000×',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech-mc002',
    titleId: 'tech-title-2',
    descId: 'tech-desc-2',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up specific cellular structures, creating vivid, colorful maps of biological activity inside living cells.',
    magnification: 'Up to 1,000×',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech-mc003',
    titleId: 'tech-title-3',
    descId: 'tech-desc-3',
    title: 'Polarized Light',
    desc: 'Polarized light microscopy reveals the internal structure of crystals and minerals, producing stunning interference colors and patterns.',
    magnification: 'Up to 400×',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech-mc004',
    titleId: 'tech-title-4',
    descId: 'tech-desc-4',
    title: 'Confocal Microscopy',
    desc: 'Optical sectioning technology that builds 3D images of specimens by capturing thin focal planes and reconstructing them computationally.',
    magnification: 'Up to 2,000×',
    ratio: '4x3',
    width: 600,
  },
];

const TechniquesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="techniques" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">How We See</span>
          <h2 id="tech-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Imaging <span className="text-amber-400">Techniques</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The tools that make the invisible visible — each technique unlocks a different dimension of the microscopic world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group flex flex-col md:flex-row gap-0 bg-[#0d1a26] border border-slate-700/50 hover:border-amber-400/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]"
            >
              <div className="md:w-48 flex-shrink-0 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.title}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={tech.id}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [tech-heading] laboratory science`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">{tech.magnification}</div>
                <h3 id={tech.titleId} className="text-white font-bold text-lg mb-2">{tech.title}</h3>
                <p id={tech.descId} className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
