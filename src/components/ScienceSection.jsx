import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Globe, FlaskConical } from 'lucide-react';

const techniques = [
  {
    icon: Microscope,
    title: 'Light Microscopy',
    desc: 'The oldest and most widely used technique, using visible light and lenses to magnify specimens up to 2,000×.',
  },
  {
    icon: Zap,
    title: 'Electron Microscopy',
    desc: 'Uses beams of electrons instead of light, achieving magnifications of over 10,000,000× with atomic resolution.',
  },
  {
    icon: Globe,
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins illuminate specific structures, revealing the inner workings of living cells.',
  },
  {
    icon: FlaskConical,
    title: 'Cryo-Electron Tomography',
    desc: 'Freezes samples at cryogenic temperatures to capture 3D structures of proteins and viruses in near-native states.',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0a0f18]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Quote block */}
        <div className="relative mb-20 max-w-3xl mx-auto text-center">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full" />
          <blockquote className="text-2xl md:text-3xl font-light italic text-slate-300 leading-relaxed pt-8">
            "The universe is not only queerer than we suppose, but queerer than we{' '}
            <span className="text-teal-400 not-italic font-semibold">can</span> suppose."
          </blockquote>
          <p className="text-slate-500 text-sm mt-4">— J.B.S. Haldane</p>
        </div>

        {/* Techniques */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">How We See</p>
          <h2 id="science-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Microscopy Techniques
          </h2>
          <p id="science-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Modern science has developed extraordinary tools to peer into the microscopic realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {techniques.map((t) => (
            <div
              key={t.title}
              className="flex gap-5 bg-[#0d1a24] border border-teal-900/40 rounded-2xl p-6 hover:border-teal-500/40 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center">
                <t.icon className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width feature image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/7] shadow-[0_0_80px_rgba(20,184,166,0.15)]">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Electron microscope laboratory"
            className="w-full h-full object-cover"
            data-strk-img-id="science-img-a1b2c3"
            data-strk-img="[science-subtitle] [science-title] electron microscope laboratory research"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a0f]/80 via-[#050a0f]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Did You Know?</p>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                The First Microscope Was Built in 1590
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dutch spectacle makers Hans and Zacharias Janssen created the first compound microscope, opening a window into a world that would transform science forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
