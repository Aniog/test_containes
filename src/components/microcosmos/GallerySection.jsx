import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'gal-01', imgId: 'gallery-img-mc010', titleId: 'gal-title-01', descId: 'gal-desc-01',
    title: 'Diatom Colony', desc: 'Silica-shelled algae forming intricate geometric patterns under polarized light',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-02', imgId: 'gallery-img-mc011', titleId: 'gal-title-02', descId: 'gal-desc-02',
    title: 'Pollen Grain', desc: 'Magnified pollen grain surface texture from a flowering plant',
    span: '',
  },
  {
    id: 'gal-03', imgId: 'gallery-img-mc012', titleId: 'gal-title-03', descId: 'gal-desc-03',
    title: 'Tardigrade', desc: 'Water bear micro-animal, the most resilient creature on Earth',
    span: '',
  },
  {
    id: 'gal-04', imgId: 'gallery-img-mc013', titleId: 'gal-title-04', descId: 'gal-desc-04',
    title: 'Snowflake Crystal', desc: 'Hexagonal ice crystal photographed under electron microscope',
    span: '',
  },
  {
    id: 'gal-05', imgId: 'gallery-img-mc014', titleId: 'gal-title-05', descId: 'gal-desc-05',
    title: 'Neuron Network', desc: 'Fluorescent staining reveals the branching dendrites of a neuron',
    span: '',
  },
  {
    id: 'gal-06', imgId: 'gallery-img-mc015', titleId: 'gal-title-06', descId: 'gal-desc-06',
    title: 'Butterfly Wing Scale', desc: 'Nanostructures on butterfly wing scales create iridescent color',
    span: '',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">Visual Archive</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Microscopy Gallery</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Stunning imagery captured through electron microscopes, confocal lasers, and polarized light.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-teal-900/30 hover:border-teal-500/50 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-[#050d1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
