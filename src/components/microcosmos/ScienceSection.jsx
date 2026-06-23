import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Eye, Layers, FlaskConical } from 'lucide-react';

const techniques = [
  {
    id: 'tech-sem',
    imgId: 'tech-img-sem-a1b2c3',
    titleId: 'tech-sem-title',
    descId: 'tech-sem-desc',
    icon: Zap,
    title: 'Scanning Electron Microscopy',
    desc: 'SEM uses a focused beam of electrons to scan the surface of a sample, producing detailed 3D-like images with extraordinary depth of field at nanometer resolution.',
    resolution: '1–20 nm',
  },
  {
    id: 'tech-tem',
    imgId: 'tech-img-tem-d4e5f6',
    titleId: 'tech-tem-title',
    descId: 'tech-tem-desc',
    icon: Layers,
    title: 'Transmission Electron Microscopy',
    desc: 'TEM transmits electrons through ultra-thin specimens, revealing internal cellular structures, protein complexes, and atomic lattices with sub-angstrom precision.',
    resolution: '0.05–0.1 nm',
  },
  {
    id: 'tech-confocal',
    imgId: 'tech-img-confocal-g7h8i9',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
    icon: Eye,
    title: 'Confocal Microscopy',
    desc: 'Laser-based confocal microscopy enables optical sectioning of fluorescently labeled specimens, creating stunning 3D reconstructions of living cells and tissues.',
    resolution: '200–300 nm',
  },
  {
    id: 'tech-cryo',
    imgId: 'tech-img-cryo-j1k2l3',
    titleId: 'tech-cryo-title',
    descId: 'tech-cryo-desc',
    icon: FlaskConical,
    title: 'Cryo-Electron Microscopy',
    desc: 'Cryo-EM flash-freezes biological samples in their native state, allowing scientists to determine the 3D structures of proteins and viruses at near-atomic resolution.',
    resolution: '0.1–0.3 nm',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Technology
          </p>
          <h2 id="science-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            How We See the Invisible
          </h2>
          <p id="science-subtitle" className="text-[#8ab4c8] text-lg max-w-2xl mx-auto">
            Modern microscopy techniques push the boundaries of human vision, revealing structures smaller than a single wavelength of light.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techniques.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="group bg-[#050a0f] rounded-2xl border border-[#1a3a50] overflow-hidden hover:border-[#7c3aed]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={tech.title}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}] [science-subtitle] [science-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-[#050a0f]/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#7c3aed]/20 border border-[#7c3aed]/40 rounded-full p-2">
                    <Icon className="w-5 h-5 text-[#7c3aed]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 id={tech.titleId} className="text-xl font-semibold text-[#e8f4f8]">
                      {tech.title}
                    </h3>
                    <span className="shrink-0 bg-[#7c3aed]/20 text-[#a78bfa] text-xs font-semibold px-3 py-1 rounded-full border border-[#7c3aed]/30">
                      {tech.resolution}
                    </span>
                  </div>
                  <p id={tech.descId} className="text-[#8ab4c8] leading-relaxed">
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
