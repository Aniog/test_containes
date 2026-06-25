import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '0.001mm', label: 'Size of a typical bacterium', sublabel: 'Bacteria' },
  { value: '10,000×', label: 'Magnification of electron microscopes', sublabel: 'Technology' },
  { value: '8.7M', label: 'Estimated species on Earth', sublabel: 'Biodiversity' },
  { value: '99%', label: 'Of all life is microscopic', sublabel: 'Scale' },
]

const facts = [
  {
    id: 'fact1',
    imgId: 'facts-img-mc041',
    titleId: 'facts-f1-title',
    descId: 'facts-f1-desc',
    title: 'Tardigrades Can Survive in Space',
    desc: 'These microscopic "water bears" can withstand the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C. They are the most resilient animals known to science.',
  },
  {
    id: 'fact2',
    imgId: 'facts-img-mc042',
    titleId: 'facts-f2-title',
    descId: 'facts-f2-desc',
    title: 'Diatoms Build Glass Houses',
    desc: 'Diatoms are single-celled algae that construct intricate shells from silica — the same material as glass. Each species has a unique, ornate pattern that has inspired architects and engineers.',
  },
  {
    id: 'fact3',
    imgId: 'facts-img-mc043',
    titleId: 'facts-f3-title',
    descId: 'facts-f3-desc',
    title: 'Your Body is 50% Microbes',
    desc: 'The human body contains roughly equal numbers of human cells and microbial cells. These microbes are essential for digestion, immunity, and even mental health.',
  },
]

export default function FactsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="facts" className="py-24 md:py-32 px-4 md:px-8 bg-[#0d1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-[#112240] rounded-2xl border border-slate-700/50 hover:border-[#00d4aa]/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-black text-[#00d4aa] mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm leading-snug mb-1">{stat.label}</div>
              <div className="text-xs font-mono tracking-widest uppercase text-slate-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4 block">
            — Fascinating Science —
          </span>
          <h2
            id="facts-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Stranger Than Fiction
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world is full of phenomena that challenge our understanding of life, physics, and the nature of reality itself.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group bg-[#050a14] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-[#00d4aa]/40 hover:shadow-xl hover:shadow-[#00d4aa]/10 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 id={fact.titleId} className="text-white font-bold text-lg mb-3">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-slate-400 text-sm leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
