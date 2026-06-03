import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'g1', titleId: 'gal-t-g1', descId: 'gal-d-g1', imgId: 'gal-img-g1-3f7a2b',
    title: 'E. coli Bacteria', desc: 'Rod-shaped bacteria magnified 10,000×', tag: 'Bacteria', span: 'col-span-1 row-span-2',
  },
  {
    id: 'g2', titleId: 'gal-t-g2', descId: 'gal-d-g2', imgId: 'gal-img-g2-8c4d1e',
    title: 'Snowflake Crystal', desc: 'Ice crystal hexagonal symmetry under polarized light', tag: 'Crystal', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g3', titleId: 'gal-t-g3', descId: 'gal-d-g3', imgId: 'gal-img-g3-5a9f3c',
    title: 'Pollen Grain', desc: 'Sunflower pollen surface texture at 500×', tag: 'Pollen', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g4', titleId: 'gal-t-g4', descId: 'gal-d-g4', imgId: 'gal-img-g4-2e6b8d',
    title: 'Compound Eye', desc: 'Dragonfly compound eye facets at 200×', tag: 'Insect', span: 'col-span-2 row-span-1',
  },
  {
    id: 'g5', titleId: 'gal-t-g5', descId: 'gal-d-g5', imgId: 'gal-img-g5-7d1c4f',
    title: 'Red Blood Cells', desc: 'Human erythrocytes in scanning electron microscopy', tag: 'Cell', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g6', titleId: 'gal-t-g6', descId: 'gal-d-g6', imgId: 'gal-img-g6-4b8e2a',
    title: 'Diatom Shell', desc: 'Silica frustule of a marine diatom at 2,000×', tag: 'Diatom', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g7', titleId: 'gal-t-g7', descId: 'gal-d-g7', imgId: 'gal-img-g7-9f3a5c',
    title: 'Tardigrade', desc: 'Water bear — the most resilient animal on Earth', tag: 'Microbe', span: 'col-span-1 row-span-2',
  },
  {
    id: 'g8', titleId: 'gal-t-g8', descId: 'gal-d-g8', imgId: 'gal-img-g8-1c7d9e',
    title: 'Butterfly Wing Scale', desc: 'Iridescent nanostructures on a Morpho butterfly wing', tag: 'Insect', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g9', titleId: 'gal-t-g9', descId: 'gal-d-g9', imgId: 'gal-img-g9-6e2b4f',
    title: 'Neuron Network', desc: 'Fluorescence-stained neural connections in brain tissue', tag: 'Cell', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g10', titleId: 'gal-t-g10', descId: 'gal-d-g10', imgId: 'gal-img-g10-3a8c1d',
    title: 'Salt Crystal', desc: 'Sodium chloride cubic lattice under polarized light', tag: 'Crystal', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g11', titleId: 'gal-t-g11', descId: 'gal-d-g11', imgId: 'gal-img-g11-5f9b7e',
    title: 'Paramecium', desc: 'Ciliated protozoan swimming in pond water', tag: 'Microbe', span: 'col-span-1 row-span-1',
  },
  {
    id: 'g12', titleId: 'gal-t-g12', descId: 'gal-d-g12', imgId: 'gal-img-g12-2d4a6c',
    title: 'Moss Spore', desc: 'Bryophyte spore capsule releasing spores at 400×', tag: 'Pollen', span: 'col-span-2 row-span-1',
  },
];

const tagColors = {
  Bacteria: '#00d4c8',
  Crystal: '#f59e0b',
  Pollen: '#f43f5e',
  Insect: '#10b981',
  Cell: '#7c3aed',
  Diatom: '#06b6d4',
  Microbe: '#fb923c',
};

export default function GallerySection() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#050a14] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00d4c8] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Visual Archive
          </p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-[#f0f4ff] mb-4">
            The Gallery
          </h2>
          <p id="gallery-desc" className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            A curated collection of microscopic wonders — each image a window into a world invisible to the naked eye.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer border border-[#1e3050] hover:border-[#00d4c8]/50 transition-all duration-300`}
              onClick={() => setSelected(item)}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-desc] [gallery-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-8 h-8 text-[#00d4c8]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full mb-1 inline-block"
                  style={{ color: tagColors[item.tag] || '#00d4c8', backgroundColor: `${tagColors[item.tag] || '#00d4c8'}20` }}
                >
                  {item.tag}
                </span>
                <h3 id={item.titleId} className="text-[#f0f4ff] font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-[#8ba3c7] text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-50 bg-[#050a14]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#0d1526] rounded-2xl overflow-hidden border border-[#1e3050] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <img
                  alt={selected.title}
                  data-strk-img-id={`modal-${selected.imgId}`}
                  data-strk-img={`[modal-desc-${selected.id}] [modal-title-${selected.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ color: tagColors[selected.tag] || '#00d4c8', backgroundColor: `${tagColors[selected.tag] || '#00d4c8'}20` }}
                >
                  {selected.tag}
                </span>
                <h3 id={`modal-title-${selected.id}`} className="text-[#f0f4ff] font-bold text-2xl mb-2">{selected.title}</h3>
                <p id={`modal-desc-${selected.id}`} className="text-[#8ba3c7]">{selected.desc}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-[#8ba3c7] hover:text-[#f0f4ff] bg-[#050a14]/80 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
