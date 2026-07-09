import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'spec-01',
    titleId: 'spec-01-title',
    descId: 'spec-01-desc',
    imgId: 'spec-01-img-mc030',
    name: 'Tardigrade',
    subtitle: 'Water Bear',
    description: 'Nearly indestructible microscopic animals that can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C. They enter a state called cryptobiosis, suspending all metabolic processes.',
    size: '0.1 – 1.5 mm',
    habitat: 'Moss, Lichen, Freshwater',
    discovered: '1773',
    tags: ['Extremophile', 'Invertebrate', 'Cryptobiosis'],
  },
  {
    id: 'spec-02',
    titleId: 'spec-02-title',
    descId: 'spec-02-desc',
    imgId: 'spec-02-img-mc031',
    name: 'Diatom',
    subtitle: 'Glass Algae',
    description: 'Single-celled algae encased in intricate silica shells called frustules. Their geometric precision rivals the finest human engineering. Diatoms produce about 20% of Earth\'s oxygen.',
    size: '2 – 200 μm',
    habitat: 'Oceans, Freshwater, Soil',
    discovered: '1703',
    tags: ['Algae', 'Silica Shell', 'Photosynthesis'],
  },
  {
    id: 'spec-03',
    titleId: 'spec-03-title',
    descId: 'spec-03-desc',
    imgId: 'spec-03-img-mc032',
    name: 'Radiolaria',
    subtitle: 'Ocean Jewels',
    description: 'Marine protozoa with elaborate mineral skeletons of stunning geometric complexity. Their fossilized remains form thick sediment layers on the ocean floor, preserving millions of years of Earth\'s history.',
    size: '0.1 – 2 mm',
    habitat: 'Open Ocean',
    discovered: '1834',
    tags: ['Protozoa', 'Marine', 'Fossil Record'],
  },
];

export default function Specimens() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(specimens[0].id);

  const current = specimens.find((s) => s.id === active);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <section id="specimens" className="py-24 md:py-32 bg-cosmos-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-cosmos-violet font-semibold mb-4 font-heading">
            Featured Specimens
          </p>
          <h2
            id="specimens-title"
            className="font-heading text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Remarkable Microorganisms
          </h2>
          <p
            id="specimens-subtitle"
            className="text-cosmos-muted text-lg max-w-xl mx-auto"
          >
            Meet the extraordinary creatures and structures that inhabit the microscopic realm.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-4 mb-12">
          {specimens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 border ${
                active === s.id
                  ? 'bg-cosmos-violet/20 border-cosmos-violet text-cosmos-text shadow-glow-violet'
                  : 'border-cosmos-dim/30 text-cosmos-muted hover:border-cosmos-violet/50 hover:text-cosmos-text bg-transparent'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Specimen detail */}
        {current && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border border-cosmos-violet/20 shadow-glow-violet group">
              <img
                alt={current.name}
                data-strk-img-id={current.imgId}
                data-strk-img={`[${current.descId}] [${current.titleId}] [specimens-subtitle] [specimens-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="px-3 py-1 rounded-full bg-cosmos-violet/30 backdrop-blur-sm border border-cosmos-violet/40 text-cosmos-text text-xs font-heading font-semibold">
                  {current.subtitle}
                </span>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3
                id={current.titleId}
                className="font-heading text-3xl md:text-4xl font-bold text-cosmos-text mb-2"
              >
                {current.name}
              </h3>
              <p className="text-cosmos-cyan text-sm font-heading font-semibold mb-5 tracking-wide">
                {current.subtitle}
              </p>
              <p
                id={current.descId}
                className="text-cosmos-muted leading-relaxed mb-8 text-base"
              >
                {current.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Size', value: current.size },
                  { label: 'Habitat', value: current.habitat },
                  { label: 'Discovered', value: current.discovered },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-cosmos-card border border-cosmos-cyan/10 p-4 text-center"
                  >
                    <p className="text-xs text-cosmos-dim uppercase tracking-widest font-heading mb-1">
                      {stat.label}
                    </p>
                    <p className="text-cosmos-text font-semibold text-sm font-heading">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-cosmos-cyan/10 border border-cosmos-cyan/20 text-cosmos-cyan text-xs font-heading font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
