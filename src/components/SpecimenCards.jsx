import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'spec-tardigrade',
    titleId: 'spec-tardigrade-title',
    descId: 'spec-tardigrade-desc',
    imgId: 'spec-img-mc008',
    title: 'Tardigrade',
    desc: 'The "water bear" — nearly indestructible microscopic animal that survives extreme conditions including the vacuum of space.',
    tag: 'Micro-animal',
    tagColor: 'text-cosmos-teal',
  },
  {
    id: 'spec-snowflake',
    titleId: 'spec-snowflake-title',
    descId: 'spec-snowflake-desc',
    imgId: 'spec-img-mc009',
    title: 'Snowflake Crystal',
    desc: 'Each snowflake is a unique hexagonal ice crystal, shaped by temperature and humidity as it falls through the atmosphere.',
    tag: 'Ice Crystal',
    tagColor: 'text-cosmos-cyan',
  },
  {
    id: 'spec-red-blood',
    titleId: 'spec-red-blood-title',
    descId: 'spec-red-blood-desc',
    imgId: 'spec-img-mc010',
    title: 'Red Blood Cells',
    desc: 'Biconcave discs of hemoglobin that carry oxygen through the bloodstream — 25 trillion of them in the human body.',
    tag: 'Human Cell',
    tagColor: 'text-red-400',
  },
  {
    id: 'spec-mite',
    titleId: 'spec-mite-title',
    descId: 'spec-mite-desc',
    imgId: 'spec-img-mc011',
    title: 'Dust Mite',
    desc: 'Microscopic arachnids that inhabit household dust, feeding on shed skin cells — invisible yet omnipresent in our homes.',
    tag: 'Arachnid',
    tagColor: 'text-cosmos-purple',
  },
  {
    id: 'spec-virus',
    titleId: 'spec-virus-title',
    descId: 'spec-virus-desc',
    imgId: 'spec-img-mc012',
    title: 'Virus Particle',
    desc: 'At the boundary of life and chemistry, viruses are nanoscale packages of genetic code wrapped in protein shells.',
    tag: 'Nanoscale',
    tagColor: 'text-yellow-400',
  },
  {
    id: 'spec-spore',
    titleId: 'spec-spore-title',
    descId: 'spec-spore-desc',
    imgId: 'spec-img-mc013',
    title: 'Fungal Spores',
    desc: 'Reproductive units of fungi, released in billions into the air — the seeds of an invisible kingdom beneath our feet.',
    tag: 'Fungi',
    tagColor: 'text-orange-400',
  },
];

const SpecimenCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-cosmos-navy py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-4">
            Featured Specimens
          </p>
          <h2
            id="specimens-title"
            className="font-display text-4xl md:text-5xl font-bold text-cosmos-text"
          >
            Meet the Inhabitants
          </h2>
          <p className="text-cosmos-muted mt-4 max-w-xl mx-auto font-sans text-base leading-relaxed">
            From indestructible water bears to the crystalline perfection of snowflakes — the microscopic world is full of extraordinary characters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specimens.map((spec) => (
            <div
              key={spec.id}
              className="bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden group hover:border-cosmos-teal/50 hover:shadow-cosmos-glow transition-all duration-300"
            >
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  alt={spec.title}
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.descId}] [${spec.titleId}] [specimens-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/90 to-transparent" />
              </div>
              <div className="p-6">
                <span className={`text-xs uppercase tracking-widest font-sans font-semibold ${spec.tagColor} mb-2 block`}>
                  {spec.tag}
                </span>
                <h3 id={spec.titleId} className="font-display text-cosmos-text text-xl font-semibold mb-3">
                  {spec.title}
                </h3>
                <p id={spec.descId} className="text-cosmos-muted text-sm font-sans leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecimenCards;
