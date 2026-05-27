import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ZoomIn } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g01', title: 'Diatom Frustule', category: 'Algae', technique: 'SEM', desc: 'Scanning electron microscopy reveals the intricate silica lattice of a diatom frustule' },
  { id: 'g02', title: 'Tardigrade Portrait', category: 'Micro-animal', technique: 'SEM', desc: 'A water bear in stunning detail, showing its eight stubby legs and barrel-shaped body' },
  { id: 'g03', title: 'Radiolarian Skeleton', category: 'Protozoa', technique: 'SEM', desc: 'The mineral skeleton of a radiolarian, forming a perfect geometric star pattern' },
  { id: 'g04', title: 'Paramecium Swimming', category: 'Protozoa', technique: 'Light', desc: 'A paramecium in motion, its cilia beating in coordinated waves' },
  { id: 'g05', title: 'Penicillium Spores', category: 'Fungi', technique: 'SEM', desc: 'Brush-like conidiophores of Penicillium releasing chains of spores' },
  { id: 'g06', title: 'Volvox Colony', category: 'Algae', technique: 'Fluorescence', desc: 'A glowing volvox sphere with daughter colonies visible inside' },
  { id: 'g07', title: 'E. coli Biofilm', category: 'Bacteria', technique: 'SEM', desc: 'A dense biofilm of E. coli bacteria forming a complex community structure' },
  { id: 'g08', title: 'Spirogyra Filament', category: 'Algae', technique: 'Light', desc: 'The elegant spiral chloroplasts of Spirogyra winding through each cell' },
  { id: 'g09', title: 'Amoeba Extending', category: 'Protozoa', technique: 'Phase Contrast', desc: 'An amoeba extending pseudopods to engulf a food particle' },
  { id: 'g10', title: 'Cyanobacteria Chain', category: 'Bacteria', technique: 'Fluorescence', desc: 'Anabaena filaments glowing with autofluorescence from their photosynthetic pigments' },
  { id: 'g11', title: 'Aspergillus Head', category: 'Fungi', technique: 'SEM', desc: 'The conidial head of Aspergillus niger, a perfect sphere of spore-bearing cells' },
  { id: 'g12', title: 'T4 Phage Array', category: 'Virus', technique: 'TEM', desc: 'Transmission electron microscopy of T4 bacteriophages, showing their lunar-lander structure' },
  { id: 'g13', title: 'Euglena Cluster', category: 'Protozoa', technique: 'DIC', desc: 'A cluster of Euglena showing their distinctive flagella and eyespots' },
  { id: 'g14', title: 'Salt Lake Archaea', category: 'Archaea', technique: 'Fluorescence', desc: 'Haloarcula archaea fluorescing pink in a hypersaline environment' },
  { id: 'g15', title: 'Streptococcus Chain', category: 'Bacteria', technique: 'SEM', desc: 'A chain of Streptococcus bacteria, each cell perfectly spherical' },
  { id: 'g16', title: 'Pollen Grain', category: 'Plant', technique: 'SEM', desc: 'The spiky surface of a pollen grain, designed to attach to pollinators' },
  { id: 'g17', title: 'Nematode Worm', category: 'Micro-animal', technique: 'DIC', desc: 'C. elegans, the model organism for developmental biology, in full detail' },
  { id: 'g18', title: 'Rotifer Feeding', category: 'Micro-animal', technique: 'Phase Contrast', desc: 'A rotifer using its corona of cilia to create feeding currents' },
  { id: 'g19', title: 'Foraminifera Shell', category: 'Protozoa', technique: 'SEM', desc: 'The chambered calcium carbonate shell of a foraminifera' },
  { id: 'g20', title: 'Yeast Budding', category: 'Fungi', technique: 'SEM', desc: 'Saccharomyces cerevisiae cells caught in the act of budding reproduction' },
  { id: 'g21', title: 'Dinoflagellate', category: 'Algae', technique: 'Fluorescence', desc: 'A bioluminescent dinoflagellate, responsible for glowing ocean waves' },
  { id: 'g22', title: 'Mycobacterium', category: 'Bacteria', technique: 'Fluorescence', desc: 'Acid-fast stained Mycobacterium showing their characteristic waxy cell walls' },
  { id: 'g23', title: 'Stentor Trumpet', category: 'Protozoa', technique: 'Light', desc: 'A Stentor ciliate in its trumpet shape, anchored to a substrate' },
  { id: 'g24', title: 'Hydrothermal Archaea', category: 'Archaea', technique: 'TEM', desc: 'Archaea from deep-sea hydrothermal vents, surviving at extreme temperatures' },
];

