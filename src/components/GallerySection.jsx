import { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'

const galleryItems = [
  {
    id: 'diatom-1',
    title: 'Diatom Frustule',
    category: 'algae',
    description: 'Glass-like shell of a diatom, nature\'s microscopic jewel',
    titleId: 'gallery-diatom-1-title',
    descId: 'gallery-diatom-1-desc',
  },
  {
    id: 'bacteria-1',
    title: 'E. Coli Colony',
    category: 'bacteria',
    description: 'Rod-shaped bacteria forming a living colony',
    titleId: 'gallery-bacteria-1-title',
    descId: 'gallery-bacteria-1-desc',
  },
  {
    id: 'radiolarian-1',
    title: 'Radiolarian Skeleton',
    category: 'protists',
    description: 'Intricate silica skeleton of a marine radiolarian',
    titleId: 'gallery-radiolarian-1-title',
    descId: 'gallery-radiolarian-1-desc',
  },
  {
    id: 'amoeba-1',
    title: 'Amoeba Proteus',
    category: 'protists',
    description: 'A single-celled predator hunting in pond water',
    titleId: 'gallery-amoeba-1-title',
    descId: 'gallery-amoeba-1-desc',
  },
  {
    id: 'pollen-1',
    title: 'Pollen Grains',
    category: 'plants',
    description: 'Microscopic carriers of plant reproductive cells',
    titleId: 'gallery-pollen-1-title',
    descId: 'gallery-pollen-1-desc',
  },
  {
    id: 'virus-1',
    title: 'Bacteriophage',
    category: 'viruses',
    description: 'Virus that infects bacteria with surgical precision',
    titleId: 'gallery-virus-1-title',
    descId: 'gallery-virus-1-desc',
  },
  {
    id: 'tardigrade-1',
    title: 'Tardigrade',
    category: 'animals',
    description: 'The indestructible water bear, survivor of extreme conditions',
    titleId: 'gallery-tardigrade-1-title',
    descId: 'gallery-tardigrade-1-desc',
  },
  {
    id: 'rotifer-1',
    title: 'Rotifer',
    category: 'animals',
    description: 'Wheel animalcule with complex internal anatomy',
    titleId: 'gallery-rotifer-1-title',
    descId: 'gallery-rotifer-1-desc',
  },
  {
    id: 'cyanobacteria-1',
    title: 'Cyanobacteria',
    category: 'bacteria',
    description: 'Ancient blue-green algae that oxygenated Earth',
    titleId: 'gallery-cyanobacteria-1-title',
    descId: 'gallery-cyanobacteria-1-desc',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'bacteria', label: 'Bacteria' },
  { id: 'algae', label: 'Algae' },
  { id: 'protists', label: 'Protists' },
  { id: 'viruses', label: 'Viruses' },
  { id: 'animals', label: 'Micro-Animals' },
  { id: 'plants', label: 'Plants' },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="relative py-20 lg:py-32 bg-nebula-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-nebula-400/10 border border-nebula-400/20 text-nebula-400 text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Microscopic Masterpieces
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Each image reveals a hidden world of extraordinary beauty and complexity, 
            captured through the lens of powerful electron microscopes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-nebula-500 text-white shadow-lg shadow-nebula-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-nebula-500/10"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={`gallery-${item.id}-img-${index}`}
                  data-strk-img={`[${item.descId}] [${item.titleId}] microscopic electron microscope`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />
                
                {/* Zoom Button */}
                <button
                  onClick={() => setSelectedImage(item)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-nebula-400/10 text-nebula-400 text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
                <h3 id={item.titleId} className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              data-strk-img-id={`gallery-modal-${selectedImage.id}`}
              data-strk-img={`[${selectedImage.descId}] [${selectedImage.titleId}] microscopic detail`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}