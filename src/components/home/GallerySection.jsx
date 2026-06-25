import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'g1', imgId: 'gallery-img-mc021', titleId: 'gallery-g1-title', descId: 'gallery-g1-desc',
    title: 'Diatom Algae', desc: 'Microscopic algae with intricate silica shells forming geometric patterns',
    size: 'large',
  },
  {
    id: 'g2', imgId: 'gallery-img-mc022', titleId: 'gallery-g2-title', descId: 'gallery-g2-desc',
    title: 'Pollen Grain', desc: 'Colorized scanning electron microscope image of flower pollen',
    size: 'small',
  },
  {
    id: 'g3', imgId: 'gallery-img-mc023', titleId: 'gallery-g3-title', descId: 'gallery-g3-desc',
    title: 'Tardigrade', desc: 'Water bear microscopic animal surviving extreme conditions',
    size: 'small',
  },
  {
    id: 'g4', imgId: 'gallery-img-mc024', titleId: 'gallery-g4-title', descId: 'gallery-g4-desc',
    title: 'Red Blood Cells', desc: 'Human erythrocytes under scanning electron microscope',
    size: 'small',
  },
  {
    id: 'g5', imgId: 'gallery-img-mc025', titleId: 'gallery-g5-title', descId: 'gallery-g5-desc',
    title: 'Snowflake Crystal', desc: 'Ice crystal formation showing perfect hexagonal symmetry',
    size: 'large',
  },
  {
    id: 'g6', imgId: 'gallery-img-mc026', titleId: 'gallery-g6-title', descId: 'gallery-g6-desc',
    title: 'Neuron Network', desc: 'Brain neurons forming synaptic connections under fluorescence microscopy',
    size: 'small',
  },
  {
    id: 'g7', imgId: 'gallery-img-mc027', titleId: 'gallery-g7-title', descId: 'gallery-g7-desc',
    title: 'Butterfly Wing Scale', desc: 'Iridescent scales on a butterfly wing at high magnification',
    size: 'small',
  },
  {
    id: 'g8', imgId: 'gallery-img-mc028', titleId: 'gallery-g8-title', descId: 'gallery-g8-desc',
    title: 'Salt Crystal', desc: 'Sodium chloride cubic crystal structure under polarized light',
    size: 'small',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="gallery" className="py-24 md:py-32 px-4 md:px-8 bg-[#0d1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4 block">
            — Visual Collection —
          </span>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Microscopic Gallery
          </h2>
          <p
            id="gallery-section-desc"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stunning imagery captured through electron microscopes, fluorescence microscopy, and polarized light — revealing the hidden artistry of the natural world.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Row 1: large + 2 small */}
          <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden">
            <img
              alt={galleryItems[0].title}
              data-strk-img-id={galleryItems[0].imgId}
              data-strk-img={`[${galleryItems[0].descId}] [${galleryItems[0].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 id={galleryItems[0].titleId} className="text-white font-semibold text-lg">{galleryItems[0].title}</h3>
              <p id={galleryItems[0].descId} className="text-slate-300 text-xs mt-1">{galleryItems[0].desc}</p>
            </div>
          </div>

          {[galleryItems[1], galleryItems[2]].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs mt-0.5 hidden md:block">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Row 2: 3 small + large */}
          {[galleryItems[3], galleryItems[5], galleryItems[6]].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs mt-0.5 hidden md:block">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="col-span-2 group relative rounded-2xl overflow-hidden">
            <img
              alt={galleryItems[4].title}
              data-strk-img-id={galleryItems[4].imgId}
              data-strk-img={`[${galleryItems[4].descId}] [${galleryItems[4].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[180px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 id={galleryItems[4].titleId} className="text-white font-semibold text-lg">{galleryItems[4].title}</h3>
              <p id={galleryItems[4].descId} className="text-slate-300 text-xs mt-1">{galleryItems[4].desc}</p>
            </div>
          </div>

          {/* Last row: full width item */}
          <div className="col-span-2 md:col-span-4 group relative rounded-2xl overflow-hidden">
            <img
              alt={galleryItems[7].title}
              data-strk-img-id={galleryItems[7].imgId}
              data-strk-img={`[${galleryItems[7].descId}] [${galleryItems[7].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-2 block">Featured</span>
              <h3 id={galleryItems[7].titleId} className="text-white font-bold text-2xl">{galleryItems[7].title}</h3>
              <p id={galleryItems[7].descId} className="text-slate-300 text-sm mt-1 max-w-md">{galleryItems[7].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
