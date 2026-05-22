import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'gal-1',
    titleId: 'gal-title-1',
    descId: 'gal-desc-1',
    title: 'Pollen Grain',
    desc: 'Pollen grain surface texture electron microscope colorized',
    tag: 'Plant',
    ratio: '4x3',
    width: 600,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-2',
    titleId: 'gal-title-2',
    descId: 'gal-desc-2',
    title: 'Radiolarian',
    desc: 'Radiolarian protozoa silica skeleton microscope',
    tag: 'Protozoa',
    ratio: '1x1',
    width: 400,
    span: '',
  },
  {
    id: 'gal-3',
    titleId: 'gal-title-3',
    descId: 'gal-desc-3',
    title: 'Snowflake Crystal',
    desc: 'Snowflake ice crystal macro photography symmetry',
    tag: 'Crystal',
    ratio: '1x1',
    width: 400,
    span: '',
  },
  {
    id: 'gal-4',
    titleId: 'gal-title-4',
    descId: 'gal-desc-4',
    title: 'Neuron Network',
    desc: 'Neuron nerve cell network fluorescence microscopy brain',
    tag: 'Cell',
    ratio: '1x1',
    width: 400,
    span: '',
  },
  {
    id: 'gal-5',
    titleId: 'gal-title-5',
    descId: 'gal-desc-5',
    title: 'Butterfly Wing Scale',
    desc: 'Butterfly wing scale iridescent microscope close up',
    tag: 'Insect',
    ratio: '4x3',
    width: 600,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-6',
    titleId: 'gal-title-6',
    descId: 'gal-desc-6',
    title: 'Spirulina Algae',
    desc: 'Spirulina algae spiral filament microscope green',
    tag: 'Algae',
    ratio: '1x1',
    width: 400,
    span: '',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Visual Gallery
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl md:text-4xl font-bold text-[#f0f8ff]"
          >
            The Art of the Invisible
          </h2>
          <p className="text-[#6b8fa8] mt-4 max-w-xl mx-auto">
            Microscopy transforms science into art — every image a window into a world unseen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-[#1e3a4a] hover:border-[#00d4c8]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,200,0.15)] ${item.span}`}
            >
              <img
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/90 via-[#050a0e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#00d4c8]/20 text-[#00d4c8] border border-[#00d4c8]/30 mb-2 inline-block">
                  {item.tag}
                </span>
                <h3 id={item.titleId} className="text-sm font-semibold text-[#f0f8ff]">{item.title}</h3>
                <p id={item.descId} className="sr-only">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
