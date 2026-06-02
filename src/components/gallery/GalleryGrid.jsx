import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-001',
    title: 'Tardigrade',
    category: 'Micro-animals',
    description: 'Water bear under electron microscope — the most resilient animal on Earth',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: '800',
    titleId: 'gal-001-title',
    descId: 'gal-001-desc',
    imgId: 'gal-img-001-a1b2c3',
  },
  {
    id: 'gal-002',
    title: 'Diatom Colony',
    category: 'Algae',
    description: 'Intricate silica shells of marine diatoms forming geometric patterns',
    span: '',
    ratio: '4x3',
    width: '400',
    titleId: 'gal-002-title',
    descId: 'gal-002-desc',
    imgId: 'gal-img-002-d4e5f6',
  },
  {
    id: 'gal-003',
    title: 'Pollen Grain',
    category: 'Plant Biology',
    description: 'Scanning electron micrograph of a sunflower pollen grain',
    span: '',
    ratio: '4x3',
    width: '400',
    titleId: 'gal-003-title',
    descId: 'gal-003-desc',
    imgId: 'gal-img-003-g7h8i9',
  },
  {
    id: 'gal-004',
    title: 'Nerve Synapse',
    category: 'Neuroscience',
    description: 'Transmission electron microscopy of a synaptic junction between neurons',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '800',
    titleId: 'gal-004-title',
    descId: 'gal-004-desc',
    imgId: 'gal-img-004-j0k1l2',
  },
  {
    id: 'gal-005',
    title: 'Mitochondria',
    category: 'Cell Biology',
    description: 'Cross-section of mitochondria showing cristae structure',
    span: '',
    ratio: '4x3',
    width: '400',
    titleId: 'gal-005-title',
    descId: 'gal-005-desc',
    imgId: 'gal-img-005-m3n4o5',
  },
  {
    id: 'gal-006',
    title: 'Spirulina',
    category: 'Cyanobacteria',
    description: 'Helical filaments of Spirulina under fluorescence microscopy',
    span: '',
    ratio: '4x3',
    width: '400',
    titleId: 'gal-006-title',
    descId: 'gal-006-desc',
    imgId: 'gal-img-006-p6q7r8',
  },
  {
    id: 'gal-007',
    title: 'Snowflake Crystal',
    category: 'Crystallography',
    description: 'Macro photograph of a snowflake crystal showing hexagonal symmetry',
    span: '',
    ratio: '1x1',
    width: '400',
    titleId: 'gal-007-title',
    descId: 'gal-007-desc',
    imgId: 'gal-img-007-s9t0u1',
  },
  {
    id: 'gal-008',
    title: 'Paramecium',
    category: 'Protozoa',
    description: 'Ciliated protozoan Paramecium caudatum in bright-field microscopy',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '800',
    titleId: 'gal-008-title',
    descId: 'gal-008-desc',
    imgId: 'gal-img-008-v2w3x4',
  },
  {
    id: 'gal-009',
    title: 'Butterfly Wing Scale',
    category: 'Entomology',
    description: 'Nanostructures on butterfly wing scales that create iridescent color',
    span: '',
    ratio: '4x3',
    width: '400',
    titleId: 'gal-009-title',
    descId: 'gal-009-desc',
    imgId: 'gal-img-009-y5z6a7',
  },
];

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-cosmos-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group bg-cosmos-navy border border-cyan-900/30 hover:border-cyan-400/40 transition-all duration-300 ${item.span}`}
              onClick={() => setSelected(item)}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] microscopy`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-cosmos-cyan text-xs font-medium mb-1">{item.category}</span>
                <h3 id={item.titleId} className="font-heading font-semibold text-slate-50 text-sm">
                  {item.title}
                </h3>
              </div>

              {/* Hidden text for image query */}
              <p id={item.descId} className="sr-only">{item.description}</p>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cosmos-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-cosmos-cyan" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-cosmos-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cosmos-navy border border-cyan-900/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cosmos-black/60 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-cosmos-cyan transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 md:h-96">
              <img
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[lightbox-${selected.descId}] [lightbox-${selected.titleId}] microscopy`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/60 to-transparent" />
              <span id={`lightbox-${selected.titleId}`} className="sr-only">{selected.title}</span>
              <span id={`lightbox-${selected.descId}`} className="sr-only">{selected.description}</span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-cosmos-cyan text-xs font-medium">{selected.category}</span>
                  <h3 className="font-heading font-bold text-slate-50 text-2xl mt-1">{selected.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{selected.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
