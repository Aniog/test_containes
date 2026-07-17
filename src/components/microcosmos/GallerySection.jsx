import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const categories = ['All', 'Bacteria', 'Cells', 'Algae', 'Fungi', 'Insects'];

const galleryItems = [
  {
    id: 'gal-01', category: 'Bacteria',
    titleId: 'gal-01-title', descId: 'gal-01-desc',
    imgId: 'gal-img-mc003',
    title: 'Spirochete Bacteria', desc: 'Spiral-shaped bacteria under electron microscope',
    span: 'md:col-span-2',
  },
  {
    id: 'gal-02', category: 'Cells',
    titleId: 'gal-02-title', descId: 'gal-02-desc',
    imgId: 'gal-img-mc004',
    title: 'Red Blood Cells', desc: 'Human erythrocytes flowing through capillary',
    span: '',
  },
  {
    id: 'gal-03', category: 'Algae',
    titleId: 'gal-03-title', descId: 'gal-03-desc',
    imgId: 'gal-img-mc005',
    title: 'Diatom Shells', desc: 'Intricate silica shells of marine diatoms',
    span: '',
  },
  {
    id: 'gal-04', category: 'Fungi',
    titleId: 'gal-04-title', descId: 'gal-04-desc',
    imgId: 'gal-img-mc006',
    title: 'Fungal Spores', desc: 'Colorized spores of Aspergillus fungus',
    span: '',
  },
  {
    id: 'gal-05', category: 'Insects',
    titleId: 'gal-05-title', descId: 'gal-05-desc',
    imgId: 'gal-img-mc007',
    title: 'Compound Eye', desc: 'Fly compound eye with thousands of facets',
    span: '',
  },
  {
    id: 'gal-06', category: 'Cells',
    titleId: 'gal-06-title', descId: 'gal-06-desc',
    imgId: 'gal-img-mc008',
    title: 'Neuron Network', desc: 'Fluorescent neurons forming synaptic connections',
    span: 'md:col-span-2',
  },
  {
    id: 'gal-07', category: 'Bacteria',
    titleId: 'gal-07-title', descId: 'gal-07-desc',
    imgId: 'gal-img-mc009',
    title: 'E. coli Colony', desc: 'Escherichia coli bacteria colony formation',
    span: '',
  },
  {
    id: 'gal-08', category: 'Algae',
    titleId: 'gal-08-title', descId: 'gal-08-desc',
    imgId: 'gal-img-mc010',
    title: 'Volvox Algae', desc: 'Spherical green algae colony with daughter cells',
    span: '',
  },
];

export default function GallerySection() {
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
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Archive
          </p>
          <h2
            id="gallery-title"
            className="text-4xl md:text-5xl font-bold text-slate-50 mb-4"
          >
            The Gallery
          </h2>
          <p
            id="gallery-subtitle"
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Stunning imagery captured through the most powerful microscopes on Earth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cosmos-teal text-cosmos-bg'
                  : 'border border-slate-700 text-slate-400 hover:border-cosmos-teal/50 hover:text-cosmos-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300 cursor-pointer ${item.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-cosmos-teal text-xs font-semibold tracking-widest uppercase mb-1 block">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-slate-50 font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-snug">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-9 h-9 rounded-full bg-cosmos-teal/20 backdrop-blur-sm border border-cosmos-teal/40 flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-cosmos-teal" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
