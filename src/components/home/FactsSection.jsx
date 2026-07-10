import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Zap, Eye, Layers, Atom } from 'lucide-react'

const facts = [
  {
    icon: Zap,
    title: 'Trillions of Cells',
    description: 'The human body contains approximately 37.2 trillion cells, each performing specialized functions.',
  },
  {
    icon: Eye,
    title: '0.2 Micrometers',
    description: 'The smallest bacteria are just 0.2 micrometers — 500 times thinner than a human hair.',
  },
  {
    icon: Layers,
    title: 'Ancient Life',
    description: 'Microorganisms have existed for 3.5 billion years — the oldest life forms on Earth.',
  },
  {
    icon: Atom,
    title: '10 Million Species',
    description: 'Scientists estimate there are over 10 million microbial species, most still undiscovered.',
  },
]

const FactsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="facts-bg-a1b2c3"
        data-strk-bg="[facts-section-subtitle] [facts-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.15 }}
      />
      <div className="absolute inset-0 bg-deep/90 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="facts-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Fascinating Facts
          </h2>
          <p id="facts-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            The microscopic world holds secrets that challenge our understanding of life itself
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.title}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{fact.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{fact.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FactsSection
