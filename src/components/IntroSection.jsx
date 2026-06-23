import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in the Human Body' },
  { value: '0.001mm', label: 'Smallest Bacterium' },
  { value: '99%', label: 'Life Invisible to Us' },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cosmos-navy py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-4">
              About MicroCosmos
            </p>
            <h2
              id="intro-title"
              className="font-display text-4xl md:text-5xl font-bold text-cosmos-text leading-tight mb-6"
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p
              id="intro-desc"
              className="text-cosmos-muted text-base leading-relaxed mb-6 font-sans"
            >
              Beneath the threshold of human perception lies an entire cosmos teeming with life, structure, and beauty. From the crystalline architecture of snowflakes to the intricate machinery of living cells, the microscopic world reveals nature's most astonishing designs.
            </p>
            <p className="text-cosmos-muted text-base leading-relaxed font-sans">
              Modern microscopy has unlocked windows into this hidden realm — electron microscopes, fluorescence imaging, and atomic force microscopy now let us witness the dance of molecules and the architecture of life itself.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-cosmos-border shadow-cosmos-glow">
            <img
              alt="Microscopic life forms"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
              style={{ minHeight: '320px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold">
                Electron Microscopy
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 text-center shadow-cosmos-glow"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-cosmos-teal mb-2">
                {stat.value}
              </div>
              <div className="text-cosmos-muted text-sm font-sans tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