const techniques = ['All', 'SEM', 'TEM', 'Light', 'Fluorescence', 'Phase Contrast', 'DIC'];

const Gallery = () => {
  const [activeTechnique, setActiveTechnique] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const containerRef = useRef(null);
  const lightboxRef = useRef(null);

  const filtered = activeTechnique === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.technique === activeTechnique);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeTechnique]);

  useEffect(() => {
    if (lightboxItem && lightboxRef.current) {
      ImageHelper.loadImages(strkImgConfig, lightboxRef.current);
    }
  }, [lightboxItem]);

  return (
    <div className="bg-[#050d12] min-h-screen">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,201,177,0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Microscopy Images</span>
          <h1 id="gallery-hero-title" className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
            The Gallery
          </h1>
          <p id="gallery-hero-desc" className="text-[#7fb3c8] text-lg leading-relaxed">
            A curated collection of microscopy images spanning bacteria, fungi, protozoa, algae, and more. Each image reveals the hidden beauty of the microscopic world.
          </p>
        </div>
      </section>

      {/* Technique Filter */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {techniques.map(tech => (
              <button
                key={tech}
                onClick={() => setActiveTechnique(tech)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeTechnique === tech
                    ? 'bg-[#00c9b1] text-black border-[#00c9b1]'
                    : 'border-[#1a3a4a] text-[#7fb3c8] hover:border-[#00c9b1]/50 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <p className="text-center text-[#4a7a8a] text-sm mt-4">
            Showing {filtered.length} images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={containerRef} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1a3a4a] hover:border-[#00c9b1]/50 transition-all duration-300"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`gallery-${item.id}-img-d5e6f7`}
                  data-strk-img={`[gallery-${item.id}-desc] [gallery-${item.id}-title] [gallery-hero-desc] [gallery-hero-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d12]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p id={`gallery-${item.id}-title`} className="font-heading text-sm font-bold text-white">{item.title}</p>
                      <p className="text-[#00c9b1] text-xs">{item.category} · {item.technique}</p>
                    </div>
                    <ZoomIn className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  </div>
                </div>
                {/* Hidden desc for image query */}
                <span id={`gallery-${item.id}-desc`} className="sr-only">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            ref={lightboxRef}
            className="relative max-w-4xl w-full bg-[#0f2233] rounded-2xl overflow-hidden border border-[#1a3a4a]"
            onClick={e => e.stopPropagation()}
          >
            <img
              alt={lightboxItem.title}
              className="w-full max-h-[60vh] object-cover"
              data-strk-img-id={`lightbox-${lightboxItem.id}-img-g8h9i0`}
              data-strk-img={`[lightbox-${lightboxItem.id}-desc] [lightbox-${lightboxItem.id}-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 id={`lightbox-${lightboxItem.id}-title`} className="font-heading text-xl font-bold text-white">{lightboxItem.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-xs bg-[#00c9b1]/10 text-[#00c9b1] border border-[#00c9b1]/30 px-2.5 py-0.5 rounded-full">{lightboxItem.category}</span>
                    <span className="text-xs bg-[#1a3a4a] text-[#7fb3c8] px-2.5 py-0.5 rounded-full">{lightboxItem.technique} Microscopy</span>
                  </div>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="text-[#7fb3c8] hover:text-white transition-colors text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <p id={`lightbox-${lightboxItem.id}-desc`} className="text-[#7fb3c8] leading-relaxed">{lightboxItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
