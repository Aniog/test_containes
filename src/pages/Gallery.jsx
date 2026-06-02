import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-1',
    title: 'Bacterial Colony',
    category: 'Bacteria',
    desc: 'Colorized scanning electron microscope image of a bacterial colony forming intricate patterns',
    titleId: 'gal-1-title',
    descId: 'gal-1-desc',
    imgId: 'gallery-img-1-a1b2c3',
    size: 'large',
  },
  {
    id: 'gal-2',
    title: 'Diatom Silica Shell',
    category: 'Plankton',
    desc: 'The ornate geometric silica shell of a marine diatom under electron microscopy',
    titleId: 'gal-2-title',
    descId: 'gal-2-desc',
    imgId: 'gallery-img-2-d4e5f6',
    size: 'small',
  },
  {
    id: 'gal-3',
    title: 'Fungal Hyphae Network',
    category: 'Fungi',
    desc: 'Branching fungal hyphae forming a dense mycelial network in soil',
    titleId: 'gal-3-title',
    descId: 'gal-3-desc',
    imgId: 'gallery-img-3-g7h8i9',
    size: 'small',
  },
  {
    id: 'gal-4',
    title: 'Cell Division',
    category: 'Cells',
    desc: 'A eukaryotic cell captured mid-division, chromosomes visible in fluorescent microscopy',
    titleId: 'gal-4-title',
    descId: 'gal-4-desc',
    imgId: 'gallery-img-4-j0k1l2',
    size: 'small',
  },
  {
    id: 'gal-5',
    title: 'Tardigrade Portrait',
    category: 'Cells',
    desc: 'A water bear (tardigrade) in stunning detail, showing its eight stubby legs and barrel-shaped body',
    titleId: 'gal-5-title',
    descId: 'gal-5-desc',
    imgId: 'gallery-img-5-m3n4o5',
    size: 'large',
  },
  {
    id: 'gal-6',
    title: 'Bioluminescent Plankton',
    category: 'Plankton',
    desc: 'Dinoflagellates glowing blue in ocean water, creating the magical sea sparkle phenomenon',
    titleId: 'gal-6-title',
    descId: 'gal-6-desc',
    imgId: 'gallery-img-6-p6q7r8',
    size: 'small',
  },
  {
    id: 'gal-7',
    title: 'Virus Particle Array',
    category: 'Viruses',
    desc: 'Transmission electron microscope image showing an array of icosahedral virus particles',
    titleId: 'gal-7-title',
    descId: 'gal-7-desc',
    imgId: 'gallery-img-7-s9t0u1',
    size: 'small',
  },
  {
    id: 'gal-8',
    title: 'Cyanobacteria Bloom',
    category: 'Bacteria',
    desc: 'A dense bloom of cyanobacteria in a freshwater lake, visible from above as blue-green swirls',
    titleId: 'gal-8-title',
    descId: 'gal-8-desc',
    imgId: 'gallery-img-8-v2w3x4',
    size: 'small',
  },
  {
    id: 'gal-9',
    title: 'Archaea Hot Spring',
    category: 'Archaea',
    desc: 'Colorful thermophilic archaea communities in a geothermal hot spring, forming vivid mineral mats',
    titleId: 'gal-9-title',
    descId: 'gal-9-desc',
    imgId: 'gallery-img-9-y5z6a7',
    size: 'large',
  },
];

const filterCategories = ['All', 'Bacteria', 'Plankton', 'Fungi', 'Cells', 'Viruses', 'Archaea'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeFilter, lightboxItem]);

  return (
    <div className="bg-[#050d1a] text-[#e2f0ff] min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-violet opacity-40" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bfa] text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
            Visual Archive
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-[#e2f0ff] mb-4">
            Microscopy <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-[#7ba7cc] text-lg max-w-2xl">
            Stunning images from electron microscopes, fluorescence imaging, and confocal microscopy — the invisible world made visible.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8 sticky top-16 md:top-20 z-30 bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[#7c3aed] text-white'
                    : 'border border-[#1a3a5c] text-[#7ba7cc] hover:border-[#7c3aed]/50 hover:text-[#e2f0ff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={containerRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-[#7c3aed]/40 hover:shadow-xl hover:shadow-[#7c3aed]/10 transition-all group cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-48'}`}>
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio={item.size === 'large' ? '4x3' : '3x2'}
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl">
                      ⊕
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#0a1628]/80 border border-[#1a3a5c] text-[#7ba7cc] text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 id={item.titleId} className="font-heading font-semibold text-[#e2f0ff] text-base mb-1">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-[#7ba7cc] text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#7ba7cc]">
              <p className="text-4xl mb-4">🖼️</p>
              <p className="text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-[#0a1628] border border-[#1a3a5c] rounded-3xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 md:h-96">
              <img
                alt={lightboxItem.title}
                data-strk-img-id={`lightbox-${lightboxItem.imgId}`}
                data-strk-img={`[lightbox-${lightboxItem.descId}] [lightbox-${lightboxItem.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#050d1a]/80 border border-[#1a3a5c] text-[#7ba7cc] hover:text-[#e2f0ff] flex items-center justify-center text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bfa] text-xs px-3 py-1 rounded-full">
                  {lightboxItem.category}
                </span>
              </div>
              <h2 id={`lightbox-${lightboxItem.titleId}`} className="font-heading font-bold text-xl text-[#e2f0ff] mb-2">
                {lightboxItem.title}
              </h2>
              <p id={`lightbox-${lightboxItem.descId}`} className="text-[#7ba7cc] text-sm leading-relaxed">
                {lightboxItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
