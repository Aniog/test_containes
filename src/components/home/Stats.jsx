import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', desc: 'More than all stars in the universe' },
  { value: '99%', label: 'Undiscovered Species', desc: 'Of microbial life remains unknown' },
  { value: '3.5B', label: 'Years of Evolution', desc: 'Microbes have existed on Earth' },
  { value: '50%', label: 'Oxygen Produced', desc: 'By ocean phytoplankton daily' },
];

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0d1a24] relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        data-strk-bg-id="stats-bg-mc050"
        data-strk-bg="[stats-quote] microscopic bacteria cells abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d1a24]/80 to-[#0d1a24]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Quote */}
        <div className="text-center mb-20">
          <div className="text-[#00d4c8] text-6xl font-serif leading-none mb-4 opacity-40">"</div>
          <blockquote
            id="stats-quote"
            className="text-2xl md:text-3xl font-light text-[#e2f0f9] max-w-3xl mx-auto leading-relaxed italic"
          >
            The world is not only stranger than we imagine — it is stranger than we can imagine.
          </blockquote>
          <p className="text-[#4a7a9b] text-sm mt-4 font-medium">— J.B.S. Haldane, Biologist</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-[#050a0f]/50 border border-[#00d4c8]/10 rounded-2xl hover:border-[#00d4c8]/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00d4c8] mb-2">
                {stat.value}
              </div>
              <div className="text-[#e2f0f9] font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#4a7a9b] text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
