import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', color: 'text-teal-400' },
  { value: '0.001mm', label: 'Average Bacterium Size', color: 'text-cyan-400' },
  { value: '3.5B', label: 'Years of Microbial Life', color: 'text-purple-400' },
  { value: '99%', label: 'Species Undiscovered', color: 'text-emerald-400' },
];

const features = [
  {
    id: 'feat-bacteria',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    imgId: 'feat-img-bacteria-9a2c4f',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes that thrive in every environment on Earth, from boiling hydrothermal vents to frozen tundra.',
  },
  {
    id: 'feat-fungi',
    titleId: 'feat-fungi-title',
    descId: 'feat-fungi-desc',
    imgId: 'feat-img-fungi-3b7e1d',
    title: 'Fungi & Spores',
    desc: 'Microscopic spores and mycelium networks form the hidden internet of the forest floor, connecting ecosystems.',
  },
  {
    id: 'feat-algae',
    titleId: 'feat-algae-title',
    descId: 'feat-algae-desc',
    imgId: 'feat-img-algae-5c8f2a',
    title: 'Microalgae',
    desc: 'Photosynthetic microorganisms that produce over half of Earth\'s oxygen and form the base of aquatic food chains.',
  },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">What is MicroCosmos</span>
          <h2 id="intro-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            A Universe in Miniature
          </h2>
          <p id="intro-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The microbial world is the foundation of all life on Earth. These invisible organisms shape our climate, health, and the very air we breathe.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
              <div className={`font-space text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.1)]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [intro-subtitle] [intro-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="font-space text-xl font-semibold text-white mb-3">{feat.title}</h3>
                <p id={feat.descId} className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
