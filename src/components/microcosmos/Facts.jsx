import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Species on Earth', sub: 'Most undiscovered' },
  { value: '37T', label: 'Cells in Human Body', sub: 'Constantly renewing' },
  { value: '1μm', label: 'Average Bacterium', sub: 'Smaller than a hair' },
  { value: '99%', label: 'Microbial Diversity', sub: 'Yet to be catalogued' },
];

const photoStrip = [
  { id: 'strip-01', titleId: 'strip-01-title', descId: 'strip-01-desc', imgId: 'strip-01-img-mc040', title: 'Paramecium', desc: 'Paramecium ciliate protozoan microscopy swimming' },
  { id: 'strip-02', titleId: 'strip-02-title', descId: 'strip-02-desc', imgId: 'strip-02-img-mc041', title: 'Spirogyra', desc: 'Spirogyra green algae spiral chloroplast microscopy' },
  { id: 'strip-03', titleId: 'strip-03-title', descId: 'strip-03-desc', imgId: 'strip-03-img-mc042', title: 'Dust Mite', desc: 'House dust mite scanning electron microscope' },
  { id: 'strip-04', titleId: 'strip-04-title', descId: 'strip-04-desc', imgId: 'strip-04-img-mc043', title: 'Vitamin C Crystal', desc: 'Ascorbic acid vitamin C crystal polarized light microscopy' },
  { id: 'strip-05', titleId: 'strip-05-title', descId: 'strip-05-desc', imgId: 'strip-05-img-mc044', title: 'Hydra', desc: 'Hydra freshwater polyp tentacles microscopy' },
];

export default function Facts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="facts" ref={containerRef} className="py-24 md:py-32 bg-cosmos-deep relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cosmos-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-cosmos-card border border-cosmos-cyan/10 hover:border-cosmos-cyan/30 transition-all duration-300 hover:shadow-glow-sm"
            >
              <p
                className="font-heading text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #00ffcc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="text-cosmos-text font-semibold font-heading text-sm mb-1">{stat.label}</p>
              <p className="text-cosmos-dim text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Photo strip section */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-cosmos-cyan font-semibold mb-4 font-heading">
            More From the Collection
          </p>
          <h2
            id="facts-strip-title"
            className="font-heading text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Endless Wonders
          </h2>
          <p
            id="facts-strip-desc"
            className="text-cosmos-muted text-lg max-w-xl mx-auto"
          >
            Every drop of water, every grain of soil holds a universe of life waiting to be discovered.
          </p>
        </div>

        {/* Horizontal photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {photoStrip.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-cosmos-cyan/10 hover:border-cosmos-cyan/40 transition-all duration-500 hover:shadow-glow-md aspect-square"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [facts-strip-desc] [facts-strip-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 id={item.titleId} className="font-heading text-sm font-semibold text-cosmos-text">
                    {item.title}
                  </h4>
                  <p id={item.descId} className="text-cosmos-muted text-xs mt-0.5 hidden">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="w-12 h-px bg-cosmos-cyan/40 mx-auto mb-8" />
          <blockquote className="font-heading text-2xl md:text-3xl font-light text-cosmos-text leading-relaxed italic">
            "The universe is not only queerer than we suppose, but queerer than we{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffcc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              can suppose.
            </span>"
          </blockquote>
          <p className="text-cosmos-dim text-sm mt-4 font-heading tracking-wide">— J.B.S. Haldane</p>
          <div className="w-12 h-px bg-cosmos-cyan/40 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
