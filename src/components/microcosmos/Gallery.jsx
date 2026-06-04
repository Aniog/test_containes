import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Cells', 'Crystals', 'Fungi', 'Algae', 'Viruses'];

const galleryItems = [
  {
    id: 'gal-01',
    titleId: 'gal-title-01',
    descId: 'gal-desc-01',
    imgId: 'gallery-img-mc-01',
    title: 'E. coli Bacteria',
    desc: 'Rod-shaped bacteria under electron microscope',
    category: 'Bacteria',
    tag: 'SEM',
  },
  {
    id: 'gal-02',
    titleId: 'gal-title-02',
    descId: 'gal-desc-02',
    imgId: 'gallery-img-mc-02',
    title: 'Human Red Blood Cells',
    desc: 'Erythrocytes flowing through capillaries',
    category: 'Cells',
    tag: 'Fluorescence',
  },
  {
    id: 'gal-03',
    titleId: 'gal-title-03',
    descId: 'gal-desc-03',
    imgId: 'gallery-img-mc-03',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal formation',
    category: 'Crystals',
    tag: 'Polarized Light',
  },
  {
    id: 'gal-04',
    titleId: 'gal-title-04',
    descId: 'gal-desc-04',
    imgId: 'gallery-img-mc-04',
    title: 'Penicillium Mold',
    desc: 'Fungal spores and hyphae structure',
    category: 'Fungi',
    tag: 'Optical',
  },
  {
    id: 'gal-05',
    titleId: 'gal-title-05',
    descId: 'gal-desc-05',
    imgId: 'gallery-img-mc-05',
    title: 'Diatom Algae',
    desc: 'Silica shell of a marine diatom',
    category: 'Algae',
    tag: 'SEM',
  },
  {
    id: 'gal-06',
    titleId: 'gal-title-06',
    descId: 'gal-desc-06',
    imgId: 'gallery-img-mc-06',
    title: 'Influenza Virus',
    desc: 'Hemagglutinin spikes on viral surface',
    category: 'Viruses',
    tag: 'TEM',
  },
  {
    id: 'gal-07',
    titleId: 'gal-title-07',
    descId: 'gal-desc-07',
    imgId: 'gallery-img-mc-07',
    title: 'Staphylococcus aureus',
    desc: 'Grape-like clusters of spherical bacteria',
    category: 'Bacteria',
    tag: 'SEM',
  },
  {
    id: 'gal-08',
    titleId: 'gal-title-08',
    descId: 'gal-desc-08',
    imgId: 'gallery-img-mc-08',
    title: 'Neuron Cell',
    desc: 'Branching dendrites of a nerve cell',
    category: 'Cells',
    tag: 'Confocal',
  },
  {
    id: 'gal-09',
    titleId: 'gal-title-09',
    descId: 'gal-desc-09',
    imgId: 'gallery-img-mc-09',
    title: 'Quartz Crystal',
    desc: 'Mineral crystal under polarized light',
    category: 'Crystals',
    tag: 'Polarized Light',
  },
  {
    id: 'gal-10',
    titleId: 'gal-title-10',
    descId: 'gal-desc-10',
    imgId: 'gallery-img-mc-10',
    title: 'Aspergillus Spores',
    desc: 'Conidiophore bearing chains of conidia',
    category: 'Fungi',
    tag: 'SEM',
  },
  {
    id: 'gal-11',
    titleId: 'gal-title-11',
    descId: 'gal-desc-11',
    imgId: 'gallery-img-mc-11',
    title: 'Spirulina Algae',
    desc: 'Spiral-shaped cyanobacteria filaments',
    category: 'Algae',
    tag: 'Optical',
  },
  {
    id: 'gal-12',
    titleId: 'gal-title-12',
    descId: 'gal-desc-12',
    imgId: 'gallery-img-mc-12',
    title: 'Bacteriophage T4',
    desc: 'Virus that infects and replicates in bacteria',
    category: 'Viruses',
    tag: 'TEM',
  },
];

const tagColors = {
  SEM: 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff]',
  TEM: 'bg-[rgba(168,85,247,0.15)] text-purple-400',
  Fluorescence: 'bg-[rgba(0,184,148,0.15)] text-[#00b894]',
  'Polarized Light': 'bg-[rgba(245,158,11,0.15)] text-amber-400',
  Optical: 'bg-[rgba(239,68,68,0.15)] text-red-400',
  Confocal: 'bg-[rgba(59,130,246,0.15)] text-blue-400',
};

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
            Visual Collection
          </span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-[#e2f0fb] mb-4">
            The Gallery
          </h2>
          <p id="gallery-subtitle" className="text-[#7fb3cc] text-lg max-w-xl mx-auto">
            Stunning imagery captured through electron microscopes, fluorescence imaging, and polarized light photography.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-[#050a0f]'
                  : 'border border-[rgba(0,212,255,0.2)] text-[#7fb3cc] hover:border-[rgba(0,212,255,0.5)] hover:text-[#00d4ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0d1a24] border border-[rgba(0,212,255,0.1)] rounded-2xl overflow-hidden hover:border-[rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.12)] transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#0d1a24' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[item.tag] || 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff]'}`}>
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 id={item.titleId} className="text-[#e2f0fb] font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#4a7a96] text-sm leading-snug">
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
