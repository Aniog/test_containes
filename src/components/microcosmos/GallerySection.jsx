import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'g1', titleId: 'gal-g1-title', descId: 'gal-g1-desc',
    imgId: 'gal-img-g1-mc020',
    title: 'Tardigrade',
    desc: 'Water bear under electron microscope — the most resilient animal on Earth',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1', width: '900',
  },
  {
    id: 'g2', titleId: 'gal-g2-title', descId: 'gal-g2-desc',
    imgId: 'gal-img-g2-mc021',
    title: 'Diatom Shell',
    desc: 'Silica shell of a marine diatom, geometric perfection at microscale',
    span: '',
    ratio: '1x1', width: '500',
  },
  {
    id: 'g3', titleId: 'gal-g3-title', descId: 'gal-g3-desc',
    imgId: 'gal-img-g3-mc022',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal branching pattern under polarized light microscopy',
    span: '',
    ratio: '1x1', width: '500',
  },
  {
    id: 'g4', titleId: 'gal-g4-title', descId: 'gal-g4-desc',
    imgId: 'gal-img-g4-mc023',
    title: 'Neuron Network',
    desc: 'Fluorescent staining reveals the branching dendrites of brain neurons',
    span: 'md:col-span-2',
    ratio: '16x9', width: '900',
  },
  {
    id: 'g5', titleId: 'gal-g5-title', descId: 'gal-g5-desc',
    imgId: 'gal-img-g5-mc024',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructures on butterfly wing scales create iridescent color',
    span: '',
    ratio: '1x1', width: '500',
  },
  {
    id: 'g6', titleId: 'gal-g6-title', descId: 'gal-g6-desc',
    imgId: 'gal-img-g6-mc025',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    span: '',
    ratio: '1x1', width: '500',
  },
  {
    id: 'g7', titleId: 'gal-g7-title', descId: 'gal-g7-desc',
    imgId: 'gal-img-g7-mc026',
    title: 'Pollen Grain',
    desc: 'Rose pollen grain surface texture under scanning electron microscope',
    span: '',
    ratio: '1x1', width: '500',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3 font-medium">
            Visual Archive
          </p>
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Gallery of the Invisible
          </h2>
          <p id="gallery-section-desc" className="text-slate-400 max-w-xl mx-auto">
            Stunning imagery captured through electron microscopes, confocal lasers,
            and polarized light — revealing beauty at the nanoscale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-slate-700/40 hover:border-cyan-400/40 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  id={item.titleId}
                  className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 text-xs leading-relaxed">
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

export default GallerySection;
