import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryImages = [
  { id: 'gal-img-mc020', query: 'pollen grain electron microscope colorful', alt: 'Pollen grain', label: 'Pollen Grain', span: 'col-span-1 row-span-2' },
  { id: 'gal-img-mc021', query: 'snowflake crystal microscope macro', alt: 'Snowflake crystal', label: 'Snowflake Crystal', span: 'col-span-1' },
  { id: 'gal-img-mc022', query: 'radiolarian microscope silica skeleton', alt: 'Radiolarian', label: 'Radiolarian', span: 'col-span-1' },
  { id: 'gal-img-mc023', query: 'fungal spores microscope colorful', alt: 'Fungal spores', label: 'Fungal Spores', span: 'col-span-2' },
  { id: 'gal-img-mc024', query: 'red blood cells microscope scanning electron', alt: 'Red blood cells', label: 'Red Blood Cells', span: 'col-span-1' },
  { id: 'gal-img-mc025', query: 'paramecium microscope single cell organism', alt: 'Paramecium', label: 'Paramecium', span: 'col-span-1' },
  { id: 'gal-img-mc026', query: 'butterfly wing scales microscope colorful', alt: 'Butterfly wing scales', label: 'Butterfly Wing Scales', span: 'col-span-1' },
  { id: 'gal-img-mc027', query: 'salt crystal macro microscope colorful', alt: 'Salt crystals', label: 'Salt Crystals', span: 'col-span-1' },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
            Visual Gallery
          </span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-4">
            Beauty at the Microscale
          </h2>
          <p id="gallery-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Captured through electron microscopes and fluorescence imaging, these images reveal the extraordinary artistry of the natural world.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`${img.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <img
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={img.id}
                data-strk-img={`${img.query} [gallery-desc] [gallery-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sky-50 font-semibold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
