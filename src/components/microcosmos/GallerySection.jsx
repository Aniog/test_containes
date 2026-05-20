import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  { id: 'gal-1', titleId: 'gal-title-1', title: 'E. coli Colony', tag: 'Bacteria', ratio: '1x1', width: 500 },
  { id: 'gal-2', titleId: 'gal-title-2', title: 'Diatom Shell', tag: 'Algae', ratio: '1x1', width: 500 },
  { id: 'gal-3', titleId: 'gal-title-3', title: 'Mitochondria', tag: 'Organelle', ratio: '1x1', width: 500 },
  { id: 'gal-4', titleId: 'gal-title-4', title: 'Paramecium', tag: 'Protozoa', ratio: '1x1', width: 500 },
  { id: 'gal-5', titleId: 'gal-title-5', title: 'Fungal Spores', tag: 'Fungi', ratio: '1x1', width: 500 },
  { id: 'gal-6', titleId: 'gal-title-6', title: 'Red Blood Cells', tag: 'Hematology', ratio: '1x1', width: 500 },
  { id: 'gal-7', titleId: 'gal-title-7', title: 'Tardigrade', tag: 'Micro-animal', ratio: '1x1', width: 500 },
  { id: 'gal-8', titleId: 'gal-title-8', title: 'Pollen Grain', tag: 'Botany', ratio: '1x1', width: 500 },
  { id: 'gal-9', titleId: 'gal-title-9', title: 'Neuron Synapse', tag: 'Neuroscience', ratio: '1x1', width: 500 },
  { id: 'gal-10', titleId: 'gal-title-10', title: 'Radiolarian', tag: 'Plankton', ratio: '1x1', width: 500 },
  { id: 'gal-11', titleId: 'gal-title-11', title: 'Virus Capsid', tag: 'Virology', ratio: '1x1', width: 500 },
  { id: 'gal-12', titleId: 'gal-title-12', title: 'Amoeba', tag: 'Protozoa', ratio: '1x1', width: 500 },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Visual Archive</p>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-black text-slate-50 mb-4">
            Microscopy Gallery
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Stunning electron microscope and fluorescence imagery from the frontiers of microbiology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-[#00d4c8]/15 hover:border-[#00d4c8]/50 transition-all duration-300 cursor-pointer"
            >
              <img
                alt={item.title}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={`${item.id}-img-mc`}
                data-strk-img={`[${item.titleId}] [gallery-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-[#00d4c8] uppercase tracking-wider mb-1">{item.tag}</span>
                <p className="text-slate-50 font-semibold text-sm">{item.title}</p>
              </div>
              {/* Always visible tag on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent flex flex-col justify-end p-3 md:hidden">
                <p className="text-slate-50 font-semibold text-xs">{item.title}</p>
              </div>
              {/* Hidden text for image query reference */}
              <p id={item.titleId} className="sr-only">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
