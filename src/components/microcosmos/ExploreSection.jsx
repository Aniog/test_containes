import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-mc001',
    titleId: 'explore-title-mc001',
    descId: 'explore-desc-mc001',
    title: 'Bacterial Worlds',
    desc: 'Colonies of bacteria form intricate patterns and structures, creating ecosystems invisible to the naked eye yet teeming with complex life.',
    tag: 'Microbiology',
  },
  {
    id: 'feat-crystals',
    imgId: 'explore-img-mc002',
    titleId: 'explore-title-mc002',
    descId: 'explore-desc-mc002',
    title: 'Crystal Formations',
    desc: 'Minerals and salts crystallize into geometric masterpieces under polarized light, revealing nature\'s mathematical precision.',
    tag: 'Mineralogy',
  },
  {
    id: 'feat-cells',
    imgId: 'explore-img-mc003',
    titleId: 'explore-title-mc003',
    descId: 'explore-desc-mc003',
    title: 'Living Cells',
    desc: 'Every cell is a universe unto itself — organelles, membranes, and molecular machines working in perfect harmony.',
    tag: 'Cell Biology',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What Lies Beneath
          </p>
          <h2
            id="explore-section-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Explore the Microscopic Realm
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From single-celled organisms to crystalline structures, the microscopic world is filled with wonders that challenge our perception of reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3
                  id={item.titleId}
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
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
