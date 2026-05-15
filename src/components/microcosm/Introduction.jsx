import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '37 Trillion', label: 'Cells in the human body' },
  { value: '10²³', label: 'Microbes on Earth' },
  { value: '0.001mm', label: 'Size of a typical bacterium' },
  { value: '4 Billion', label: 'Years of microbial life' },
];

const Introduction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="intro" ref={containerRef} className="bg-[#050a14] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p id="intro-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              What Is a Microcosm?
            </p>
            <h2 id="intro-title" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A World Within a World
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              A microcosm is a miniature representation of something larger — a self-contained
              universe operating by the same laws as the cosmos, yet small enough to fit on the
              head of a pin.
            </p>
            <p className="text-slate-400 leading-relaxed">
              From the teeming ecosystems inside a single drop of pond water, to the intricate
              lattice of a snowflake crystal, the microscopic world is as complex and beautiful
              as anything visible to the naked eye.
            </p>
          </div>

          {/* Feature image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_0_60px_rgba(34,211,238,0.1)]">
            <img
              alt="Microscopic world"
              className="w-full h-full object-cover"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-title] [intro-label]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">
                Microscopy Photography
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d1a2e] border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
