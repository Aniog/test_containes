import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-1',
    title: 'The Human Microbiome',
    subtitle: 'Your Inner Ecosystem',
    desc: 'Trillions of microorganisms live in and on your body, forming a complex ecosystem that influences digestion, immunity, and even mental health. The gut microbiome alone contains over 1,000 species of bacteria.',
    imgId: 'spotlight-img-mc020',
    titleId: 'spotlight-spot-1-title',
    descId: 'spotlight-spot-1-desc',
    tag: 'Human Biology',
  },
  {
    id: 'spot-2',
    title: 'Extremophiles',
    subtitle: 'Life at the Edge',
    desc: 'Microorganisms that thrive in conditions once thought impossible for life — boiling hydrothermal vents, acidic hot springs, frozen Antarctic ice, and even the vacuum of space.',
    imgId: 'spotlight-img-mc021',
    titleId: 'spotlight-spot-2-title',
    descId: 'spotlight-spot-2-desc',
    tag: 'Astrobiology',
  },
  {
    id: 'spot-3',
    title: 'Bioluminescence',
    subtitle: 'Living Light',
    desc: 'Some microorganisms produce their own light through chemical reactions. Dinoflagellates create the magical blue glow seen in ocean waves at night, while firefly bacteria illuminate the deep sea.',
    imgId: 'spotlight-img-mc022',
    titleId: 'spotlight-spot-3-title',
    descId: 'spotlight-spot-3-desc',
    tag: 'Marine Biology',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            Deep Dives
          </span>
          <h2 id="spotlight-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Spotlight Stories
          </h2>
          <p id="spotlight-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Fascinating chapters from the microscopic world — stories that challenge our understanding of life, survival, and the boundaries of biology.
          </p>
        </div>

        {/* Spotlight items */}
        <div className="flex flex-col gap-16">
          {spotlightItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-cosmos-teal/20 shadow-[0_0_40px_rgba(0,212,200,0.08)] group">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spotlight-subtitle] [spotlight-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover bg-cosmos-card group-hover:scale-105 transition-transform duration-500"
                  style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/40 to-transparent pointer-events-none" />
              </div>

              {/* Text */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cosmos-teal/10 text-cosmos-teal border border-cosmos-teal/30 mb-4">
                  {item.tag}
                </span>
                <p className="text-cosmos-dim text-sm font-semibold tracking-widest uppercase mb-2">{item.subtitle}</p>
                <h3 id={item.titleId} className="text-cosmos-text text-2xl md:text-3xl font-black mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-base leading-relaxed">
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

export default SpotlightSection;
