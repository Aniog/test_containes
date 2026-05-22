import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredItems = [
  {
    id: 'feat-1',
    imgId: 'feat-img-a1b2c3',
    titleId: 'feat-title-1',
    descId: 'feat-desc-1',
    title: 'Radiolarian Skeleton',
    description: 'Intricate silica skeleton of a single-celled marine organism, revealing nature\'s geometric perfection',
    tag: 'Marine Life',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'feat-2',
    imgId: 'feat-img-d4e5f6',
    titleId: 'feat-title-2',
    descId: 'feat-desc-2',
    title: 'Butterfly Wing Scale',
    description: 'Nanostructures on butterfly wing scales create iridescent colors through light interference',
    tag: 'Entomology',
    ratio: '3x2',
    width: 900,
  },
];

const ExploreFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="mb-16">
      <h2
        className="text-2xl font-bold text-white mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Featured Specimens
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-700 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover bg-slate-800 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-teal-900/70 text-teal-300 border border-teal-700 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {item.tag}
              </span>
              <h3
                id={item.titleId}
                className="text-white font-bold text-xl mt-3 mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </h3>
              <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreFeatured;
