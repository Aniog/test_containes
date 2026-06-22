import React from 'react'
import { Camera } from 'lucide-react'

const items = [
  {
    id: 'plankton-bloom',
    title: 'Plankton Bloom',
    caption: 'Diatoms and dinoflagellates in coastal water',
    imgId: 'gallery-plankton-bloom-7c14a2',
    titleId: 'gallery-plankton-bloom-title',
    descId: 'gallery-plankton-bloom-desc',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: 1000,
    query: 'plankton diatom microscope blue',
  },
  {
    id: 'nerve-fibers',
    title: 'Nerve Fibers',
    caption: 'Neurons stained with fluorescent dye',
    imgId: 'gallery-nerve-fibers-2b91f5',
    titleId: 'gallery-nerve-fibers-title',
    descId: 'gallery-nerve-fibers-desc',
    ratio: '4x3',
    width: 700,
    query: 'neuron fluorescence microscopy',
  },
  {
    id: 'pollen-mosaic',
    title: 'Pollen Mosaic',
    caption: 'Variety of pollen under SEM',
    imgId: 'gallery-pollen-mosaic-cb43e1',
    titleId: 'gallery-pollen-mosaic-title',
    descId: 'gallery-pollen-mosaic-desc',
    ratio: '4x3',
    width: 700,
    query: 'pollen scanning electron microscope',
  },
  {
    id: 'crystal-fields',
    title: 'Crystal Fields',
    caption: 'Polarized light over salt crystals',
    imgId: 'gallery-crystal-fields-9f12d8',
    titleId: 'gallery-crystal-fields-title',
    descId: 'gallery-crystal-fields-desc',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: 1200,
    query: 'salt crystal polarized light microscopy',
  },
  {
    id: 'red-blood',
    title: 'Red Blood Cells',
    caption: 'Erythrocytes circulating in plasma',
    imgId: 'gallery-red-blood-1ab48c',
    titleId: 'gallery-red-blood-title',
    descId: 'gallery-red-blood-desc',
    ratio: '4x3',
    width: 700,
    query: 'red blood cells microscope',
  },
  {
    id: 'water-bear',
    title: 'Water Bear',
    caption: 'Tardigrade in moss habitat',
    imgId: 'gallery-water-bear-fd901a',
    titleId: 'gallery-water-bear-title',
    descId: 'gallery-water-bear-desc',
    ratio: '4x3',
    width: 700,
    query: 'tardigrade water bear electron microscope',
  },
  {
    id: 'algae-spiral',
    title: 'Algae Spiral',
    caption: 'Chlorophyll filaments at 400×',
    imgId: 'gallery-algae-spiral-4cb710',
    titleId: 'gallery-algae-spiral-title',
    descId: 'gallery-algae-spiral-desc',
    span: 'md:row-span-2',
    ratio: '3x4',
    width: 700,
    query: 'algae spiral microscope green',
  },
  {
    id: 'butterfly-scales',
    title: 'Butterfly Scales',
    caption: 'Iridescent wing under SEM',
    imgId: 'gallery-butterfly-scales-7710af',
    titleId: 'gallery-butterfly-scales-title',
    descId: 'gallery-butterfly-scales-desc',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: 1200,
    query: 'butterfly wing scales microscope iridescent',
  },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              The Gallery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-50 mt-4 leading-tight max-w-2xl">
              Visions in glass, cell, and crystal.
            </h2>
          </div>
          <a
            href="#worlds"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <Camera className="w-4 h-4" /> View by ecosystem
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4 md:gap-5">
          {items.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 ${item.span || ''}`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] ${item.query}`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3
                  id={item.titleId}
                  className="font-serif text-xl md:text-2xl text-slate-50"
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-slate-300 mt-1">
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
