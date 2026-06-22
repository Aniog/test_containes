import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    id: 'fact-bacteria',
    title: 'Bacteria in Your Body',
    desc: 'Your body hosts approximately 38 trillion bacteria, outnumbering human cells',
    imgId: 'fact-bacteria-q9r1s3',
    titleId: 'fact-bacteria-title',
    descId: 'fact-bacteria-desc',
    stat: '38T',
    statLabel: 'Bacteria',
  },
  {
    id: 'fact-ocean',
    title: 'Ocean Microbes',
    desc: 'A single liter of seawater contains over one billion microorganisms',
    imgId: 'fact-ocean-t5u7v9',
    titleId: 'fact-ocean-title',
    descId: 'fact-ocean-desc',
    stat: '1B+',
    statLabel: 'Per Liter',
  },
  {
    id: 'fact-soil',
    title: 'Soil Biodiversity',
    desc: 'One teaspoon of healthy soil contains more organisms than people on Earth',
    imgId: 'fact-soil-w2x4y6',
    titleId: 'fact-soil-title',
    descId: 'fact-soil-desc',
    stat: '8B+',
    statLabel: 'Per Teaspoon',
  },
]

const FactsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            Mind-Blowing Facts
          </p>
          <h2
            id="facts-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Numbers That Astound
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world operates at scales that challenge our imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[3/4]">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-4xl font-extrabold text-emerald-400 mb-1">{fact.stat}</p>
                <p className="text-sm text-emerald-300/70 mb-3">{fact.statLabel}</p>
                <h3 id={fact.titleId} className="text-lg font-semibold text-white mb-1">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-slate-300 text-sm">
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

export default FactsSection
