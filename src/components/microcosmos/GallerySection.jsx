import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  { id: 'g1', title: 'Diatom Colony', caption: 'Silicon-shelled algae', ratio: '1x1', width: 500 },
  { id: 'g2', title: 'Tardigrade', caption: 'Water bear — nearly indestructible', ratio: '4x3', width: 600 },
  { id: 'g3', title: 'Radiolarian', caption: 'Intricate mineral skeleton', ratio: '1x1', width: 500 },
  { id: 'g4', title: 'Paramecium', caption: 'Ciliated single-cell organism', ratio: '4x3', width: 600 },
  { id: 'g5', title: 'Pollen Grain', caption: 'Microscopic plant reproduction', ratio: '1x1', width: 500 },
  { id: 'g6', title: 'Rotifer', caption: 'Wheel-bearing micro-animal', ratio: '4x3', width: 600 },
  { id: 'g7', title: 'Foraminifera', caption: 'Ancient ocean microorganism', ratio: '1x1', width: 500 },
  { id: 'g8', title: 'Euglena', caption: 'Photosynthetic flagellate', ratio: '4x3', width: 600 },
  { id: 'g9', title: 'Nematode', caption: 'Microscopic roundworm', ratio: '1x1', width: 500 },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="gallery" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Gallery
          </h2>
          <p id="gallery-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Stunning microscopy photography revealing the extraordinary beauty hidden at the cellular scale.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-gray-700/40 shadow-lg hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer"
            >
              <img
                id={`gallery-img-${item.id}`}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`gallery-img-mc-${item.id}`}
                data-strk-img={`[gallery-caption-${item.id}] [gallery-item-title-${item.id}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                <h3
                  id={`gallery-item-title-${item.id}`}
                  className="text-white font-semibold text-lg"
                >
                  {item.title}
                </h3>
                <p
                  id={`gallery-caption-${item.id}`}
                  className="text-teal-300 text-sm mt-1"
                >
                  {item.caption}
                </p>
              </div>
              {/* Always-visible label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
