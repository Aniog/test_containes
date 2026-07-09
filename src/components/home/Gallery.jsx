import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Fungi', 'Cells', 'Insects', 'Water Life'];

const galleryItems = [
  {
    id: 'gal-1',
    titleId: 'gal-1-title',
    descId: 'gal-1-desc',
    imgId: 'gallery-img-mc010',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal extreme survival',
    category: 'Water Life',
    size: 'large',
  },
  {
    id: 'gal-2',
    titleId: 'gal-2-title',
    descId: 'gal-2-desc',
    imgId: 'gallery-img-mc011',
    title: 'Penicillium Mold',
    desc: 'Penicillium fungi spores microscope blue green mold',
    category: 'Fungi',
    size: 'small',
  },
  {
    id: 'gal-3',
    titleId: 'gal-3-title',
    descId: 'gal-3-desc',
    imgId: 'gallery-img-mc012',
    title: 'E. coli Bacteria',
    desc: 'Escherichia coli bacteria rod shaped microscopy',
    category: 'Bacteria',
    size: 'small',
  },
  {
    id: 'gal-4',
    titleId: 'gal-4-title',
    descId: 'gal-4-desc',
    imgId: 'gallery-img-mc013',
    title: 'Red Blood Cells',
    desc: 'Human red blood cells erythrocytes scanning electron microscope',
    category: 'Cells',
    size: 'medium',
  },
  {
    id: 'gal-5',
    titleId: 'gal-5-title',
    descId: 'gal-5-desc',
    imgId: 'gallery-img-mc014',
    title: 'Dust Mite',
    desc: 'House dust mite Dermatophagoides microscopy close up',
    category: 'Insects',
    size: 'medium',
  },
  {
    id: 'gal-6',
    titleId: 'gal-6-title',
    descId: 'gal-6-desc',
    imgId: 'gallery-img-mc015',
    title: 'Diatom Algae',
    desc: 'Diatom algae silica shell microscope water',
    category: 'Water Life',
    size: 'small',
  },
  {
    id: 'gal-7',
    titleId: 'gal-7-title',
    descId: 'gal-7-desc',
    imgId: 'gallery-img-mc016',
    title: 'Neuron Cell',
    desc: 'Neuron nerve cell brain microscopy fluorescent',
    category: 'Cells',
    size: 'large',
  },
  {
    id: 'gal-8',
    titleId: 'gal-8-title',
    descId: 'gal-8-desc',
    imgId: 'gallery-img-mc017',
    title: 'Aspergillus Spores',
    desc: 'Aspergillus fungi spore head microscope',
    category: 'Fungi',
    size: 'small',
  },
  {
    id: 'gal-9',
    titleId: 'gal-9-title',
    descId: 'gal-9-desc',
    imgId: 'gallery-img-mc018',
    title: 'Mosquito Eye',
    desc: 'Mosquito compound eye close up macro insect',
    category: 'Insects',
    size: 'medium',
  },
  {
    id: 'gal-10',
    titleId: 'gal-10-title',
    descId: 'gal-10-desc',
    imgId: 'gallery-img-mc019',
    title: 'Paramecium',
    desc: 'Paramecium single cell organism cilia microscope pond water',
    category: 'Water Life',
    size: 'small',
  },
  {
    id: 'gal-11',
    titleId: 'gal-11-title',
    descId: 'gal-11-desc',
    imgId: 'gallery-img-mc020',
    title: 'Staphylococcus',
    desc: 'Staphylococcus aureus bacteria cluster golden microscopy',
    category: 'Bacteria',
    size: 'small',
  },
  {
    id: 'gal-12',
    titleId: 'gal-12-title',
    descId: 'gal-12-desc',
    imgId: 'gallery-img-mc021',
    title: 'Mitochondria',
    desc: 'Mitochondria cell organelle energy powerhouse electron microscope',
    category: 'Cells',
    size: 'medium',
  },
];

export default function Gallery() {
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
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-3 block">
            Visual Collection
          </span>
          <h2
            id="gallery-title"
            className="text-4xl md:text-5xl font-bold text-[#e2f0f9] mb-5"
          >
            Microscopic Gallery
          </h2>
          <p
            id="gallery-desc"
            className="text-[#7fa8c4] text-lg max-w-xl mx-auto"
          >
            Stunning imagery from electron microscopes and fluorescence photography,
            revealing the hidden beauty of the micro world.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00d4c8] text-[#050a0f]'
                  : 'border border-[#00d4c8]/30 text-[#7fa8c4] hover:border-[#00d4c8]/60 hover:text-[#00d4c8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-[#0d1a24] border border-[#00d4c8]/15 rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 transition-all duration-300 group"
            >
              <div
                className={`relative overflow-hidden ${
                  item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-52' : 'h-40'
                }`}
              >
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-desc] [gallery-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24]/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-[#050a0f]/70 text-[#00d4c8] text-xs font-medium px-2.5 py-1 rounded-full border border-[#00d4c8]/20">
                  {item.category}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 id={item.titleId} className="text-[#e2f0f9] font-semibold text-sm">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#4a7a9b] text-xs mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
