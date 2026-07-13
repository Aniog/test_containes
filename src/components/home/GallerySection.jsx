import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'diatom',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-diatom-mc003',
    title: 'Diatom Colony',
    desc: 'Silica-shelled algae forming geometric patterns under polarized light',
    tag: 'Algae',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'tardigrade',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-img-tardigrade-mc004',
    title: 'Water Bear',
    desc: 'Tardigrade, the most resilient animal on Earth, surviving extreme conditions',
    tag: 'Tardigrada',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'radiolarian',
    titleId: 'gallery-radiolarian-title',
    descId: 'gallery-radiolarian-desc',
    imgId: 'gallery-img-radiolarian-mc005',
    title: 'Radiolarian',
    desc: 'Intricate silica skeleton of a single-celled ocean organism',
    tag: 'Protozoa',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-pollen-mc006',
    title: 'Pollen Grain',
    desc: 'Scanning electron microscope image of flower pollen surface texture',
    tag: 'Botany',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'bacteria',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-img-bacteria-mc007',
    title: 'E. coli Bacteria',
    desc: 'Fluorescent microscopy of Escherichia coli bacteria colony',
    tag: 'Bacteria',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'snowflake',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    imgId: 'gallery-img-snowflake-mc008',
    title: 'Ice Crystal',
    desc: 'Macro photography of a snowflake crystal showing hexagonal symmetry',
    tag: 'Crystallography',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'neuron',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-img-neuron-mc009',
    title: 'Neuron Network',
    desc: 'Confocal microscopy of interconnected neurons in the brain cortex',
    tag: 'Neuroscience',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'mite',
    titleId: 'gallery-mite-title',
    descId: 'gallery-mite-desc',
    imgId: 'gallery-img-mite-mc010',
    title: 'Dust Mite',
    desc: 'Scanning electron microscope portrait of a house dust mite',
    tag: 'Arachnida',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'cyanobacteria',
    titleId: 'gallery-cyanobacteria-title',
    descId: 'gallery-cyanobacteria-desc',
    imgId: 'gallery-img-cyanobacteria-mc011',
    title: 'Cyanobacteria',
    desc: 'Ancient photosynthetic bacteria that first oxygenated Earth\'s atmosphere',
    tag: 'Bacteria',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'spore',
    titleId: 'gallery-spore-title',
    descId: 'gallery-spore-desc',
    imgId: 'gallery-img-spore-mc012',
    title: 'Fungal Spores',
    desc: 'Colorized SEM image of Aspergillus fungal spore head releasing spores',
    tag: 'Fungi',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'paramecium',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    imgId: 'gallery-img-paramecium-mc013',
    title: 'Paramecium',
    desc: 'Single-celled ciliate protozoan swimming through pond water',
    tag: 'Protozoa',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'bloodcell',
    titleId: 'gallery-bloodcell-title',
    descId: 'gallery-bloodcell-desc',
    imgId: 'gallery-img-bloodcell-mc014',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    tag: 'Hematology',
    ratio: '1x1',
    width: '600',
  },
];

const tagColors = {
  Algae: 'bg-emerald-900/60 text-emerald-300',
  Tardigrada: 'bg-amber-900/60 text-amber-300',
  Protozoa: 'bg-violet-900/60 text-violet-300',
  Botany: 'bg-green-900/60 text-green-300',
  Bacteria: 'bg-red-900/60 text-red-300',
  Crystallography: 'bg-sky-900/60 text-sky-300',
  Neuroscience: 'bg-pink-900/60 text-pink-300',
  Arachnida: 'bg-orange-900/60 text-orange-300',
  Fungi: 'bg-yellow-900/60 text-yellow-300',
  Hematology: 'bg-rose-900/60 text-rose-300',
};

const GallerySection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-violet text-sm font-semibold tracking-widest uppercase">
            Visual Collection
          </span>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Microscopy Gallery
          </h2>
          <p
            id="gallery-section-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stunning images captured through electron microscopes, confocal systems,
            and polarized light microscopy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer border border-cosmos-border hover:border-cosmos-teal/50 transition-all duration-300"
              onClick={() => setSelected(item)}
            >
              <img
                alt={item.title}
                className="w-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-subtitle] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black via-cosmos-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-2 ${tagColors[item.tag] || 'bg-cosmos-card text-slate-300'}`}>
                  {item.tag}
                </span>
                <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cosmos-black/70 rounded-full p-1.5">
                  <ZoomIn className="w-4 h-4 text-cosmos-teal" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-cosmos-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden shadow-glow-teal"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={selected.title}
                className="w-full object-cover aspect-video"
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[${selected.descId}] [${selected.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[selected.tag] || 'bg-cosmos-card text-slate-300'}`}>
                    {selected.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{selected.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{selected.desc}</p>
              </div>
              <button
                className="absolute top-4 right-4 bg-cosmos-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-cosmos-teal hover:text-cosmos-black transition-all"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
