import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species', desc: 'Estimated species on Earth' },
  { value: '37T', label: 'Human Cells', desc: 'Cells in the human body' },
  { value: '0.001mm', label: 'Smallest Bacteria', desc: 'Mycoplasma genitalium' },
  { value: '3.8B', label: 'Years of Life', desc: 'Age of first microbes' },
];

export default function IntroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cosmos-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            What Is MicroCosmos
          </p>
          <h2
            id="intro-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-6"
          >
            A Universe Within
            <span className="bg-gradient-to-r from-cosmos-teal to-cosmos-purple bg-clip-text text-transparent"> Our Universe</span>
          </h2>
          <p
            id="intro-desc"
            className="font-inter text-cosmos-muted text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Beneath the threshold of human vision lies an entire cosmos teeming with life. Microorganisms — bacteria, archaea, fungi, protozoa, and viruses — form the invisible foundation of all life on Earth.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-grotesk font-semibold text-2xl text-cosmos-text">
              The First Life on Earth
            </h3>
            <p className="font-inter text-cosmos-muted leading-relaxed">
              Microorganisms were the first forms of life to appear on Earth, approximately 3.8 billion years ago. For over 3 billion years, they were the only inhabitants of our planet, shaping the atmosphere, oceans, and land.
            </p>
            <p className="font-inter text-cosmos-muted leading-relaxed">
              Today, they outnumber all other life forms combined. A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. They live in the deepest ocean trenches, the hottest volcanic vents, and even in the stratosphere.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-px bg-cosmos-teal" />
              <span className="font-grotesk text-cosmos-teal text-sm font-medium tracking-wide">
                Life at the microscale
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic life forms"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id="intro-img-d4e5f6"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-inter text-cosmos-muted text-xs">
                Electron microscopy reveals the intricate structures of microorganisms
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cosmos-surface border border-cosmos-elevated rounded-2xl p-6 text-center hover:border-cosmos-teal/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,170,0.1)]"
            >
              <div className="font-grotesk font-bold text-3xl text-cosmos-teal mb-1">
                {stat.value}
              </div>
              <div className="font-grotesk font-semibold text-cosmos-text text-sm mb-1">
                {stat.label}
              </div>
              <div className="font-inter text-cosmos-dim text-xs">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
