import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  { id: 'gal-01', imgId: 'gallery-img-mc010', titleId: 'gal-01-title', descId: 'gal-01-desc', title: 'Diatom Silica Shell', desc: 'Microscopic algae with intricate glass-like cell walls', ratio: '1x1', width: '600', span: 'col-span-1 row-span-1' },
  { id: 'gal-02', imgId: 'gallery-img-mc011', titleId: 'gal-02-title', descId: 'gal-02-desc', title: 'Neuron Network', desc: 'Fluorescent neurons forming synaptic connections in brain tissue', ratio: '3x2', width: '800', span: 'col-span-2 row-span-1' },
  { id: 'gal-03', imgId: 'gallery-img-mc012', titleId: 'gal-03-title', descId: 'gal-03-desc', title: 'Pollen Grain', desc: 'Scanning electron microscope image of flower pollen surface texture', ratio: '1x1', width: '600', span: 'col-span-1 row-span-1' },
  { id: 'gal-04', imgId: 'gallery-img-mc013', titleId: 'gal-04-title', descId: 'gal-04-desc', title: 'Tardigrade', desc: 'Water bear micro-animal surviving extreme conditions', ratio: '3x2', width: '800', span: 'col-span-2 row-span-1' },
  { id: 'gal-05', imgId: 'gallery-img-mc014', titleId: 'gal-05-title', descId: 'gal-05-desc', title: 'Red Blood Cells', desc: 'Erythrocytes flowing through a capillary vessel', ratio: '1x1', width: '600', span: 'col-span-1 row-span-1' },
  { id: 'gal-06', imgId: 'gallery-img-mc015', titleId: 'gal-06-title', descId: 'gal-06-desc', title: 'Snowflake Crystal', desc: 'Hexagonal ice crystal structure under polarized light', ratio: '1x1', width: '600', span: 'col-span-1 row-span-1' },
  { id: 'gal-07', imgId: 'gallery-img-mc016', titleId: 'gal-07-title', descId: 'gal-07-desc', title: 'Paramecium', desc: 'Single-celled ciliate protozoan swimming in pond water', ratio: '1x1', width: '600', span: 'col-span-1 row-span-1' },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Visual Archive</span>
          <h2 id="gallery-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            The Microscopy Gallery
          </h2>
          <p id="gallery-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Stunning imagery captured through electron microscopes, fluorescence imaging, and polarized light photography.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-[#050d1a] border border-cyan-900/20 ${item.span}`}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-[#050d1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-white font-bold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
