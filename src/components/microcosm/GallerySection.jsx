import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'gallery-img-a1',
    titleId: 'gallery-title-a1',
    title: 'Diatoms',
    subtitle: 'Microscopic algae with glass-like shells',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-b2',
    titleId: 'gallery-title-b2',
    title: 'Pollen Grains',
    subtitle: 'Intricate surface patterns under electron microscope',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-c3',
    titleId: 'gallery-title-c3',
    title: 'Snowflake Crystal',
    subtitle: 'Hexagonal ice crystal formation',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-d4',
    titleId: 'gallery-title-d4',
    title: 'Red Blood Cells',
    subtitle: 'Erythrocytes flowing through capillaries',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-e5',
    titleId: 'gallery-title-e5',
    title: 'Tardigrade',
    subtitle: 'The indestructible water bear',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-f6',
    titleId: 'gallery-title-f6',
    title: 'Bacteria Colony',
    subtitle: 'Microorganisms forming complex communities',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-g7',
    titleId: 'gallery-title-g7',
    title: 'Nerve Cells',
    subtitle: 'Neurons forming synaptic connections',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'gallery-img-h8',
    titleId: 'gallery-title-h8',
    title: 'Salt Crystal',
    subtitle: 'Sodium chloride cubic lattice structure',
    ratio: '1x1',
    width: 500,
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-glow font-body text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Visual Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Portraits of the Invisible
          </h2>
          <p className="font-body text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Each image is a window into a world that exists all around us, yet remains
            hidden from our unaided eyes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-cyan-glow/10 hover:border-cyan-glow/40 transition-all duration-500 cursor-pointer"
            >
              <img
                alt={item.title}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.titleId}] [gallery-heading] microscopy`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hidden title for image query reference */}
              <span id={item.titleId} className="sr-only">{item.title} {item.subtitle}</span>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-display text-white font-semibold text-sm">{item.title}</p>
                <p className="font-body text-slate-400 text-xs mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
