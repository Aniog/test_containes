import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'gal-01',
    titleId: 'gal-title-01',
    descId: 'gal-desc-01',
    imgId: 'gallery-img-mc-01',
    title: 'Staphylococcus Aureus',
    desc: 'Spherical bacteria clusters under electron microscope',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-02',
    titleId: 'gal-title-02',
    descId: 'gal-desc-02',
    imgId: 'gallery-img-mc-02',
    title: 'Diatom Geometry',
    desc: 'Intricate silica shells of marine diatoms',
    ratio: '3x2',
    width: '800',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-03',
    titleId: 'gal-title-03',
    descId: 'gal-desc-03',
    imgId: 'gallery-img-mc-03',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of flower pollen',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-04',
    titleId: 'gal-title-04',
    descId: 'gal-desc-04',
    imgId: 'gallery-img-mc-04',
    title: 'Tardigrade',
    desc: 'Water bear micro-animal, the most resilient creature on Earth',
    ratio: '3x2',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-05',
    titleId: 'gal-title-05',
    descId: 'gal-desc-05',
    imgId: 'gallery-img-mc-05',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of brain neuron connections',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-06',
    titleId: 'gal-title-06',
    descId: 'gal-desc-06',
    imgId: 'gallery-img-mc-06',
    title: 'Penicillium Mold',
    desc: 'Colorful fungal spores of Penicillium under microscope',
    ratio: '3x2',
    width: '800',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-07',
    titleId: 'gal-title-07',
    descId: 'gal-desc-07',
    imgId: 'gallery-img-mc-07',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through capillary vessels',
    ratio: '3x2',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-08',
    titleId: 'gal-title-08',
    descId: 'gal-desc-08',
    imgId: 'gallery-img-mc-08',
    title: 'Paramecium',
    desc: 'Single-celled protozoan with cilia for locomotion',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-09',
    titleId: 'gal-title-09',
    descId: 'gal-desc-09',
    imgId: 'gallery-img-mc-09',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructure of iridescent butterfly wing scales',
    ratio: '3x2',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-10',
    titleId: 'gal-title-10',
    descId: 'gal-desc-10',
    imgId: 'gallery-img-mc-10',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal structure under polarized light',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-11',
    titleId: 'gal-title-11',
    descId: 'gal-desc-11',
    imgId: 'gallery-img-mc-11',
    title: 'Mitosis',
    desc: 'Cell division captured in fluorescent microscopy',
    ratio: '3x2',
    width: '800',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-12',
    titleId: 'gal-title-12',
    descId: 'gal-desc-12',
    imgId: 'gallery-img-mc-12',
    title: 'Radiolarian',
    desc: 'Ornate silica skeleton of a marine radiolarian protozoan',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-section-title"
            className="md:text-5xl text-cosmos-text mb-4 font-bold text-7xl"
          >
            The Microscopic Gallery - Bella
</h2>
          <p
            id="gallery-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Stunning imagery captured through electron microscopes, fluorescence imaging, and advanced optical techniques.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card hover:border-cosmos-cyan/50 transition-all duration-300 hover:shadow-glow-cyan ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover — IDs here are always in DOM for image query */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 id={item.titleId} className="text-cosmos-text font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-xs mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


