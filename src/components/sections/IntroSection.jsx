import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', id: 'stat-microbes' },
  { value: '99%', label: 'Species Undiscovered', id: 'stat-undiscovered' },
  { value: '0.001mm', label: 'Smallest Bacterium', id: 'stat-smallest' },
  { value: '3.5B', label: 'Years of Evolution', id: 'stat-years' },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="intro" className="bg-cosmos-bg py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
              About MicroCosmos
            </span>
            <h2
              id="intro-title"
              className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-6 leading-tight"
            >
              Life Exists Where the Eye Cannot See
            </h2>
            <p
              id="intro-desc"
              className="text-cosmos-muted text-lg leading-relaxed mb-6"
            >
              The microbial world is the foundation of all life. Bacteria, archaea, fungi, protozoa, and viruses form an invisible ecosystem that drives the planet's chemistry, shapes our immune systems, and makes complex life possible.
            </p>
            <p className="text-cosmos-muted leading-relaxed mb-8">
              Modern microscopy has revealed a universe of staggering complexity and beauty — from the crystalline geometry of diatoms to the alien landscapes of biofilms, every drop of water teems with extraordinary life.
            </p>
            <div className="h-px bg-gradient-to-r from-cosmos-teal/40 via-cosmos-teal/10 to-transparent mb-8" />
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-cosmos-surface border border-cosmos-teal/20 rounded-2xl p-5">
                  <div className="text-2xl md:text-3xl font-black text-cosmos-teal mb-1">{stat.value}</div>
                  <div id={stat.id} className="text-cosmos-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-glow-teal border border-cosmos-teal/20">
              <img
                alt="Microscopic life under the microscope"
                data-strk-img-id="intro-main-img-mc002"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-cosmos-surface border border-cosmos-teal/30 rounded-2xl p-4 shadow-glow-teal">
              <div className="text-cosmos-teal text-2xl font-black">1μm</div>
              <div className="text-cosmos-muted text-xs">Average Bacterium Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
