import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const specimens = [
  {
    id: 'sp1',
    titleId: 'specimen-sp1-title',
    descId: 'specimen-sp1-desc',
    imgId: 'specimen-img-sp1-a1b2c3',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'The most resilient animal on Earth — survives vacuum, radiation, and extreme temperatures. Seen here at 400x magnification.',
    tag: 'Micro-animal',
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
  },
  {
    id: 'sp2',
    titleId: 'specimen-sp2-title',
    descId: 'specimen-sp2-desc',
    imgId: 'specimen-img-sp2-d4e5f6',
    title: 'Radiolarian',
    subtitle: 'Ocean Microorganism',
    desc: 'Single-celled organisms with intricate silica skeletons. Their geometric shells have inspired architects and engineers for centuries.',
    tag: 'Protozoa',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  },
  {
    id: 'sp3',
    titleId: 'specimen-sp3-title',
    descId: 'specimen-sp3-desc',
    imgId: 'specimen-img-sp3-g7h8i9',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'A stalked ciliate protozoan that contracts like a spring when disturbed. Found in freshwater ponds worldwide.',
    tag: 'Ciliate',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  },
]

export default function SpecimensSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-xs font-medium uppercase tracking-widest">
              Featured
            </span>
            <h2
              id="specimens-section-title"
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Remarkable Specimens
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm">
            Hand-picked organisms that push the boundaries of what life can be.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {specimens.map((s) => (
            <div
              key={s.id}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4x3] overflow-hidden">
                <img
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}] [specimens-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={s.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span id={s.titleId} className="sr-only">{s.title}</span>
                <span id={s.descId} className="sr-only">{s.desc}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`inline-block mb-3 px-3 py-1 rounded-full border text-xs font-medium uppercase tracking-widest ${s.tagColor}`}
                >
                  {s.tag}
                </span>
                <h3 className="text-white font-bold text-xl mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{s.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <button className="flex items-center gap-2 text-teal-400 text-sm font-medium hover:gap-3 transition-all duration-200">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
