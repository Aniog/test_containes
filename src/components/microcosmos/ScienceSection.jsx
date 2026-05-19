import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Globe, FlaskConical } from 'lucide-react';

const techniques = [
  {
    icon: Microscope,
    title: 'Electron Microscopy',
    description: 'Using beams of electrons instead of light, electron microscopes achieve magnifications up to 10,000,000x, revealing atomic-level structures.',
    color: 'text-[#00d4c8]',
    bg: 'bg-[#00d4c8]/10',
  },
  {
    icon: Zap,
    title: 'Fluorescence Imaging',
    description: 'Fluorescent dyes and proteins tag specific molecules, making them glow under UV light and revealing the inner workings of living cells.',
    color: 'text-[#9b5de5]',
    bg: 'bg-[#9b5de5]/10',
  },
  {
    icon: Globe,
    title: 'Confocal Microscopy',
    description: 'Optical sectioning technology creates sharp 3D reconstructions of biological specimens by eliminating out-of-focus light.',
    color: 'text-[#f4a261]',
    bg: 'bg-[#f4a261]/10',
  },
  {
    icon: FlaskConical,
    title: 'Cryo-Electron Tomography',
    description: 'Flash-freezing samples preserves them in their native state, allowing scientists to image proteins and viruses in unprecedented detail.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a24]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] font-semibold mb-3">
            The Science
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We See the Invisible
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Modern microscopy techniques have transformed our understanding of life, matter, and the universe at the smallest scales.
          </p>
        </div>

        {/* Techniques grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {techniques.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="bg-[#112233] border border-[#1e3a4a] rounded-2xl p-6 flex gap-5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{tech.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width feature image with text */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="w-full"
            style={{ minHeight: '400px', position: 'relative' }}
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id="science-bg-t3u4v5"
              data-strk-bg="[science-img-sub] [science-img-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1400"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a0f]/90 via-[#050a0f]/50 to-transparent" />
            <div className="relative z-10 p-10 md:p-16 max-w-xl">
              <p className="text-sm uppercase tracking-widest text-[#00d4c8] font-semibold mb-3">
                Did You Know?
              </p>
              <h3 id="science-img-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Human Body Contains 37 Trillion Cells
              </h3>
              <p id="science-img-sub" className="text-slate-300 leading-relaxed">
                Each cell is a microscopic universe of its own — containing DNA, organelles, and molecular machines performing thousands of reactions per second to keep you alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
