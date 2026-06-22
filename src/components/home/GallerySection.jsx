import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal extremophile',
    imgId: 'gallery-img-tar-a1b2c3',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    desc: 'Silica shell algae geometric pattern microscope',
    imgId: 'gallery-img-dia-d4e5f6',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'Brain nerve cell synapse fluorescent microscopy',
    imgId: 'gallery-img-neu-g7h8i9',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Flower pollen grain surface texture electron microscope',
    imgId: 'gallery-img-pol-j1k2l3',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Marine plankton skeleton silica intricate structure',
    imgId: 'gallery-img-rad-m4n5o6',
    titleId: 'gallery-radiolaria-title',
    descId: 'gallery-radiolaria-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'bloodcell',
    title: 'Red Blood Cells',
    desc: 'Human red blood cells flowing through blood vessel capillary',
    imgId: 'gallery-img-bld-p7q8r9',
    titleId: 'gallery-bloodcell-title',
    descId: 'gallery-bloodcell-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'fungal',
    title: 'Fungal Spores',
    desc: 'Mushroom fungal spores releasing into air macro photography',
    imgId: 'gallery-img-fun-s1t2u3',
    titleId: 'gallery-fungal-title',
    descId: 'gallery-fungal-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal snowflake hexagonal symmetry macro photography',
    imgId: 'gallery-img-snw-v4w5x6',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Single cell organism amoeba pseudopod movement microscope',
    imgId: 'gallery-img-amo-y7z8a9',
    titleId: 'gallery-amoeba-title',
    descId: 'gallery-amoeba-desc',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">Visual Journey</p>
          <h2 id="gallery-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Microscopic Gallery
          </h2>
          <p id="gallery-section-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stunning imagery captured through advanced microscopy techniques revealing the hidden beauty of the micro world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden ${item.span} cursor-pointer`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-lg font-bold text-white">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
