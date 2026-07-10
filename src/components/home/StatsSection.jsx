import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '500+', label: 'Machines Installed' },
  { value: '40+', label: 'Countries Served' },
  { value: '99%', label: 'Customer Satisfaction' },
];

const StatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="stats-bg-factory-d4e5f6"
        data-strk-bg="[stats-title] industrial sheet metal factory machinery"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-brand-navy/85" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="stats-title" className="font-serif text-3xl md:text-4xl font-bold text-brand-white mb-3">
            Trusted by Industry Leaders Worldwide
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-2">
                {stat.value}
              </div>
              <div className="text-brand-white/60 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
