import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-mc016',
    titleId: 'feat-title-1',
    title: 'Bioluminescence',
    tag: 'Marine Life',
    description: 'Organisms that produce and emit light through chemical reactions, creating ethereal glows in the deep ocean.',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'feat-mc017',
    titleId: 'feat-title-2',
    title: 'Snowflake Symmetry',
    tag: 'Crystallography',
    description: 'Every snowflake is a unique hexagonal crystal, shaped by temperature and humidity as it falls through the atmosphere.',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'feat-mc018',
    titleId: 'feat-title-3',
    title: 'Mitosis in Action',
    tag: 'Cell Biology',
    description: 'The choreographed dance of chromosomes as a single cell divides into two identical daughter cells.',
    ratio: '16x9',
    width: 800,
  },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="featured" ref={containerRef} className="bg-[#050a14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="feat-label" className="text-violet-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Spotlight
          </p>
          <h2 id="feat-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Phenomena
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Some of the most awe-inspiring phenomena that microscopy has revealed to humanity.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  alt={feat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={feat.id}
                  data-strk-img={`[${feat.titleId}] [feat-title] [feat-label] microscopy`}
                  data-strk-img-ratio={feat.ratio}
                  data-strk-img-width={feat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b2a]/60 md:block hidden" />
              </div>
              {/* Text */}
              <div className="bg-[#0d1b2a] p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-5 w-fit">
                  {feat.tag}
                </span>
                <h3 id={feat.titleId} className="text-white text-3xl font-bold mb-4">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
