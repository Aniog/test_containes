import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const filters = ['All', 'Bacteria', 'Cells', 'Crystals', 'Pollen', 'Fungi', 'Insects', 'Algae']

const galleryItems = [
  { id: 'g1', titleId: 'g-title-1', descId: 'g-desc-1', imgId: 'gallery-img-1-a1b2c3', title: 'Diatom Shell', desc: 'Intricate silica shell of a marine diatom under electron microscope', category: 'Algae', size: 'large' },
  { id: 'g2', titleId: 'g-title-2', descId: 'g-desc-2', imgId: 'gallery-img-2-d4e5f6', title: 'E. coli Bacteria', desc: 'Rod-shaped Escherichia coli bacteria magnified 10,000 times', category: 'Bacteria', size: 'small' },
  { id: 'g3', titleId: 'g-title-3', descId: 'g-desc-3', imgId: 'gallery-img-3-g7h8i9', title: 'Snowflake Crystal', desc: 'Hexagonal ice crystal formation showing perfect symmetry', category: 'Crystals', size: 'small' },
  { id: 'g4', titleId: 'g-title-4', descId: 'g-desc-4', imgId: 'gallery-img-4-j0k1l2', title: 'Pollen Grain', desc: 'Sunflower pollen grain with spiky surface texture', category: 'Pollen', size: 'medium' },
  { id: 'g5', titleId: 'g-title-5', descId: 'g-desc-5', imgId: 'gallery-img-5-m3n4o5', title: 'Red Blood Cell', desc: 'Human erythrocyte showing characteristic biconcave disc shape', category: 'Cells', size: 'small' },
  { id: 'g6', titleId: 'g-title-6', descId: 'g-desc-6', imgId: 'gallery-img-6-p6q7r8', title: 'Penicillium Mold', desc: 'Penicillium fungus spores and hyphae under light microscope', category: 'Fungi', size: 'large' },
  { id: 'g7', titleId: 'g-title-7', descId: 'g-desc-7', imgId: 'gallery-img-7-s9t0u1', title: 'Compound Eye', desc: 'Fly compound eye showing thousands of individual ommatidia', category: 'Insects', size: 'medium' },
  { id: 'g8', titleId: 'g-title-8', descId: 'g-desc-8', imgId: 'gallery-img-8-v2w3x4', title: 'Salt Crystal', desc: 'Sodium chloride cubic crystal lattice structure', category: 'Crystals', size: 'small' },
  { id: 'g9', titleId: 'g-title-9', descId: 'g-desc-9', imgId: 'gallery-img-9-y5z6a7', title: 'Neuron Network', desc: 'Fluorescent staining reveals branching neural connections', category: 'Cells', size: 'large' },
  { id: 'g10', titleId: 'g-title-10', descId: 'g-desc-10', imgId: 'gallery-img-10-b8c9d0', title: 'Tardigrade', desc: 'Water bear (tardigrade) — the most resilient animal on Earth', category: 'Insects', size: 'medium' },
  { id: 'g11', titleId: 'g-title-11', descId: 'g-desc-11', imgId: 'gallery-img-11-e1f2g3', title: 'Rose Pollen', desc: 'Rose flower pollen grain with ornate surface patterns', category: 'Pollen', size: 'small' },
  { id: 'g12', titleId: 'g-title-12', descId: 'g-desc-12', imgId: 'gallery-img-12-h4i5j6', title: 'Spirulina Algae', desc: 'Spiral-shaped cyanobacteria used as a nutritional supplement', category: 'Algae', size: 'small' },
  { id: 'g13', titleId: 'g-title-13', descId: 'g-desc-13', imgId: 'gallery-img-13-k7l8m9', title: 'Staphylococcus', desc: 'Grape-like clusters of Staphylococcus aureus bacteria', category: 'Bacteria', size: 'medium' },
  { id: 'g14', titleId: 'g-title-14', descId: 'g-desc-14', imgId: 'gallery-img-14-n0o1p2', title: 'Quartz Crystal', desc: 'Polarized light reveals stunning colors in quartz thin section', category: 'Crystals', size: 'large' },
  { id: 'g15', titleId: 'g-title-15', descId: 'g-desc-15', imgId: 'gallery-img-15-q3r4s5', title: 'Aspergillus Spores', desc: 'Aspergillus fungus conidiophore releasing spores', category: 'Fungi', size: 'small' },
  { id: 'g16', titleId: 'g-title-16', descId: 'g-desc-16', imgId: 'gallery-img-16-t6u7v8', title: 'Mitosis', desc: 'Cell division captured at metaphase stage with chromosomes aligned', category: 'Cells', size: 'medium' },
]

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 md:col-span-2 row-span-1',
  large: 'col-span-1 md:col-span-2 row-span-2',
}

const imgRatios = {
  small: '1x1',
  medium: '3x2',
  large: '3x4',
}

export default function Gallery() {
  const containerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeFilter])

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Visual Collection
          </span>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Microscopy Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mb-6 rounded-full" />
          <p
            id="gallery-section-desc"
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Stunning images captured through electron and light microscopes, revealing the hidden architecture of life.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#00d4ff] text-[#050d1a] shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'bg-[#0f1f3d] border border-[#1e3a5f] text-slate-300 hover:border-[#00d4ff]/40 hover:text-[#00d4ff]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`${sizeClasses[item.size]} relative rounded-xl overflow-hidden border border-[#1e3a5f] group cursor-pointer hover:border-[#00d4ff]/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] transition-all duration-300`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={imgRatios[item.size]}
                data-strk-img-width={item.size === 'large' ? '800' : item.size === 'medium' ? '700' : '400'}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-[#00d4ff] font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 id={item.titleId} className="text-white font-semibold text-sm mt-1">
                  {item.title}
                </h4>
                <p id={item.descId} className="text-slate-400 text-xs mt-1 line-clamp-2">
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
