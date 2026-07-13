import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-bacteria',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    imgId: 'about-feat-img-bact-a1b2',
    title: 'Bacteria & Archaea',
    desc: 'The oldest life forms on Earth, thriving in every environment from boiling vents to frozen tundra.',
  },
  {
    id: 'feat-cells',
    titleId: 'feat-cells-title',
    descId: 'feat-cells-desc',
    imgId: 'about-feat-img-cell-c3d4',
    title: 'Living Cells',
    desc: 'The fundamental unit of life — each cell a self-contained universe of chemical reactions.',
  },
  {
    id: 'feat-fungi',
    titleId: 'feat-fungi-title',
    descId: 'feat-fungi-desc',
    imgId: 'about-feat-img-fung-e5f6',
    title: 'Fungi & Spores',
    desc: 'Nature\'s recyclers, weaving invisible networks through soil and wood that sustain entire ecosystems.',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#050d1a] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest mb-4 block">
            What is MicroCosmos?
          </span>
          <h2
            id="about-title"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Universe Hidden in Plain Sight
          </h2>
          <p
            id="about-subtitle"
            className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Beneath every surface, inside every drop of water, and within every breath of air
            lies a teeming world of microscopic life. MicroCosmos is your window into this
            invisible realm — a place where the rules of the visible world dissolve and
            something far stranger takes over.
          </p>
        </div>

        {/* Two-column layout: large image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Microscopic world close-up"
              data-strk-img-id="about-main-img-mc002"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cosmos-teal/10 to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-cosmos-teal/30 text-cosmos-teal text-xs font-medium">
              Electron Microscopy
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold text-white">
              Life at the Nanoscale
            </h3>
            <p className="text-slate-300 leading-relaxed">
              The microbial world is not just small — it is fundamentally different. Organisms
              here live and die in milliseconds, communicate through chemical signals, and
              form communities as complex as any rainforest.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Modern imaging technology — from scanning electron microscopes to fluorescence
              confocal systems — has finally allowed us to witness this world in breathtaking
              detail. What we found changed everything we thought we knew about life.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Microbiology', 'Cell Biology', 'Virology', 'Mycology', 'Protistology'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/30 text-cosmos-teal text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl overflow-hidden bg-[#0a1628] border border-white/10 hover:border-cosmos-teal/40 transition-colors duration-300 group"
            >
              <div className="relative aspect-[3x2] overflow-hidden">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [about-subtitle] [about-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h4 id={feat.titleId} className="font-display text-lg font-semibold text-white mb-2">
                  {feat.title}
                </h4>
                <p id={feat.descId} className="text-slate-400 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
