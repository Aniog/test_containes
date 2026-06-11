import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Species on Earth', sub: 'estimated total' },
  { value: '1μm', label: 'Average Bacterium', sub: 'in size' },
  { value: '99%', label: 'Microbial Life', sub: 'yet undiscovered' },
  { value: '3.5B', label: 'Years of Evolution', sub: 'microbial history' },
];

const StatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="stats-bg-mc001"
        data-strk-bg="[stats-section-title] microscopic world bacteria cells"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gray-950/85" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2
            id="stats-section-title"
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Scale of the Invisible
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-teal-400 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
