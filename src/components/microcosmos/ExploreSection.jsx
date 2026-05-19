import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000+', label: 'Species Documented' },
  { value: '0.001mm', label: 'Smallest Organism' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '99%', label: 'Life is Microscopic' },
];

const features = [
  {
    id: 'feat-1',
    titleId: 'feat-title-1',
    subtitleId: 'feat-sub-1',
    title: 'Cellular Architecture',
    subtitle: 'The building blocks of all life — intricate, self-replicating, and endlessly complex.',
    imgId: 'feat-img-d4e5f6',
    ratio: '4x3',
    width: 800,
  },
  {
    id: 'feat-2',
    titleId: 'feat-title-2',
    subtitleId: 'feat-sub-2',
    title: 'Bioluminescent Life',
    subtitle: 'Organisms that produce their own light, glowing in the dark depths of oceans and forests.',
    imgId: 'feat-img-g7h8i9',
    ratio: '4x3',
    width: 800,
  },
  {
    id: 'feat-3',
    titleId: 'feat-title-3',
    subtitleId: 'feat-sub-3',
    title: 'Crystal Formations',
    subtitle: 'Minerals and salts forming geometric perfection at the microscopic scale.',
    imgId: 'feat-img-j1k2l3',
    ratio: '4x3',
    width: 800,
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] font-semibold mb-3">
            What Lies Beneath
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore the Microscopic Universe
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every drop of water, every grain of soil, every breath of air teems with life and structure invisible to the naked eye.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d1a24] border border-[#1e3a4a] rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-[#00d4c8] mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#0d1a24] border border-[#1e3a4a] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-[#00d4c8]/5"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={feat.title}
                  className="w-full object-cover"
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.subtitleId}] [${feat.titleId}]`}
                  data-strk-img-ratio={feat.ratio}
                  data-strk-img-width={feat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="text-xl font-semibold text-white mb-2">
                  {feat.title}
                </h3>
                <p id={feat.subtitleId} className="text-slate-400 text-sm leading-relaxed">
                  {feat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
