import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '2 trillion', label: 'Galaxies in the observable universe' },
  { value: '13.8 Gyr', label: 'Age of the universe' },
  { value: '299,792 km/s', label: 'Speed of light' },
  { value: '8 min 20 s', label: 'Light travel time from Sun to Earth' },
];

export default function HomeStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-[#0a0e1a] overflow-hidden">
      {/* Background nebula strip */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Nebula background"
          data-strk-img-id="stats-bg-img-7g8h"
          data-strk-img="[stats-heading] Milky Way nebula deep space"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0e1a] via-transparent to-[#0a0e1a]" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#2dd4bf] mb-3">
            By the Numbers
          </p>
          <h2 id="stats-heading" className="font-serif text-3xl md:text-5xl font-light text-[#f0f4ff]">
            The Scale of the Cosmos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center p-6 bg-[#0f1629]/60 backdrop-blur-sm border border-[#1e2a4a] rounded-2xl">
              <p className="font-serif text-2xl md:text-3xl text-[#f5c842] font-light mb-2 leading-tight">
                {value}
              </p>
              <p className="text-xs text-[#8892b0] leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
