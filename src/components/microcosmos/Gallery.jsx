import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const captures = [
  {
    id: 'pollen',
    title: 'Pollen Grains',
    caption: 'Allium sativum · 1500× SEM',
    titleId: 'gallery-pollen-title',
    captionId: 'gallery-pollen-caption',
    imgId: 'gallery-pollen-img-x1y2z3',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'diatom',
    title: 'Diatom Lattice',
    caption: 'Triceratium · brightfield',
    titleId: 'gallery-diatom-title',
    captionId: 'gallery-diatom-caption',
    imgId: 'gallery-diatom-img-a4b5c6',
    span: '',
  },
  {
    id: 'rotifer',
    title: 'Rotifer Crown',
    caption: 'Philodina · 400×',
    titleId: 'gallery-rotifer-title',
    captionId: 'gallery-rotifer-caption',
    imgId: 'gallery-rotifer-img-d7e8f9',
    span: '',
  },
  {
    id: 'mold',
    title: 'Mold Hyphae',
    caption: 'Aspergillus niger · darkfield',
    titleId: 'gallery-mold-title',
    captionId: 'gallery-mold-caption',
    imgId: 'gallery-mold-img-g1h2i3',
    span: 'md:col-span-2',
  },
  {
    id: 'plankton',
    title: 'Marine Plankton',
    caption: 'mixed sample · phase contrast',
    titleId: 'gallery-plankton-title',
    captionId: 'gallery-plankton-caption',
    imgId: 'gallery-plankton-img-j4k5l6',
    span: '',
  },
  {
    id: 'crystal',
    title: 'Salt Crystal',
    caption: 'NaCl · polarised light',
    titleId: 'gallery-crystal-title',
    captionId: 'gallery-crystal-caption',
    imgId: 'gallery-crystal-img-m7n8o9',
    span: '',
  },
]

export default function Gallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">
              04 — Gallery
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-50 leading-tight">
              A field album from the lens.
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            Selected captures from research microscopes around the world. Each
            frame is a window into a world that has always been here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {captures.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${item.span}`}
            >
              <img
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [${item.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4">
                <h3
                  id={item.titleId}
                  className="font-serif text-slate-50 text-lg leading-tight"
                >
                  {item.title}
                </h3>
                <p
                  id={item.captionId}
                  className="font-mono text-[11px] uppercase tracking-wider text-cyan-200/80 mt-1"
                >
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
