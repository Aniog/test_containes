import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'diatom-1',
    imgId: 'gallery-diatom-1-s5k8j3',
    titleId: 'gallery-diatom-1-title',
    title: 'Diatom Frustule',
    category: 'Phytoplankton',
  },
  {
    id: 'amoeba-1',
    imgId: 'gallery-amoeba-1-b7n2p9',
    titleId: 'gallery-amoeba-1-title',
    title: 'Amoeba Proteus',
    category: 'Protozoa',
    tall: true,
  },
  {
    id: 'bacteria-colony',
    imgId: 'gallery-bacteria-colony-f4w1c6',
    titleId: 'gallery-bacteria-colony-title',
    title: 'Bacterial Colony',
    category: 'Bacteria',
  },
  {
    id: 'pollen-grain',
    imgId: 'gallery-pollen-grain-h9d3x5',
    titleId: 'gallery-pollen-grain-title',
    title: 'Pollen Grain Surface',
    category: 'Botany',
    tall: true,
  },
  {
    id: 'euglena',
    imgId: 'gallery-euglena-m8r6t2',
    titleId: 'gallery-euglena-title',
    title: 'Euglena Viridis',
    category: 'Flagellate',
  },
  {
    id: 'rotifer',
    imgId: 'gallery-rotifer-k3v9b7',
    titleId: 'gallery-rotifer-title',
    title: 'Rotifer Microorganism',
    category: 'Microfauna',
  },
  {
    id: 'paramecium',
    imgId: 'gallery-paramecium-q2g5y8',
    titleId: 'gallery-paramecium-title',
    title: 'Paramecium Cilia',
    category: 'Ciliate',
  },
  {
    id: 'plankton-net',
    imgId: 'gallery-plankton-net-j6l4w1',
    titleId: 'gallery-plankton-net-title',
    title: 'Marine Plankton',
    category: 'Plankton',
  },
  {
    id: 'spirogyra',
    imgId: 'gallery-spirogyra-a1c7f4',
    titleId: 'gallery-spirogyra-title',
    title: 'Spirogyra Spiral',
    category: 'Green Algae',
    tall: true,
  },
  {
    id: 'radiolarian',
    imgId: 'gallery-radiolarian-p5m8r2',
    titleId: 'gallery-radiolarian-title',
    title: 'Radiolarian Skeleton',
    category: 'Protist',
  },
  {
    id: 'water-bear',
    imgId: 'gallery-water-bear-d3h9k6',
    titleId: 'gallery-water-bear-title',
    title: 'Tardigrade Close-up',
    category: 'Tardigrade',
  },
  {
    id: 'nematode',
    imgId: 'gallery-nematode-f7w2b5',
    titleId: 'gallery-nematode-title',
    title: 'Nematode Worm',
    category: 'Worm',
  },
]

const Gallery = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="gallery" className="py-24 px-6 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cosmos-primary">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-cosmos-text">
            Microscopic <span className="text-cosmos-highlight">Gallery</span>
          </h2>
          <div className="section-glow-line mb-6" />
          <p className="text-cosmos-muted max-w-2xl mx-auto text-lg">
            A curated collection of microscopic wonders captured through electron and fluorescence microscopy.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="glow-card break-inside-avoid group cursor-pointer"
            >
              <div className={`img-overlay ${item.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] microscopic`}
                  data-strk-img-ratio={item.tall ? '3x4' : '1x1'}
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-cosmos-primary/80 tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-sm font-semibold text-cosmos-text mt-1 group-hover:text-cosmos-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
