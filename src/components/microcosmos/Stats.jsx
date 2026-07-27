import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Species on Earth' },
  { value: '10³⁰', label: 'Bacteria estimated' },
  { value: '99%', label: 'Life is microscopic' },
  { value: '400+', label: 'Years of microscopy' },
];

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-deep-space">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="stats-bg-mc001"
        data-strk-bg="[stats-title] microscopic world bacteria cells"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-deep-space/85" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="stats-title" className="text-center text-2xl md:text-3xl font-bold text-soft-white mb-12">
          The Scale of the <span className="text-teal-glow">Invisible World</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-glow mb-2">{stat.value}</div>
              <div className="text-muted-blue text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
