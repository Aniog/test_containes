import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1μm', label: 'Smallest Life Form' },
  { value: '99%', label: 'Undiscovered Microbes' },
  { value: '37T', label: 'Cells in Human Body' },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-black py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">01 — Explore</p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
        <div>
          <h2 id="explore-title" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            A Universe Hidden in Plain Sight
          </h2>
          <p id="explore-desc" className="text-neutral-400 text-lg leading-relaxed mb-6">
            Beneath the threshold of human vision lies an entire cosmos — teeming with organisms that predate dinosaurs, shape our climate, and sustain all life on Earth. MicroCosmos is your window into this invisible world.
          </p>
          <p className="text-neutral-500 text-base leading-relaxed">
            From the crystalline architecture of diatoms to the alien landscapes of tardigrades, every microscopic creature tells a story billions of years in the making.
          </p>
        </div>

        {/* Large feature image */}
        <div className="relative">
          <img
            alt="Microscopic life forms under electron microscope"
            className="w-full rounded-xl ring-1 ring-white/10 object-cover"
            style={{ aspectRatio: '4/3' }}
            data-strk-img-id="explore-img-7b3c1d"
            data-strk-img="[explore-desc] [explore-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3">
            <p className="text-white font-semibold text-sm">Tardigrade</p>
            <p className="text-neutral-500 text-xs">Magnified 500×</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 rounded-xl overflow-hidden">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-neutral-950 px-6 py-8 text-center">
            <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
