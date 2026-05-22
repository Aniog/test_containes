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
    category: 'Micro-animal',
    categoryColor: 'bg-amber-400/20 text-amber-400 border-amber-400/30',
    fact: 'Can survive in outer space',
    ratio: '3x4',
    width: 400,
  },
  {
    id: 'spec-2',
    titleId: 'spec-title-2',
    descId: 'spec-desc-2',
    title: 'Diatom',
    desc: 'Diatom algae silica shell geometric pattern',
    category: 'Algae',
    categoryColor: 'bg-[#00d4c8]/20 text-[#00d4c8] border-[#00d4c8]/30',
    fact: 'Produces 20% of Earth\'s oxygen',
    ratio: '3x4',
    width: 400,
  },
  {
    id: 'spec-3',
    titleId: 'spec-title-3',
    descId: 'spec-desc-3',
    title: 'Penicillium',
    desc: 'Penicillium mold spores fungi microscope',
    category: 'Fungi',
    categoryColor: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    fact: 'Source of the first antibiotic',
    ratio: '3x4',
    width: 400,
  },
  {
    id: 'spec-4',
    titleId: 'spec-title-4',
    descId: 'spec-desc-4',
    title: 'E. coli',
    desc: 'Escherichia coli bacteria rod shaped electron microscope',
    category: 'Bacteria',
    categoryColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    fact: 'Divides every 20 minutes',
    ratio: '3x4',
    width: 400,
  },
]

export default function SpecimenSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="py-20 md:py-28 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Featured Specimens
          </span>
          <h2
            id="specimens-heading"
            className="text-3xl md:text-4xl font-bold text-[#f0f8ff]"
          >
            Meet the Inhabitants
          </h2>
          <p className="text-[#6b8fa8] mt-4 max-w-xl mx-auto">
            Each organism tells a story millions of years in the making.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {specimens.map((s) => (
            <div
              key={s.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1e3a4a] hover:border-[#00d4c8]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,200,0.2)] bg-[#050a0e]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={s.id}
                  data-strk-img={`[${s.descId}] [${s.titleId}] [specimens-heading]`}
                  data-strk-img-ratio={s.ratio}
                  data-strk-img-width={s.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${s.categoryColor}`}>
                  {s.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={s.titleId} className="text-base font-semibold text-[#f0f8ff] mb-1">{s.title}</h3>
                <p id={s.descId} className="text-xs text-[#6b8fa8] leading-relaxed">{s.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
