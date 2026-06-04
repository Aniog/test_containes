import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featured = [
  {
    id: 'feat-01',
    titleId: 'feat-title-01',
    descId: 'feat-desc-01',
    imgId: 'featured-img-mc-01',
    title: 'Tardigrade: The Indestructible',
    desc: 'Water bears can survive in outer space, extreme radiation, and temperatures from -272°C to 150°C.',
    category: 'Extremophiles',
    size: 'large',
  },
  {
    id: 'feat-02',
    titleId: 'feat-title-02',
    descId: 'feat-desc-02',
    imgId: 'featured-img-mc-02',
    title: 'Radiolarian Shell',
    desc: 'Intricate silica skeleton of a single-celled marine organism.',
    category: 'Protozoa',
    size: 'small',
  },
  {
    id: 'feat-03',
    titleId: 'feat-title-03',
    descId: 'feat-desc-03',
    imgId: 'featured-img-mc-03',
    title: 'Pollen Grain',
    desc: 'The microscopic vessel carrying plant genetic material.',
    category: 'Botany',
    size: 'small',
  },
  {
    id: 'feat-04',
    titleId: 'feat-title-04',
    descId: 'feat-desc-04',
    imgId: 'featured-img-mc-04',
    title: 'Mitosis in Action',
    desc: 'A cell dividing — chromosomes aligning before separation.',
    category: 'Cell Biology',
    size: 'small',
  },
  {
    id: 'feat-05',
    titleId: 'feat-title-05',
    descId: 'feat-desc-05',
    imgId: 'featured-img-mc-05',
    title: 'Salt Crystal Lattice',
    desc: 'Sodium chloride forming perfect cubic crystal structures.',
    category: 'Mineralogy',
    size: 'small',
  },
];

const Featured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 md:py-32 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
            Editor's Picks
          </span>
          <h2 id="featured-title" className="text-4xl md:text-5xl font-black text-[#e2f0fb] mb-4">
            Featured Specimens
          </h2>
          <p id="featured-subtitle" className="text-[#7fb3cc] text-lg max-w-xl mx-auto">
            Handpicked microscopic wonders that showcase the extraordinary diversity of the invisible world.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* Large featured item */}
          <div className="col-span-2 row-span-2 group bg-[#0d1a24] border border-[rgba(0,212,255,0.12)] rounded-3xl overflow-hidden hover:border-[rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] transition-all duration-300">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <img
                data-strk-img-id={featured[0].imgId}
                data-strk-img={`[${featured[0].descId}] [${featured[0].titleId}] [featured-subtitle] [featured-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ background: '#0d1a24' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-[#0d1a24]/20 to-transparent" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-2 block">
                {featured[0].category}
              </span>
              <h3 id={featured[0].titleId} className="text-xl font-black text-[#e2f0fb] mb-2">
                {featured[0].title}
              </h3>
              <p id={featured[0].descId} className="text-[#7fb3cc] text-sm leading-relaxed">
                {featured[0].desc}
              </p>
            </div>
          </div>

          {/* Smaller items */}
          {featured.slice(1).map((item) => (
            <div
              key={item.id}
              className="group bg-[#0d1a24] border border-[rgba(0,212,255,0.1)] rounded-2xl overflow-hidden hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [featured-subtitle] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#0d1a24' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24]/60 to-transparent" />
              </div>
              <div className="p-4">
                <span className="text-xs text-[#00d4ff] uppercase tracking-widest mb-1 block">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-sm font-bold text-[#e2f0fb] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#4a7a96] text-xs leading-snug">
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

export default Featured;
