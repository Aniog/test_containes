import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const GALLERY_ITEMS = [
  { id: 'gal-title-1',  imgId: 'gal-img-mc010', title: 'Tardigrade',           subtitle: 'Water Bear',          ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-2',  imgId: 'gal-img-mc011', title: 'Diatom Silica Shell',  subtitle: 'Phytoplankton',       ratio: '4x3',  width: 700, span: 'md:col-span-2' },
  { id: 'gal-title-3',  imgId: 'gal-img-mc012', title: 'Mycelium Threads',     subtitle: 'Fungal Network',      ratio: '4x3',  width: 700, span: 'md:col-span-2' },
  { id: 'gal-title-4',  imgId: 'gal-img-mc013', title: 'Radiolarian',          subtitle: 'Marine Protozoa',     ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-5',  imgId: 'gal-img-mc014', title: 'Pollen Grain',         subtitle: 'Flowering Plant',     ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-6',  imgId: 'gal-img-mc015', title: 'Spirulina Algae',      subtitle: 'Cyanobacteria',       ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-7',  imgId: 'gal-img-mc016', title: 'Nematode Worm',        subtitle: 'Roundworm',           ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-8',  imgId: 'gal-img-mc017', title: 'Paramecium',           subtitle: 'Ciliate Protozoa',    ratio: '16x9', width: 900, span: 'md:col-span-3' },
  { id: 'gal-title-9',  imgId: 'gal-img-mc018', title: 'Dinoflagellate',       subtitle: 'Bioluminescent Algae',ratio: '4x3',  width: 700, span: 'md:col-span-2' },
  { id: 'gal-title-10', imgId: 'gal-img-mc019', title: 'Foraminifera',         subtitle: 'Shell Protozoa',      ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-11', imgId: 'gal-img-mc020', title: 'Spirogyra',            subtitle: 'Green Algae',         ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-12', imgId: 'gal-img-mc021', title: 'Hydra',                subtitle: 'Freshwater Polyp',    ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-13', imgId: 'gal-img-mc022', title: 'Dust Mite',            subtitle: 'Arachnida',           ratio: '4x3',  width: 700, span: 'md:col-span-2' },
  { id: 'gal-title-14', imgId: 'gal-img-mc023', title: 'Snowflake Crystal',    subtitle: 'Ice Microstructure',  ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-15', imgId: 'gal-img-mc024', title: 'Butterfly Wing Scale', subtitle: 'Lepidoptera',         ratio: '16x9', width: 900, span: 'md:col-span-3' },
  { id: 'gal-title-16', imgId: 'gal-img-mc025', title: 'Red Blood Cell',       subtitle: 'Erythrocyte',         ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-17', imgId: 'gal-img-mc026', title: 'Neuron Network',       subtitle: 'Brain Cell',          ratio: '4x3',  width: 700, span: 'md:col-span-2' },
  { id: 'gal-title-18', imgId: 'gal-img-mc027', title: 'Coral Polyp',          subtitle: 'Reef Builder',        ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-19', imgId: 'gal-img-mc028', title: 'Moss Spore',           subtitle: 'Bryophyta',           ratio: '1x1',  width: 500, span: '' },
  { id: 'gal-title-20', imgId: 'gal-img-mc029', title: 'Virus Particle',       subtitle: 'Bacteriophage',       ratio: '1x1',  width: 500, span: '' },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4 inline-block">
            Microscopy Gallery
          </span>
          <h2 id="gallery-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Portraits of the Invisible
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Stunning electron and light microscopy images revealing the intricate architecture of microscopic life.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-slate-700/50 hover:border-slate-500/70 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: '180px' }}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 id={item.id} className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.subtitle}</p>
              </div>
              {/* Always-visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 md:hidden">
                <h3 id={`${item.id}-mob`} className="text-white font-semibold text-xs">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
