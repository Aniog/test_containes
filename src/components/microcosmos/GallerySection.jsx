import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Cells', 'Bacteria', 'Crystals', 'Insects', 'Plants', 'Minerals']

const galleryItems = [
  { id: 'g1', titleId: 'gallery-g1-title', descId: 'gallery-g1-desc', imgId: 'gallery-img-g1-a1b2c3', title: 'Red Blood Cells', desc: 'Human erythrocytes under scanning electron microscope', category: 'Cells', ratio: '1x1' },
  { id: 'g2', titleId: 'gallery-g2-title', descId: 'gallery-g2-desc', imgId: 'gallery-img-g2-d4e5f6', title: 'Snowflake Crystal', desc: 'Ice crystal formation showing hexagonal symmetry', category: 'Crystals', ratio: '1x1' },
  { id: 'g3', titleId: 'gallery-g3-title', descId: 'gallery-g3-desc', imgId: 'gallery-img-g3-g7h8i9', title: 'E. coli Bacteria', desc: 'Escherichia coli rod-shaped bacteria colony', category: 'Bacteria', ratio: '1x1' },
  { id: 'g4', titleId: 'gallery-g4-title', descId: 'gallery-g4-desc', imgId: 'gallery-img-g4-j1k2l3', title: 'Compound Eye', desc: 'Dragonfly compound eye facets at 200x magnification', category: 'Insects', ratio: '1x1' },
  { id: 'g5', titleId: 'gallery-g5-title', descId: 'gallery-g5-desc', imgId: 'gallery-img-g5-m4n5o6', title: 'Pollen Grain', desc: 'Sunflower pollen grain surface texture', category: 'Plants', ratio: '1x1' },
  { id: 'g6', titleId: 'gallery-g6-title', descId: 'gallery-g6-desc', imgId: 'gallery-img-g6-p7q8r9', title: 'Quartz Crystal', desc: 'Quartz mineral crystal under polarized light', category: 'Minerals', ratio: '1x1' },
  { id: 'g7', titleId: 'gallery-g7-title', descId: 'gallery-g7-desc', imgId: 'gallery-img-g7-s1t2u3', title: 'Neuron Network', desc: 'Fluorescent stained neural network connections', category: 'Cells', ratio: '1x1' },
  { id: 'g8', titleId: 'gallery-g8-title', descId: 'gallery-g8-desc', imgId: 'gallery-img-g8-v4w5x6', title: 'Butterfly Wing Scale', desc: 'Iridescent scales on a morpho butterfly wing', category: 'Insects', ratio: '1x1' },
  { id: 'g9', titleId: 'gallery-g9-title', descId: 'gallery-g9-desc', imgId: 'gallery-img-g9-y7z8a9', title: 'Salt Crystal', desc: 'Sodium chloride cubic crystal lattice structure', category: 'Crystals', ratio: '1x1' },
  { id: 'g10', titleId: 'gallery-g10-title', descId: 'gallery-g10-desc', imgId: 'gallery-img-g10-b1c2d3', title: 'Diatom Shell', desc: 'Silica shell of a marine diatom microorganism', category: 'Plants', ratio: '1x1' },
  { id: 'g11', titleId: 'gallery-g11-title', descId: 'gallery-g11-desc', imgId: 'gallery-img-g11-e4f5g6', title: 'Staphylococcus', desc: 'Staphylococcus aureus bacteria cluster', category: 'Bacteria', ratio: '1x1' },
  { id: 'g12', titleId: 'gallery-g12-title', descId: 'gallery-g12-desc', imgId: 'gallery-img-g12-h7i8j9', title: 'Pyrite Crystal', desc: 'Fool\'s gold pyrite cubic crystal formation', category: 'Minerals', ratio: '1x1' },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory])

  return (
    <section id="gallery" className="bg-gray-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-medium uppercase tracking-widest">
            Visual Archive
          </span>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Hundreds of specimens, each a masterpiece of natural engineering.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-400 text-gray-950'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-gray-800 aspect-square cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Always-present text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
