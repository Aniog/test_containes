import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    id: 'bacteria',
    number: '39 Trillion',
    label: 'Bacteria in your body',
    desc: 'More bacterial cells than human cells inhabit your body forming a complex microbiome ecosystem',
    imgId: 'fact-bacteria-3c8a2f',
  },
  {
    id: 'plankton',
    number: '50%',
    label: "Earth's oxygen from plankton",
    desc: 'Microscopic phytoplankton in the ocean produce half of all the oxygen we breathe',
    imgId: 'fact-plankton-7e1d5b',
  },
  {
    id: 'virus',
    number: '10³¹',
    label: 'Viruses on Earth',
    desc: 'If lined up end to end they would stretch across 100 million light years of space',
    imgId: 'fact-virus-9a4c6e',
  },
  {
    id: 'cell',
    number: '37.2 Trillion',
    label: 'Cells in the human body',
    desc: 'Each one a microscopic factory performing thousands of chemical reactions every second',
    imgId: 'fact-cell-5b2e8d',
  },
]

const FactsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Did You Know?
          </p>
          <h2 id="facts-section-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Mind-Blowing Micro Facts
          </h2>
          <p id="facts-section-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
            The microscopic world is full of astonishing numbers and incredible phenomena
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-border-subtle bg-deep-dark p-6 md:p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-full sm:w-40 h-40 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  alt={fact.label}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[fact-${fact.id}-desc] [fact-${fact.id}-label] [facts-section-subtitle] [facts-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-3xl md:text-4xl font-extrabold text-accent mb-1">
                  {fact.number}
                </p>
                <h3 id={`fact-${fact.id}-label`} className="text-lg font-semibold text-text-primary mb-2">
                  {fact.label}
                </h3>
                <p id={`fact-${fact.id}-desc`} className="text-text-secondary text-sm leading-relaxed">
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
