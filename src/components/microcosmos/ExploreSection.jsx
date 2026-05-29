import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-cell',
    imgId: 'explore-img-mc002',
    title: 'The Cell Universe',
    description: 'Inside every living cell lies a cosmos of organelles, proteins, and molecular machines working in perfect harmony.',
    tag: 'Biology',
    color: '#00d4ff',
  },
  {
    id: 'world-crystal',
    imgId: 'explore-img-mc003',
    title: 'Crystal Kingdoms',
    description: 'Minerals and salts form breathtaking geometric palaces when viewed under polarized light — nature\'s own architecture.',
    tag: 'Mineralogy',
    color: '#7c3aed',
  },
  {
    id: 'world-bacteria',
    imgId: 'explore-img-mc004',
    title: 'Bacterial Worlds',
    description: 'Billions of microorganisms form complex colonies, biofilms, and ecosystems invisible to the unaided eye.',
    tag: 'Microbiology',
    color: '#00ffcc',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4ff] mb-3">Worlds Within Worlds</p>
          <h2 id="explore-heading" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-4">
            Three Realms of the Microscopic
          </h2>
          <p className="text-[#8bafc7] max-w-xl mx-auto leading-relaxed">
            Each domain of the micro-world reveals its own laws, beauty, and wonder.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {worlds.map((w) => (
            <div
              key={w.id}
              className="group relative rounded-2xl overflow-hidden border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] bg-[#0f2236]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[${w.id}-desc] [${w.id}-title] [explore-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2236] via-transparent to-transparent" />
                <span
                  className="absolute top-4 left-4 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${w.color}22`, color: w.color, border: `1px solid ${w.color}44` }}
                >
                  {w.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={`${w.id}-title`} className="text-xl font-semibold text-[#f0f8ff] mb-3">{w.title}</h3>
                <p id={`${w.id}-desc`} className="text-[#8bafc7] text-sm leading-relaxed">{w.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[#00d4ff] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Discover more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
