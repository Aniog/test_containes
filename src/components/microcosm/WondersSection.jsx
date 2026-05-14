import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const wonders = [
  {
    imgId: 'wonder-img-1x',
    titleId: 'wonder-title-1x',
    title: 'Tardigrade',
    desc: 'Survives in outer space, boiling water, and the vacuum of a volcano.',
    tag: 'Extremophile',
    tagColor: 'text-cyan-glow bg-cyan-glow/10',
  },
  {
    imgId: 'wonder-img-2y',
    titleId: 'wonder-title-2y',
    title: 'Mycelium Network',
    desc: 'Fungal threads form the "wood wide web," connecting entire forests.',
    tag: 'Fungi',
    tagColor: 'text-neon-green bg-neon-green/10',
  },
  {
    imgId: 'wonder-img-3z',
    titleId: 'wonder-title-3z',
    title: 'Radiolaria',
    desc: 'Single-celled organisms with intricate mineral skeletons of stunning beauty.',
    tag: 'Protozoa',
    tagColor: 'text-violet-glow bg-violet-glow/10',
  },
]

export default function WondersSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-glow font-body text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Wonders of the Microcosm
          </p>
          <h2
            id="wonders-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Extraordinary Microscopic Life
          </h2>
          <p className="font-body text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Some of the most remarkable organisms on Earth are also the smallest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {wonders.map((w) => (
            <div
              key={w.imgId}
              className="group bg-card-dark rounded-2xl overflow-hidden border border-cyan-glow/10 hover:border-cyan-glow/30 transition-all duration-500 hover:shadow-glow-cyan"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={w.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[${w.titleId}] [wonders-heading] microscopy`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width={500}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-body font-medium px-3 py-1 rounded-full mb-3 ${w.tagColor}`}>
                  {w.tag}
                </span>
                <h3 id={w.titleId} className="font-display text-xl font-bold text-white mb-2">
                  {w.title}
                </h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
