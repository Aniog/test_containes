import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-sem',
    titleId: 'tech-sem-title',
    descId: 'tech-sem-desc',
    imgId: 'tech-img-sem-q7r8s9',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to produce detailed 3D surface images of microscopic structures at nanometer resolution.',
    color: 'from-teal-500/20 to-transparent',
    accentColor: 'text-teal-400',
    borderColor: 'border-teal-500/20',
  },
  {
    id: 'tech-confocal',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
    imgId: 'tech-img-confocal-t1u2v3',
    title: 'Confocal Microscopy',
    abbr: 'CLSM',
    desc: 'Laser-based fluorescence technique that creates sharp optical sections through thick specimens, enabling 3D reconstruction.',
    color: 'from-purple-500/20 to-transparent',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    id: 'tech-tem',
    titleId: 'tech-tem-title',
    descId: 'tech-tem-desc',
    imgId: 'tech-img-tem-w4x5y6',
    title: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Transmits electrons through ultra-thin specimens to reveal internal cellular structures at atomic resolution.',
    color: 'from-cyan-500/20 to-transparent',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
];

const TechniquesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Science & Technology</span>
          <h2 id="tech-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            How We See the Invisible
          </h2>
          <p id="tech-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern microscopy techniques have revolutionized our understanding of the microscopic world, revealing structures invisible to the naked eye.
          </p>
        </div>

        {/* Techniques */}
        <div className="space-y-8">
          {techniques.map((tech, index) => (
            <div
              key={tech.id}
              className={`group flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 bg-gray-900 border ${tech.borderColor} rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(45,212,191,0.08)] transition-all duration-500`}
            >
              <div className="md:w-2/5 overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [tech-subtitle] [tech-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className={`md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br ${tech.color}`}>
                <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${tech.accentColor}`}>{tech.abbr}</span>
                <h3 id={tech.titleId} className="font-space text-2xl md:text-3xl font-bold text-white mb-4">{tech.title}</h3>
                <p id={tech.descId} className="text-gray-300 text-lg leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
