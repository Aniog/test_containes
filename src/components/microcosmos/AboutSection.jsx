import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10 μm', label: 'Average Cell Size' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '8.7M', label: 'Species on Earth' },
  { value: '1000×', label: 'Microscope Magnification' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              The Universe That Exists in Every Drop of Water
            </h2>
            <p
              id="about-desc"
              className="text-slate-300 text-base leading-relaxed mb-6"
            >
              MicroCosmos is a visual exploration of the microscopic world — the teeming, vibrant, and often alien-looking life that exists all around us, invisible to the naked eye. From the crystalline structures of snowflakes to the intricate machinery of a single cell, the micro world is endlessly fascinating.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Using electron microscopes, fluorescence imaging, and macro photography, scientists have revealed a cosmos of staggering beauty and complexity. Every surface, every drop of water, every breath of air is alive with microscopic wonders.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0d1b2e] border border-cyan-900/40 rounded-2xl p-4"
                >
                  <div className="text-2xl font-extrabold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-cyan-900/40 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <img
                alt="Microscopic cell structure"
                className="w-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d1b2e] border border-cyan-400/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <div className="text-cyan-400 font-bold text-lg">1000×</div>
              <div className="text-slate-400 text-xs">Magnification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
