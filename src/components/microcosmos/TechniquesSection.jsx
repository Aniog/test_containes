import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech1',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Reveals surface textures at nanometer resolution, producing dramatic 3D-like images.',
    imgId: 'tech-img-mc022',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech2',
    title: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Uses fluorescent dyes to illuminate specific cellular structures in vivid color.',
    imgId: 'tech-img-mc023',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech3',
    title: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Passes electrons through ultra-thin samples to reveal internal cellular architecture.',
    imgId: 'tech-img-mc024',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'tech4',
    title: 'Confocal Laser Scanning',
    abbr: 'CLSM',
    desc: 'Creates optical sections through thick specimens for stunning 3D reconstructions.',
    imgId: 'tech-img-mc025',
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
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="tech-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            How We See
          </p>
          <h2 id="tech-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Imaging Techniques
          </h2>
          <p className="text-[#94b8c8] text-lg max-w-xl mx-auto">
            Modern microscopy has transformed our ability to visualize the invisible world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,170,0.2)] bg-[#0f1f35]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={tech.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.id}-desc] [${tech.id}-title] [tech-label]`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-[#050d1a]/80 border border-[#00d4aa]/40 text-[#00d4aa] text-xs font-bold rounded-lg tracking-wider">
                    {tech.abbr}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 id={`${tech.id}-title`} className="text-base font-bold text-[#e8f4f8] mb-2">{tech.title}</h3>
                <p id={`${tech.id}-desc`} className="text-sm text-[#94b8c8] leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
