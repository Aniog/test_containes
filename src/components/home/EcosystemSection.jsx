import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'ocean',
    titleId: 'eco-ocean-title',
    descId: 'eco-ocean-desc',
    imgId: 'eco-img-ocean-mc021',
    title: 'Ocean Microbiome',
    desc: 'Marine microorganisms produce over half of Earth\'s oxygen and form the base of all ocean food webs.',
    stat: '70%',
    statLabel: 'of Earth\'s oxygen',
  },
  {
    id: 'soil',
    titleId: 'eco-soil-title',
    descId: 'eco-soil-desc',
    imgId: 'eco-img-soil-mc022',
    title: 'Soil Ecosystem',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
    stat: '1 Billion',
    statLabel: 'bacteria per gram',
  },
  {
    id: 'human',
    titleId: 'eco-human-title',
    descId: 'eco-human-desc',
    imgId: 'eco-img-human-mc023',
    title: 'Human Microbiome',
    desc: 'Trillions of microbes live in and on the human body, influencing immunity, digestion, and even mood.',
    stat: '38 Trillion',
    statLabel: 'microbial cells',
  },
];

const EcosystemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="ecosystem" ref={containerRef} className="bg-cosmos-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-amber text-sm font-semibold tracking-widest uppercase">
            Microbial Ecosystems
          </span>
          <h2
            id="eco-section-title"
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Where Microbes Thrive
          </h2>
          <p
            id="eco-section-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From the deepest ocean trenches to the human gut, microbial ecosystems
            are the invisible engines that power all life on Earth.
          </p>
        </div>

        {/* Ecosystem cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="group relative overflow-hidden rounded-2xl border border-cosmos-border hover:border-cosmos-amber/50 transition-all duration-300"
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={`eco-bg-${eco.id}-mc`}
                data-strk-bg={`[${eco.descId}] [${eco.titleId}] [eco-section-subtitle] [eco-section-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black via-cosmos-black/60 to-cosmos-black/20" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end min-h-[420px]">
                <div className="mb-4">
                  <div className="text-4xl font-extrabold text-cosmos-amber">{eco.stat}</div>
                  <div className="text-sm text-slate-400">{eco.statLabel}</div>
                </div>
                <h3
                  id={eco.titleId}
                  className="text-2xl font-bold text-white mb-3 group-hover:text-cosmos-amber transition-colors duration-300"
                >
                  {eco.title}
                </h3>
                <p
                  id={eco.descId}
                  className="text-slate-300 text-sm leading-relaxed"
                >
                  {eco.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner */}
        <div className="relative overflow-hidden rounded-3xl border border-cosmos-border">
          <div
            className="absolute inset-0"
            data-strk-bg-id="eco-banner-bg-mc024"
            data-strk-bg="[eco-banner-subtitle] [eco-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cosmos-black via-cosmos-black/80 to-transparent" />

          <div className="relative z-10 py-20 px-10 md:px-16 max-w-2xl">
            <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-4 block">
              Did You Know?
            </span>
            <h3
              id="eco-banner-title"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Microbes Predate All Complex Life
            </h3>
            <p
              id="eco-banner-subtitle"
              className="text-slate-300 text-lg leading-relaxed mb-8"
            >
              Microbial life has existed for 3.5 billion years — over 75% of Earth's entire history.
              They survived every mass extinction and continue to shape the planet's chemistry today.
            </p>
            <a
              href="#specimens"
              className="inline-flex items-center gap-2 bg-cosmos-teal text-cosmos-black font-bold px-7 py-3.5 rounded-full hover:bg-cosmos-cyan transition-all duration-300"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
