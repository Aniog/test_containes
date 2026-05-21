import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10µm', label: 'Average Cell Size' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1000×', label: 'Microscope Magnification' },
  { value: '4B yrs', label: 'Life on Earth' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#050a14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p id="about-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About MicroCosmos
            </p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Universe Hidden in Plain Sight
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              MicroCosmos is a celebration of the microscopic world — the teeming, vibrant, and endlessly complex universe that exists at scales invisible to the human eye. From the crystalline architecture of snowflakes to the pulsing networks of neurons, every drop of water and grain of soil contains multitudes.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Through the lens of modern microscopy, we reveal the extraordinary beauty and complexity that underlies all living things. These are not just scientific images — they are windows into another dimension of reality.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-cyan-500/20 rounded-xl p-5 bg-[#0d1b2a]">
                  <div className="text-3xl font-black text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
              <img
                alt="Microscopic cell structure"
                className="w-full object-cover"
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-title] [about-label] microscopic cell structure biology"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0d1b2a] border border-violet-500/30 rounded-xl p-4 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-1">Resolution</div>
              <div className="text-white font-bold text-lg">Nanometer Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
