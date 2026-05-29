import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const specimens = [
  {
    id: 'spec-1',
    titleId: 'spec-title-1',
    descId: 'spec-desc-1',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal extreme survival',
    tag: 'Micro-Animal',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'spec-2',
    titleId: 'spec-title-2',
    descId: 'spec-desc-2',
    title: 'Diatom',
    desc: 'Diatom algae silica shell geometric pattern microscope',
    tag: 'Algae',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'spec-3',
    titleId: 'spec-title-3',
    descId: 'spec-desc-3',
    title: 'Radiolarian',
    desc: 'Radiolarian protozoa intricate skeleton microscopy',
    tag: 'Protozoa',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'spec-4',
    titleId: 'spec-title-4',
    descId: 'spec-desc-4',
    title: 'Pollen Grain',
    desc: 'Pollen grain surface texture electron microscope',
    tag: 'Plant',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'spec-5',
    titleId: 'spec-title-5',
    descId: 'spec-desc-5',
    title: 'Paramecium',
    desc: 'Paramecium ciliate protozoa swimming microscope',
    tag: 'Ciliate',
    tagColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'spec-6',
    titleId: 'spec-title-6',
    descId: 'spec-desc-6',
    title: 'Snowflake Crystal',
    desc: 'Snowflake ice crystal macro photography symmetry',
    tag: 'Crystal',
    tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    ratio: '3x4',
    width: 500,
  },
]

export default function SpecimensGrid() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-36 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">Featured Specimens</span>
          <h2 id="specimens-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the Inhabitants
          </h2>
          <p id="specimens-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From armored water bears to geometric diatoms, the microscopic world is filled with creatures of extraordinary beauty and resilience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {specimens.map((s) => (
            <div key={s.id} className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`${s.id}-img-mc`}
                  data-strk-img={`[${s.descId}] [${s.titleId}] [specimens-subtitle] [specimens-title]`}
                  data-strk-img-ratio={s.ratio}
                  data-strk-img-width={s.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className={`inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest mb-2 ${s.tagColor}`}>
                  {s.tag}
                </span>
                <h3 id={s.titleId} className="text-white font-bold text-lg leading-tight">{s.title}</h3>
                <p id={s.descId} className="text-slate-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
