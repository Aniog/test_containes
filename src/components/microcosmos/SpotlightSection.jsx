import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-1',
    titleId: 'spot-title-1',
    descId: 'spot-desc-1',
    imgId: 'spot-img-a1b2c3',
    title: 'Bioluminescent Plankton',
    subtitle: 'Noctiluca scintillans',
    description: 'These single-celled organisms produce a ghostly blue glow when disturbed, turning ocean waves into rivers of living light. The phenomenon is caused by a chemical reaction involving luciferin and luciferase.',
    tag: 'Marine Microbe',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'spot-2',
    titleId: 'spot-title-2',
    descId: 'spot-desc-2',
    imgId: 'spot-img-d4e5f6',
    title: 'Mycelial Networks',
    subtitle: 'Wood Wide Web',
    description: 'Beneath every forest floor lies an intricate network of fungal threads connecting tree roots across vast distances. Trees communicate and share nutrients through this underground internet of life.',
    tag: 'Fungi',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'spot-3',
    titleId: 'spot-title-3',
    descId: 'spot-desc-3',
    imgId: 'spot-img-g7h8i9',
    title: 'Slime Mold Intelligence',
    subtitle: 'Physarum polycephalum',
    description: 'Without a brain or nervous system, slime molds can solve mazes, find the shortest path between food sources, and even recreate efficient transport networks — challenging our understanding of intelligence.',
    tag: 'Protist',
    ratio: '3x4',
    width: 600,
  },
];

export default function SpotlightSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="spotlight" ref={containerRef} className="bg-cosmos-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Featured Wonders
          </p>
          <h2
            id="spot-section-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Microscopic
            <span className="bg-gradient-to-r from-cosmos-teal to-cosmos-purple bg-clip-text text-transparent"> Marvels</span>
          </h2>
          <p
            id="spot-section-desc"
            className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Some microorganisms defy our expectations of what life can do — glowing, thinking, and connecting in ways that seem almost magical.
          </p>
        </div>

        {/* Three tall portrait cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ minHeight: '520px' }}
            >
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.description}</span>

              {/* Background image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [spot-section-desc] [spot-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-cosmos-teal/20 text-cosmos-teal font-grotesk text-xs font-semibold mb-3 w-fit">
                  {item.tag}
                </span>
                <h3 className="font-grotesk font-bold text-xl text-cosmos-text mb-1">
                  {item.title}
                </h3>
                <p className="font-inter text-cosmos-teal text-xs italic mb-3">
                  {item.subtitle}
                </p>
                <p className="font-inter text-cosmos-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden transition-all">
                  {item.description}
                </p>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-cosmos-teal/0 group-hover:border-cosmos-teal/30 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
