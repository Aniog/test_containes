import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  { number: '8.7M', label: 'Estimated species on Earth' },
  { number: '99%', label: 'Of life is microscopic' },
  { number: '3.5B', label: 'Years of microbial evolution' },
  { number: '39T', label: 'Bacteria in your body' },
]

const techniques = [
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    desc: 'Uses fluorescent dyes to illuminate specific cellular structures, creating vivid colorful images of living cells',
    imgId: 'tech-img-flu2k7',
    titleId: 'tech-fluorescence-title',
    descId: 'tech-fluorescence-desc',
  },
  {
    id: 'electron',
    title: 'Electron Microscopy',
    desc: 'Achieves magnification up to 10 million times, revealing atomic-level detail of biological specimens',
    imgId: 'tech-img-ele5m3',
    titleId: 'tech-electron-title',
    descId: 'tech-electron-desc',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    desc: 'Creates sharp 3D images by scanning specimens point-by-point with focused laser light',
    imgId: 'tech-img-con8p1',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
  },
]

const FactsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 md:mb-32">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="text-center p-6 rounded-2xl border border-cosmos-border bg-cosmos-card/50"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-cosmos-cyan mb-2">
                {fact.number}
              </p>
              <p className="text-cosmos-muted text-sm md:text-base">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        {/* Techniques */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cosmos-purple font-medium text-sm uppercase tracking-widest mb-3">
            Imaging Techniques
          </p>
          <h2
            id="techniques-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-4"
          >
            How We See the Unseen
          </h2>
          <p
            id="techniques-section-subtitle"
            className="text-cosmos-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            Modern microscopy techniques allow us to peer deeper into the microscopic world than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-purple/40 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-cosmos-card">
                <h3 id={tech.titleId} className="font-heading text-lg font-semibold text-cosmos-text mb-2">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {tech.desc}
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
