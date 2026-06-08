import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-radiolarian',
    titleId: 'gallery-radiolarian-title',
    descId: 'gallery-radiolarian-desc',
    imgId: 'gallery-radiolarian-img-a1b2c3',
    title: 'Radiolarian Skeleton',
    desc: 'Intricate silica skeleton of a radiolarian protozoan, revealing geometric perfection at the microscale.',
    category: 'Protozoa',
    size: 'large',
  },
  {
    id: 'gallery-pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-pollen-img-d4e5f6',
    title: 'Pollen Grains',
    desc: 'Colorized scanning electron microscope image of mixed pollen grains showing diverse surface textures.',
    category: 'Plants',
    size: 'small',
  },
  {
    id: 'gallery-tardigrade',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-tardigrade-img-g7h8i9',
    title: 'Tardigrade Portrait',
    desc: 'A water bear (tardigrade) in its active state, showing its distinctive eight-legged body plan.',
    category: 'Micro-animals',
    size: 'small',
  },
  {
    id: 'gallery-diatom-chain',
    titleId: 'gallery-diatom-chain-title',
    descId: 'gallery-diatom-chain-desc',
    imgId: 'gallery-diatom-chain-img-j1k2l3',
    title: 'Diatom Chain Colony',
    desc: 'A chain-forming diatom colony under polarized light, revealing the crystalline structure of their silica shells.',
    category: 'Algae',
    size: 'large',
  },
  {
    id: 'gallery-bacteria-colony',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
    imgId: 'gallery-bacteria-colony-img-m4n5o6',
    title: 'Bacterial Colony',
    desc: 'A fluorescence microscopy image of a mixed bacterial biofilm, with different species highlighted in distinct colors.',
    category: 'Bacteria',
    size: 'small',
  },
  {
    id: 'gallery-mycelium',
    titleId: 'gallery-mycelium-title',
    descId: 'gallery-mycelium-desc',
    imgId: 'gallery-mycelium-img-p7q8r9',
    title: 'Fungal Mycelium',
    desc: 'The branching network of fungal hyphae spreading through soil, forming the underground web of the forest.',
    category: 'Fungi',
    size: 'small',
  },
  {
    id: 'gallery-virus-cluster',
    titleId: 'gallery-virus-cluster-title',
    descId: 'gallery-virus-cluster-desc',
    imgId: 'gallery-virus-cluster-img-s1t2u3',
    title: 'Bacteriophage Cluster',
    desc: 'Transmission electron microscopy image of T4 bacteriophages, showing their distinctive lunar lander shape.',
    category: 'Viruses',
    size: 'large',
  },
  {
    id: 'gallery-cilia',
    titleId: 'gallery-cilia-title',
    descId: 'gallery-cilia-desc',
    imgId: 'gallery-cilia-img-v4w5x6',
    title: 'Ciliated Epithelium',
    desc: 'Scanning electron microscope view of cilia lining the respiratory tract, sweeping particles away from the lungs.',
    category: 'Cell Biology',
    size: 'small',
  },
  {
    id: 'gallery-algae-bloom',
    titleId: 'gallery-algae-bloom-title',
    descId: 'gallery-algae-bloom-desc',
    imgId: 'gallery-algae-bloom-img-y7z8a9',
    title: 'Algae Bloom',
    desc: 'Satellite-scale view of a phytoplankton bloom in the ocean, visible from space and producing oxygen for the planet.',
    category: 'Algae',
    size: 'small',
  },
];

const categoryColors = {
  'Protozoa': 'text-amber-400 bg-amber-900/30 border-amber-900/50',
  'Plants': 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
  'Micro-animals': 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
  'Algae': 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
  'Bacteria': 'text-violet-400 bg-violet-900/30 border-violet-900/50',
  'Fungi': 'text-fuchsia-400 bg-fuchsia-900/30 border-fuchsia-900/50',
  'Viruses': 'text-rose-400 bg-rose-900/30 border-rose-900/50',
  'Cell Biology': 'text-violet-400 bg-violet-900/30 border-violet-900/50',
};

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-space-black text-slate-200 min-h-screen">
      {/* Page Header */}
      <section className="pt-28 pb-12 px-4 md:px-8 bg-gradient-to-b from-violet-900/10 to-space-black">
        <div className="max-w-7xl mx-auto">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Visual Archive
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-50 mb-4">
            The MicroCosmos Gallery
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A curated collection of microscopic imagery — from electron microscopy to fluorescence photography. Click any image to explore in detail.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery Grid */}
      <section className="py-8 px-4 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group bg-midnight border border-violet-900/40 rounded-xl overflow-hidden hover:border-violet-700/50 hover:shadow-glow-violet transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <div className={`overflow-hidden ${item.size === 'large' ? 'aspect-[4/3]' : 'aspect-video'}`}>
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio={item.size === 'large' ? '4x3' : '16x9'}
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 id={item.titleId} className="font-display font-semibold text-sm text-slate-50">
                      {item.title}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium shrink-0 ml-2 ${categoryColors[item.category] || 'text-slate-400 bg-slate-800 border-slate-700'}`}>
                      {item.category}
                    </span>
                  </div>
                  <p id={item.descId} className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-black/90 backdrop-blur-sm"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-midnight border border-violet-900/50 rounded-2xl max-w-2xl w-full overflow-hidden shadow-glow-violet-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                data-strk-img-id={`lightbox-${lightboxItem.imgId}`}
                data-strk-img={`[${lightboxItem.descId}] [${lightboxItem.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="font-display font-bold text-xl text-slate-50">{lightboxItem.title}</h2>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium mt-1 inline-block ${categoryColors[lightboxItem.category] || 'text-slate-400 bg-slate-800 border-slate-700'}`}>
                    {lightboxItem.category}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="text-slate-500 hover:text-slate-200 text-xl leading-none p-1 shrink-0"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{lightboxItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
