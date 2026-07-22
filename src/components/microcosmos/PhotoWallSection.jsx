import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photoWallItems = [
  {
    id: 'pw-1',
    title: 'Mitochondria',
    desc: 'Powerhouse of the cell, generating ATP through oxidative phosphorylation',
    imgId: 'photowall-img-mc023',
    titleId: 'pw-1-title',
    descId: 'pw-1-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-2',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal formation showing perfect hexagonal symmetry',
    imgId: 'photowall-img-mc024',
    titleId: 'pw-2-title',
    descId: 'pw-2-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-3',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructures on butterfly wings creating iridescent color through light interference',
    imgId: 'photowall-img-mc025',
    titleId: 'pw-3-title',
    descId: 'pw-3-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-4',
    title: 'Coral Polyp',
    desc: 'Microscopic coral polyp with extended tentacles for feeding',
    imgId: 'photowall-img-mc026',
    titleId: 'pw-4-title',
    descId: 'pw-4-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-5',
    title: 'Spore Release',
    desc: 'Fungal spores being released in a cloud of microscopic particles',
    imgId: 'photowall-img-mc027',
    titleId: 'pw-5-title',
    descId: 'pw-5-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-6',
    title: 'Radiolarian',
    desc: 'Intricate silica skeleton of a radiolarian protozoan',
    imgId: 'photowall-img-mc028',
    titleId: 'pw-6-title',
    descId: 'pw-6-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-7',
    title: 'Stem Cells',
    desc: 'Human embryonic stem cells under fluorescence microscopy',
    imgId: 'photowall-img-mc029',
    titleId: 'pw-7-title',
    descId: 'pw-7-desc',
    ratio: '1x1',
    width: '400',
  },
  {
    id: 'pw-8',
    title: 'Dust Mite',
    desc: 'Scanning electron microscope image of a common house dust mite',
    imgId: 'photowall-img-mc030',
    titleId: 'pw-8-title',
    descId: 'pw-8-desc',
    ratio: '1x1',
    width: '400',
  },
];

const PhotoWallSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            Visual Wonders
          </span>
          <h2 id="photowall-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Photo Wall
          </h2>
          <p id="photowall-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            A curated collection of the most breathtaking microscopic images — each one a window into a world beyond ordinary perception.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photoWallItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300 aspect-square"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [photowall-subtitle] [photowall-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-cosmos-card"
                style={{ opacity: 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 id={item.titleId} className="text-cosmos-text text-xs font-bold leading-tight">{item.title}</h4>
                <p id={item.descId} className="text-cosmos-muted text-xs mt-0.5 line-clamp-2 hidden md:block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoWallSection;
