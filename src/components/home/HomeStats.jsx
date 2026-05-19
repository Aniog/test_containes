import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Bacteria on Earth', desc: 'More than all stars in the observable universe' },
  { value: '37T', label: 'Cells in Your Body', desc: 'Each one a universe of its own complexity' },
  { value: '0.001mm', label: 'Average Bacterium', desc: 'Invisible to the naked eye, yet full of life' },
  { value: '4B', label: 'Years of Microbial Life', desc: 'Microbes have existed since Earth\'s early days' },
];

export default function HomeStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-stats-bg-g7h8i9"
        data-strk-bg="[stats-title] microscopic world bacteria cells"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d1a]/85" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 id="stats-title" className="text-4xl md:text-5xl font-bold text-white">
            The Scale of the Invisible
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-8 text-center hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-3 glow-cyan">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
