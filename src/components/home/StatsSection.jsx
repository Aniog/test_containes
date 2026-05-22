import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '2,400+', label: 'Images captured' },
  { value: '180×', label: 'Max magnification' },
  { value: '12', label: 'Microscope types' },
  { value: '6', label: 'Years of research' },
];

const StatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="stats-bg-b2c3d4"
        data-strk-bg="[stats-title] [stats-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p id="stats-subtitle" className="text-xs tracking-widest uppercase text-neutral-500 mb-4">By the numbers</p>
          <h2 id="stats-title" className="font-light tracking-[0.15em] uppercase text-white text-3xl lg:text-4xl">
            The Scale of<br />Our Universe
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border-t border-neutral-800 pt-8">
              <p className="font-thin text-white text-4xl lg:text-5xl tracking-tight mb-3">{stat.value}</p>
              <p className="text-xs tracking-widest uppercase text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
