import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Microbial Species' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '0.001mm', label: 'Average Bacterium Size' },
  { value: '3.5B', label: 'Years of Microbial Life' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
              About MicroCosmos
            </span>
            <h2 id="about-title" className="md:text-5xl font-black text-[#e2f0fb] mb-6 leading-tight text-2xl text-left" style={{ color: "rgb(229, 95, 62)" }}>
              A Universe Too Small to See
</h2>
            <p id="about-desc" className="text-[#7fb3cc] text-lg leading-relaxed mb-6">
              The microcosmos is a world teeming with life, structure, and beauty — invisible to the naked eye yet fundamental to all existence. From the intricate lattice of a snowflake crystal to the alien elegance of a diatom, microscopic life is endlessly fascinating.
            </p>
            <p className="text-[#4a7a96] text-base leading-relaxed mb-10">
              Modern microscopy has unlocked windows into this hidden realm, revealing organisms that predate dinosaurs, structures more complex than skyscrapers, and ecosystems thriving in a single drop of water.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0d1a24] border border-[rgba(0,212,255,0.12)] rounded-2xl p-5"
                >
                  <div className="text-3xl font-black text-[#00d4ff] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#7fb3cc]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-[rgba(0,212,255,0.15)] shadow-[0_0_60px_rgba(0,212,255,0.1)]">
              <img
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic life"
                className="w-full h-full object-cover"
                style={{ minHeight: '500px', background: '#0d1a24' }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0d1a24] border border-[rgba(0,212,255,0.2)] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              <div className="text-2xl font-black text-[#00d4ff]">10,000×</div>
              <div className="text-xs text-[#7fb3cc]">Magnification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

