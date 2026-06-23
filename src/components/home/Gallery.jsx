import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'g1', imgId: 'gallery-img-mc201', titleId: 'gallery-title-g1', descId: 'gallery-desc-g1',
    title: 'Red Blood Cells', desc: 'Human erythrocytes under scanning electron microscope', tag: 'Hematology',
  },
  {
    id: 'g2', imgId: 'gallery-img-mc202', titleId: 'gallery-title-g2', descId: 'gallery-desc-g2',
    title: 'Pollen Grain', desc: 'Colorized pollen grain surface texture at high magnification', tag: 'Botany',
  },
  {
    id: 'g3', imgId: 'gallery-img-mc203', titleId: 'gallery-title-g3', descId: 'gallery-desc-g3',
    title: 'Diatom Algae', desc: 'Intricate silica shell of a single-celled diatom organism', tag: 'Algae',
  },
  {
    id: 'g4', imgId: 'gallery-img-mc204', titleId: 'gallery-title-g4', descId: 'gallery-desc-g4',
    title: 'Nerve Fibers', desc: 'Neural axons and dendrites forming complex networks', tag: 'Neuroscience',
  },
  {
    id: 'g5', imgId: 'gallery-img-mc205', titleId: 'gallery-title-g5', descId: 'gallery-desc-g5',
    title: 'Salt Crystal', desc: 'Sodium chloride crystal lattice structure under polarized light', tag: 'Mineralogy',
  },
  {
    id: 'g6', imgId: 'gallery-img-mc206', titleId: 'gallery-title-g6', descId: 'gallery-desc-g6',
    title: 'Tardigrade', desc: 'Water bear micro-animal, the most resilient creature on Earth', tag: 'Zoology',
  },
  {
    id: 'g7', imgId: 'gallery-img-mc207', titleId: 'gallery-title-g7', descId: 'gallery-desc-g7',
    title: 'Butterfly Wing Scale', desc: 'Iridescent nanostructures on a butterfly wing surface', tag: 'Entomology',
  },
  {
    id: 'g8', imgId: 'gallery-img-mc208', titleId: 'gallery-title-g8', descId: 'gallery-desc-g8',
    title: 'Mitochondria', desc: 'Cellular powerhouses inside a eukaryotic cell cross-section', tag: 'Cell Biology',
  },
  {
    id: 'g9', imgId: 'gallery-img-mc209', titleId: 'gallery-title-g9', descId: 'gallery-desc-g9',
    title: 'Snowflake Crystal', desc: 'Hexagonal ice crystal with perfect symmetry under microscope', tag: 'Crystallography',
  },
  {
    id: 'g10', imgId: 'gallery-img-mc210', titleId: 'gallery-title-g10', descId: 'gallery-desc-g10',
    title: 'Paramecium', desc: 'Single-celled ciliate protozoan swimming in pond water', tag: 'Protozoology',
  },
  {
    id: 'g11', imgId: 'gallery-img-mc211', titleId: 'gallery-title-g11', descId: 'gallery-desc-g11',
    title: 'Fungal Spores', desc: 'Colorful fungal spore clusters ready for dispersal', tag: 'Mycology',
  },
  {
    id: 'g12', imgId: 'gallery-img-mc212', titleId: 'gallery-title-g12', descId: 'gallery-desc-g12',
    title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystals under polarized light microscopy', tag: 'Chemistry',
  },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a1628] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan mb-4">
            Visual Collection
          </p>
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-bold text-cosmos-text mb-6">
            The Microscopic Gallery
          </h2>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes, confocal lasers, and polarized light — revealing the hidden architecture of life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan mb-1">
                  {item.tag}
                </span>
                <h3 className="text-cosmos-text font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-cosmos-muted text-xs mt-1 leading-relaxed hidden md:block">
                  {item.desc}
                </p>
              </div>
              {/* Always-visible tag badge */}
              <div className="absolute top-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan bg-cosmos-bg/70 px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
