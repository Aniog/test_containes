import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Eye, FlaskConical } from 'lucide-react';

const techniques = [
  {
    id: 'tech-sem',
    imgId: 'science-img-sem-a1b2c3',
    titleId: 'science-title-sem',
    descId: 'science-desc-sem',
    icon: Zap,
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes use beams of electrons to image structures at the nanometer scale — revealing atomic-level detail impossible with light.',
    detail: 'Resolution: 0.1 nm',
    accentClass: 'text-cosmos-cyan bg-cosmos-cyan/10',
  },
  {
    id: 'tech-confocal',
    imgId: 'science-img-confocal-d4e5f6',
    titleId: 'science-title-confocal',
    descId: 'science-desc-confocal',
    icon: Eye,
    title: 'Confocal Microscopy',
    desc: 'Laser-based fluorescence microscopy creates sharp 3D images of living cells by eliminating out-of-focus light, allowing scientists to observe dynamic biological processes in real time.',
    detail: 'Live cell imaging',
    accentClass: 'text-cosmos-violet bg-cosmos-violet/10',
  },
  {
    id: 'tech-cryo',
    imgId: 'science-img-cryo-g7h8i9',
    titleId: 'science-title-cryo',
    descId: 'science-desc-cryo',
    icon: FlaskConical,
    title: 'Cryo-Electron Tomography',
    desc: 'Samples are flash-frozen to preserve their native state, then imaged from multiple angles to reconstruct full 3D structures of proteins, viruses, and cellular machinery.',
    detail: 'Nobel Prize 2017',
    accentClass: 'text-cosmos-emerald bg-cosmos-emerald/10',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-emerald text-xs font-semibold uppercase tracking-widest">
            The Tools of Discovery
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            How We See the Invisible
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern microscopy techniques have transformed our understanding of
            life, matter, and the universe at its smallest scales.
          </p>
        </div>

        {/* Techniques */}
        <div className="space-y-16">
          {techniques.map((tech, i) => {
            const Icon = tech.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={tech.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/5 group">
                  <img
                    alt={tech.title}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 ${tech.accentClass}`}>
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-semibold">{tech.detail}</span>
                  </div>
                  <h3 id={tech.titleId} className="text-2xl md:text-3xl font-black text-white mb-4">
                    {tech.title}
                  </h3>
                  <p id={tech.descId} className="text-slate-400 text-base leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
