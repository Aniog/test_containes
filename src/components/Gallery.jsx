import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Cells', 'Diatoms', 'Fungi', 'Viruses', 'Crystals'];

const galleryItems = [
  { id: 'g1', imgId: 'gallery-img-mc003', category: 'Bacteria', titleId: 'gallery-g1-title', descId: 'gallery-g1-desc', title: 'Spirochete Bacteria', desc: 'Spiral-shaped bacteria under scanning electron microscope' },
  { id: 'g2', imgId: 'gallery-img-mc004', category: 'Cells', titleId: 'gallery-g2-title', descId: 'gallery-g2-desc', title: 'Human Red Blood Cells', desc: 'Erythrocytes flowing through a capillary vessel' },
  { id: 'g3', imgId: 'gallery-img-mc005', category: 'Diatoms', titleId: 'gallery-g3-title', descId: 'gallery-g3-desc', title: 'Pinnularia Diatom', desc: 'Intricate silica shell of a freshwater diatom' },
  { id: 'g4', imgId: 'gallery-img-mc006', category: 'Fungi', titleId: 'gallery-g4-title', descId: 'gallery-g4-desc', title: 'Penicillium Spores', desc: 'Fungal spores of Penicillium mold colony' },
  { id: 'g5', imgId: 'gallery-img-mc007', category: 'Viruses', titleId: 'gallery-g5-title', descId: 'gallery-g5-desc', title: 'Bacteriophage T4', desc: 'Virus that infects and replicates within bacteria' },
  { id: 'g6', imgId: 'gallery-img-mc008', category: 'Crystals', titleId: 'gallery-g6-title', descId: 'gallery-g6-desc', title: 'Vitamin C Crystals', desc: 'Ascorbic acid crystals under polarized light microscopy' },
  { id: 'g7', imgId: 'gallery-img-mc009', category: 'Cells', titleId: 'gallery-g7-title', descId: 'gallery-g7-desc', title: 'Neuron Network', desc: 'Fluorescent staining of neural cells and synaptic connections' },
  { id: 'g8', imgId: 'gallery-img-mc010', category: 'Diatoms', titleId: 'gallery-g8-title', descId: 'gallery-g8-desc', title: 'Coscinodiscus Diatom', desc: 'Radially symmetric marine diatom with honeycomb pattern' },
  { id: 'g9', imgId: 'gallery-img-mc011', category: 'Bacteria', titleId: 'gallery-g9-title', descId: 'gallery-g9-desc', title: 'E. coli Colony', desc: 'Escherichia coli bacteria forming a biofilm colony' },
  { id: 'g10', imgId: 'gallery-img-mc012', category: 'Crystals', titleId: 'gallery-g10-title', descId: 'gallery-g10-desc', title: 'Salt Crystals', desc: 'Sodium chloride cubic crystals under polarized light' },
  { id: 'g11', imgId: 'gallery-img-mc013', category: 'Fungi', titleId: 'gallery-g11-title', descId: 'gallery-g11-desc', title: 'Aspergillus Mold', desc: 'Aspergillus niger spore-bearing structures magnified' },
  { id: 'g12', imgId: 'gallery-img-mc014', category: 'Cells', titleId: 'gallery-g12-title', descId: 'gallery-g12-desc', title: 'Mitosis in Progress', desc: 'Plant cell undergoing cell division captured at metaphase' },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="gallery" className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
            Image Gallery
          </span>
          <h2 id="gallery-section-title" className="text-4xl md:text-5xl font-bold text-[#f0f6ff] mt-3 mb-5">
            Microscopic Wonders
          </h2>
          <p className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            Browse our curated collection of microscopic imagery spanning bacteria, cells, crystals, and beyond.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#00d4c8] text-[#050d1a]'
                  : 'border border-[#1a3050] text-[#8ba3c7] hover:border-[#00d4c8]/50 hover:text-[#00d4c8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0f1f38] border border-[#1a3050] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.1)] transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 bg-[#00d4c8]/20 text-[#00d4c8] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#00d4c8]/30 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={item.titleId} className="text-sm font-bold text-[#f0f6ff] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-xs text-[#4a6080] leading-relaxed">
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

export default Gallery;
