import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10 µm', label: 'Average cell diameter', desc: 'The typical size of a human cell' },
  { value: '37T', label: 'Cells in the human body', desc: 'Thirty-seven trillion living units' },
  { value: '1000×', label: 'Optical magnification', desc: 'Maximum light microscope power' },
  { value: '0.1 nm', label: 'Electron resolution', desc: 'Electron microscope precision' },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-medium">
              What is MicroCosmos?
            </p>
            <h2
              id="intro-title"
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Universe That Exists Beyond Human Sight
            </h2>
            <p id="intro-desc" className="text-slate-300 leading-relaxed mb-4">
              Every drop of water, every grain of soil, every breath of air teems with
              life invisible to the naked eye. MicroCosmos is a window into this hidden
              dimension — a realm of extraordinary beauty, complexity, and wonder.
            </p>
            <p className="text-slate-400 leading-relaxed">
              From the intricate lattice of a snowflake crystal to the pulsing
              organelles inside a living cell, the microscopic world mirrors the
              grandeur of the cosmos itself — vast, interconnected, and endlessly surprising.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700/50 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
            <img
              alt="Microscopic world introduction"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0d1428] border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
