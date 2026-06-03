import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, Info } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'aurora-green',
    category: 'Aurora',
    title: 'Aurora Borealis',
    titleId: 'gallery-aurora-green-title',
    descId: 'gallery-aurora-green-desc',
    imgId: 'gallery-aurora-green-img-a1b2c3',
    description: 'Vibrant green auroral curtains dance over a polar landscape as solar wind particles collide with Earth\'s magnetosphere.',
    physics: 'Solar wind electrons and protons are funneled by Earth\'s magnetic field toward the poles. Collisions with atmospheric oxygen produce green (557.7 nm) and red (630 nm) light; nitrogen produces blue and purple hues.',
    span: 'col-span-1 row-span-2',
    ratio: '2x3',
  },
  {
    id: 'solar-eclipse',
    category: 'Eclipse',
    title: 'Total Solar Eclipse',
    titleId: 'gallery-solar-eclipse-title',
    descId: 'gallery-solar-eclipse-desc',
    imgId: 'gallery-solar-eclipse-img-d4e5f6',
    description: 'The solar corona blazes into view as the Moon perfectly occults the Sun\'s photosphere during totality.',
    physics: 'The Moon\'s angular diameter (0.5°) nearly matches the Sun\'s, allowing total eclipses. The corona\'s pink prominences are hydrogen plasma at ~10,000 K; the outer corona reaches millions of Kelvin.',
    span: 'col-span-2 row-span-1',
    ratio: '16x9',
  },
  {
    id: 'andromeda',
    category: 'Deep Sky',
    title: 'Andromeda Galaxy (M31)',
    titleId: 'gallery-andromeda-title',
    descId: 'gallery-andromeda-desc',
    imgId: 'gallery-andromeda-img-g7h8i9',
    description: 'Our nearest large galactic neighbor, 2.537 million light-years away, containing over one trillion stars.',
    physics: 'Galactic rotation curves of Andromeda show stars orbiting faster than Newtonian gravity predicts from visible matter alone — direct evidence for dark matter halos comprising ~85% of galactic mass.',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'lunar-eclipse',
    category: 'Eclipse',
    title: 'Blood Moon Lunar Eclipse',
    titleId: 'gallery-lunar-eclipse-title',
    descId: 'gallery-lunar-eclipse-desc',
    imgId: 'gallery-lunar-eclipse-img-j1k2l3',
    description: 'The Moon turns deep crimson as it passes through Earth\'s umbral shadow during a total lunar eclipse.',
    physics: 'Earth\'s atmosphere refracts and scatters sunlight into the umbra. Rayleigh scattering removes blue wavelengths, leaving only red light (620–750 nm) to illuminate the Moon — the same physics that creates red sunsets.',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'orion-nebula',
    category: 'Nebula',
    title: 'Orion Nebula (M42)',
    titleId: 'gallery-orion-title',
    descId: 'gallery-orion-desc',
    imgId: 'gallery-orion-img-m4n5o6',
    description: 'The closest stellar nursery to Earth at 1,344 light-years, where thousands of new stars are forming.',
    physics: 'Ultraviolet radiation from the Trapezium cluster ionizes surrounding hydrogen gas, creating an HII region. The pink-red glow is Hα emission at 656.3 nm from hydrogen recombination.',
    span: 'col-span-2 row-span-1',
    ratio: '16x9',
  },
  {
    id: 'pleiades',
    category: 'Star Cluster',
    title: 'Pleiades (M45)',
    titleId: 'gallery-pleiades-title',
    descId: 'gallery-pleiades-desc',
    imgId: 'gallery-pleiades-img-p7q8r9',
    description: 'The Seven Sisters — an open star cluster 444 light-years away, surrounded by reflection nebulosity.',
    physics: 'The blue haze is not emission but reflection nebula — dust scatters the blue light of hot B-type stars (Rayleigh scattering). The cluster is ~100 million years old, still gravitationally bound.',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'aurora-blue',
    category: 'Aurora',
    title: 'Aurora Australis',
    titleId: 'gallery-aurora-blue-title',
    descId: 'gallery-aurora-blue-desc',
    imgId: 'gallery-aurora-blue-img-s1t2u3',
    description: 'The Southern Lights shimmer in blue and violet hues over Antarctica, mirroring the northern auroral oval.',
    physics: 'Blue and violet auroras result from nitrogen molecular emissions (N₂⁺) at altitudes of 60–120 km. The auroral oval follows Earth\'s magnetic field lines, forming a ring around the geomagnetic poles.',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'milky-way',
    category: 'Galaxy',
    title: 'Milky Way Core',
    titleId: 'gallery-milkyway-title',
    descId: 'gallery-milkyway-desc',
    imgId: 'gallery-milkyway-img-v4w5x6',
    description: 'The dense stellar core of our own galaxy arches across the sky, containing the supermassive black hole Sagittarius A*.',
    physics: 'Sagittarius A* has a mass of ~4 million solar masses. The galactic center is obscured in visible light by dust but revealed in infrared and radio wavelengths. Stellar orbits around Sgr A* confirm its mass.',
    span: 'col-span-2 row-span-1',
    ratio: '16x9',
  },
  {
    id: 'crab-nebula',
    category: 'Supernova Remnant',
    title: 'Crab Nebula (M1)',
    titleId: 'gallery-crab-title',
    descId: 'gallery-crab-desc',
    imgId: 'gallery-crab-img-y7z8a9',
    description: 'The expanding remnant of a supernova observed by Chinese astronomers in 1054 AD, powered by a central pulsar.',
    physics: 'The Crab Pulsar rotates 30 times per second, converting rotational kinetic energy into synchrotron radiation. The filaments expand at ~1,500 km/s, still accelerating 970 years after the explosion.',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
];

const categories = ['All', 'Aurora', 'Eclipse', 'Deep Sky', 'Nebula', 'Star Cluster', 'Galaxy', 'Supernova Remnant'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400">Visual Archive</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            The Physical Sky
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Each image is a window into a physical process. Hover to reveal the science. 
            Click to explore the full explanation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-400/10 border-amber-400/40 text-amber-400'
                  : 'border-[#1F2937] text-gray-500 hover:text-gray-300 hover:border-[#374151]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setSelectedItem(item)}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                <span className="text-xs text-gray-300">{item.category}</span>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="gallery-overlay absolute inset-0 bg-[#0B0F19]/85 backdrop-blur-sm flex flex-col justify-end p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 id={item.titleId} className="text-white font-medium text-sm leading-tight">{item.title}</h3>
                  <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                </div>
                <p id={item.descId} className="text-gray-400 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                <div className="mt-3 text-xs text-amber-400 font-medium">Click for physics →</div>
              </div>

              {/* Title always visible at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-white text-sm font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0F19]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  data-strk-img-id={`modal-${selectedItem.imgId}`}
                  data-strk-img={`[modal-${selectedItem.descId}] [modal-${selectedItem.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/30" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 w-fit">
                  <span className="text-xs text-amber-400">{selectedItem.category}</span>
                </div>
                <h2 id={`modal-${selectedItem.titleId}`} className="text-2xl font-light text-white mb-3">{selectedItem.title}</h2>
                <p id={`modal-${selectedItem.descId}`} className="text-gray-400 text-sm leading-relaxed mb-6">{selectedItem.description}</p>
                <div className="border-t border-[#1F2937] pt-6">
                  <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">Physics Explanation</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedItem.physics}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
