import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Bacteria', 'Cells', 'Fungi', 'Algae', 'Viruses', 'Protozoa']

const galleryItems = [
  { id: 'gal-01', category: 'Bacteria', title: 'Streptococcus Colony', desc: 'Chain-forming gram-positive bacteria', ratio: '1x1', width: 600 },
  { id: 'gal-02', category: 'Cells', title: 'Red Blood Cells', desc: 'Human erythrocytes under SEM', ratio: '4x3', width: 800 },
  { id: 'gal-03', category: 'Fungi', title: 'Penicillium Spores', desc: 'Antibiotic-producing mold spores', ratio: '1x1', width: 600 },
  { id: 'gal-04', category: 'Algae', title: 'Diatom Shells', desc: 'Silica-encased microalgae', ratio: '4x3', width: 800 },
  { id: 'gal-05', category: 'Viruses', title: 'Bacteriophage', desc: 'Virus that infects bacteria', ratio: '1x1', width: 600 },
  { id: 'gal-06', category: 'Protozoa', title: 'Paramecium', desc: 'Ciliated single-cell organism', ratio: '4x3', width: 800 },
  { id: 'gal-07', category: 'Bacteria', title: 'E. coli Biofilm', desc: 'Bacterial community structure', ratio: '4x3', width: 800 },
  { id: 'gal-08', category: 'Cells', title: 'Neuron Network', desc: 'Brain cells forming synaptic connections', ratio: '1x1', width: 600 },
  { id: 'gal-09', category: 'Fungi', title: 'Aspergillus Niger', desc: 'Black mold spore head', ratio: '1x1', width: 600 },
  { id: 'gal-10', category: 'Algae', title: 'Spirulina Filaments', desc: 'Spiral cyanobacteria strands', ratio: '4x3', width: 800 },
  { id: 'gal-11', category: 'Protozoa', title: 'Amoeba Pseudopods', desc: 'Shape-shifting predator cell', ratio: '1x1', width: 600 },
  { id: 'gal-12', category: 'Cells', title: 'Mitosis Division', desc: 'Cell splitting into two daughters', ratio: '4x3', width: 800 },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [activeCategory])

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 px-4 bg-[#0d1424]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Visual Collection
          </span>
          <h2
            id="gallery-title"
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Microscopic
            <span className="text-[#00e5ff]"> Gallery</span>
          </h2>
          <p
            id="gallery-subtitle"
            className="text-lg text-[#8ab4c8] max-w-xl mx-auto"
          >
            Stunning imagery from electron microscopes and fluorescence imaging
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#00e5ff] text-[#050810] shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                  : 'border border-[rgba(0,229,255,0.25)] text-[#8ab4c8] hover:border-[#00e5ff] hover:text-[#00e5ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group break-inside-avoid bg-[#0f1a2e] border border-[rgba(0,229,255,0.12)] rounded-2xl overflow-hidden hover:border-[rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  id={`${item.id}-title-ref`}
                  alt={item.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`gallery-img-${item.id}`}
                  data-strk-img={`[${item.id}-desc-ref] [${item.id}-title-ref] [gallery-subtitle] [gallery-title] microscope`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 bg-[rgba(0,229,255,0.15)] border border-[rgba(0,229,255,0.3)] rounded-full px-3 py-1">
                  <span className="text-[#00e5ff] text-xs font-semibold">{item.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 id={`${item.id}-title-ref`} className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p id={`${item.id}-desc-ref`} className="text-[#8ab4c8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
