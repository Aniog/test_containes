import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Bacteria', 'Cells', 'Fungi', 'Viruses', 'Algae', 'Protozoa']

const galleryItems = [
  {
    id: 'gal-01', titleId: 'gal-title-01', descId: 'gal-desc-01',
    imgId: 'gal-img-mc-01',
    title: 'Staphylococcus Aureus',
    desc: 'Spherical bacteria clusters under electron microscope',
    category: 'Bacteria',
    size: 'large',
  },
  {
    id: 'gal-02', titleId: 'gal-title-02', descId: 'gal-desc-02',
    imgId: 'gal-img-mc-02',
    title: 'Red Blood Cells',
    desc: 'Erythrocytes flowing through capillaries',
    category: 'Cells',
    size: 'small',
  },
  {
    id: 'gal-03', titleId: 'gal-title-03', descId: 'gal-desc-03',
    imgId: 'gal-img-mc-03',
    title: 'Penicillium Mold',
    desc: 'Fungal spores and hyphae structure',
    category: 'Fungi',
    size: 'small',
  },
  {
    id: 'gal-04', titleId: 'gal-title-04', descId: 'gal-desc-04',
    imgId: 'gal-img-mc-04',
    title: 'T4 Bacteriophage',
    desc: 'Virus attaching to bacterial cell wall',
    category: 'Viruses',
    size: 'large',
  },
  {
    id: 'gal-05', titleId: 'gal-title-05', descId: 'gal-desc-05',
    imgId: 'gal-img-mc-05',
    title: 'Diatom Algae',
    desc: 'Intricate silica shells of marine microalgae',
    category: 'Algae',
    size: 'small',
  },
  {
    id: 'gal-06', titleId: 'gal-title-06', descId: 'gal-desc-06',
    imgId: 'gal-img-mc-06',
    title: 'Paramecium',
    desc: 'Single-celled protozoan with cilia',
    category: 'Protozoa',
    size: 'small',
  },
  {
    id: 'gal-07', titleId: 'gal-title-07', descId: 'gal-desc-07',
    imgId: 'gal-img-mc-07',
    title: 'E. Coli Bacteria',
    desc: 'Rod-shaped bacteria with flagella',
    category: 'Bacteria',
    size: 'small',
  },
  {
    id: 'gal-08', titleId: 'gal-title-08', descId: 'gal-desc-08',
    imgId: 'gal-img-mc-08',
    title: 'Neuron Cell',
    desc: 'Neural network dendrites and axons',
    category: 'Cells',
    size: 'large',
  },
  {
    id: 'gal-09', titleId: 'gal-title-09', descId: 'gal-desc-09',
    imgId: 'gal-img-mc-09',
    title: 'Aspergillus Spores',
    desc: 'Fungal conidiophores releasing spores',
    category: 'Fungi',
    size: 'small',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory])

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-sky-50 mb-4"
          >
            Gallery of the Invisible
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Stunning microscopy images revealing the extraordinary beauty hidden within the microcosmos.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#00d4aa] text-[#050a0e] shadow-[0_0_20px_rgba(0,212,170,0.4)]'
                  : 'border border-[#00d4aa]/20 text-slate-400 hover:border-[#00d4aa]/50 hover:text-sky-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-[#00d4aa]/10 hover:border-[#00d4aa]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,212,170,0.15)]"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.size === 'large' ? '3x4' : '4x3'}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/90 via-[#050a0e]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-widest uppercase text-[#00d4aa] mb-1 block">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-sky-50 font-semibold text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
