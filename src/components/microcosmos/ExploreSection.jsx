import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-cells',
    imgId: 'explore-img-mc002',
    title: 'Living Cells',
    desc: 'Eukaryotic cells under fluorescence microscopy reveal organelles glowing in vivid color.',
    tag: 'Cell Biology',
    tagColor: 'cyan',
  },
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-mc003',
    title: 'Bacterial Worlds',
    desc: 'Colonies of bacteria form intricate patterns and biofilms visible only through powerful lenses.',
    tag: 'Microbiology',
    tagColor: 'violet',
  },
  {
    id: 'feat-crystals',
    imgId: 'explore-img-mc004',
    title: 'Micro Crystals',
    desc: 'Polarized light transforms ordinary minerals into kaleidoscopic masterpieces of geometry.',
    tag: 'Mineralogy',
    tagColor: 'emerald',
  },
]

export default function ExploreSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">What We Explore</span>
          <h2 id="explore-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Worlds Within Worlds
          </h2>
          <p id="explore-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Every drop of water, every grain of soil holds an entire universe of microscopic life waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="group bg-[#0a1628] border border-cyan-900/30 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  data-strk-img-id={f.imgId}
                  data-strk-img={`[${f.id}-desc] [${f.id}-title] [explore-subtitle] [explore-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className={`inline-block mb-3 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                  f.tagColor === 'cyan' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                  f.tagColor === 'violet' ? 'bg-violet-500/10 text-violet-400 border border-violet-400/20' :
                  'bg-emerald-500/10 text-emerald-400 border border-emerald-400/20'
                }`}>
                  {f.tag}
                </span>
                <h3 id={`${f.id}-title`} className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p id={`${f.id}-desc`} className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
