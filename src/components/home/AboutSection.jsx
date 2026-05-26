import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '3.8B', label: 'Years of Evolution' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00d4ff]/40" />
          <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">What is MicroCosmos</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00d4ff]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mb-6 leading-tight">
              A Universe <span className="text-[#00d4ff]">Invisible</span> to the Naked Eye
            </h2>
            <p id="about-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              MicroCosmos is the vast, teeming world of microscopic life — organisms so small they exist beyond the threshold of human vision, yet so numerous they outnumber every star in the observable universe.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              From the ancient archaea thriving in volcanic vents to the elegant diatoms sculpting glass-like shells, the microbial world is a testament to life's extraordinary ingenuity. These invisible architects shape our atmosphere, drive our ecosystems, and even inhabit our own bodies in the trillions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1f3d] border border-[#00d4ff]/20 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,212,255,0.08)]"
                >
                  <div className="text-3xl font-black text-[#00d4ff] mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.2)] border border-[#00d4ff]/20">
              <img
                alt="Microscopic world"
                className="w-full h-[500px] object-cover"
                data-strk-img-id="about-main-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0f1f3d] border border-[#00d4ff]/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="text-[#00d4ff] text-2xl font-black">1,000,000×</div>
              <div className="text-slate-300 text-sm mt-1">Magnification possible</div>
            </div>

            {/* Second floating image */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border border-[#00d4ff]/30 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
              <img
                alt="Bacteria close-up"
                className="w-full h-full object-cover"
                data-strk-img-id="about-float-mc003"
                data-strk-img="[about-title] bacteria microscope"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
