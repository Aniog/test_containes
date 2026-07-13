import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', desc: 'More than all stars in the observable universe' },
  { value: '3.8B', label: 'Years of Evolution', desc: 'Microbial life predates all complex organisms' },
  { value: '50%', label: 'Oxygen Produced', desc: 'Half of Earth\'s oxygen comes from ocean microbes' },
  { value: '99%', label: 'Undiscovered Species', desc: 'The vast majority of microbes remain unknown' },
];

const StatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-black py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="stats-bg-mc010"
        data-strk-bg="[stats-quote] [stats-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-black/85" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,212,200,0.06)_0%,transparent_70%)]" />

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-cosmos-teal mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs leading-snug">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cosmos-teal text-6xl font-display leading-none mb-4 opacity-40">"</div>
          <blockquote
            id="stats-quote"
            className="font-display text-2xl md:text-3xl font-medium text-white leading-relaxed mb-6"
          >
            If you could see the microbial world, you would realize that the visible world
            is just the thin skin on top of an ocean of invisible life.
          </blockquote>
          <cite className="text-slate-400 text-sm not-italic">
            — Lynn Margulis, Evolutionary Biologist
          </cite>
        </div>

        {/* Divider */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              id="stats-title"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
            >
              The Scale of the Invisible
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If all the microbes on Earth were laid end to end, they would stretch
              across the Milky Way galaxy — twice. The microbial world is not just
              large; it is the foundation upon which all visible life depends.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Modern science is only beginning to understand the complexity of these
              invisible ecosystems. Every discovery reveals new layers of sophistication
              that challenge our understanding of what life can be.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Scale of microbial life"
              data-strk-img-id="stats-side-img-mc011"
              data-strk-img="[stats-title] [stats-quote]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cosmos-teal/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
