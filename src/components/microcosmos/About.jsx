import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '0.001mm', label: 'Smallest Bacterium' },
  { value: '99%', label: 'Species Undiscovered' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-5xl font-black text-sky-50 mb-6 leading-tight"
            >
              A Universe Too Small to See
            </h2>
            <p
              id="about-desc"
              className="text-slate-300 text-lg leading-relaxed mb-6"
            >
              The microcosmos is a world that exists all around us, yet remains invisible to the naked eye. Beneath every drop of water, inside every breath of air, and across every surface lies an entire civilization of microscopic life.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the elegant spirals of diatoms to the alien landscapes of pollen grains, the microscopic world is filled with extraordinary beauty and complexity. Modern microscopy has opened a window into this hidden realm, revealing structures and organisms that challenge our understanding of life itself.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1f38] border border-cyan-500/20 rounded-xl p-4"
                >
                  <div className="text-2xl font-black text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(0,212,200,0.1)]">
              <img
                alt="Microscopic life forms"
                className="w-full h-80 md:h-[500px] object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border border-cyan-500/30 rounded-xl px-5 py-3 shadow-xl">
              <div className="text-cyan-400 font-black text-xl">1665</div>
              <div className="text-slate-400 text-xs">First microscope observation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
