import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    id: 'fact-01',
    titleId: 'fact-title-01',
    descId: 'fact-desc-01',
    imgId: 'fact-img-mc-01',
    number: '01',
    title: 'You Are Mostly Microbes',
    desc: 'The human body contains roughly 38 trillion bacteria — about the same number as human cells. Most live in the gut and are essential for digestion, immunity, and even mood regulation.',
    highlight: '38 Trillion',
    highlightLabel: 'bacteria in your body',
  },
  {
    id: 'fact-02',
    titleId: 'fact-title-02',
    descId: 'fact-desc-02',
    imgId: 'fact-img-mc-02',
    number: '02',
    title: 'Bacteria Predate Animals by Billions of Years',
    desc: 'Microbial life appeared on Earth approximately 3.8 billion years ago. Complex multicellular animals didn\'t emerge until about 600 million years ago — meaning bacteria had a 3.2 billion year head start.',
    highlight: '3.8 Billion',
    highlightLabel: 'years of microbial history',
  },
  {
    id: 'fact-03',
    titleId: 'fact-title-03',
    descId: 'fact-desc-03',
    imgId: 'fact-img-mc-03',
    number: '03',
    title: 'Microbes Produce Half Our Oxygen',
    desc: 'Phytoplankton and cyanobacteria in the ocean produce approximately 50% of the oxygen in Earth\'s atmosphere through photosynthesis. Without these microscopic organisms, complex life as we know it would be impossible.',
    highlight: '50%',
    highlightLabel: 'of Earth\'s oxygen from microbes',
  },
]

export default function Facts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="facts" ref={containerRef} className="bg-cosmos-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Did You Know?
          </p>
          <h2
            id="facts-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Mind-Bending Micro Facts
          </h2>
          <p
            id="facts-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            The microscopic world is full of surprises that challenge our understanding of life itself.
          </p>
        </div>

        <div className="space-y-12">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`grid md:grid-cols-5 gap-8 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image — 2 cols */}
              <div className="md:col-span-2 rounded-2xl overflow-hidden border border-cosmos-border shadow-glow-teal">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-desc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text — 3 cols */}
              <div className="md:col-span-3">
                <div className="text-cosmos-dim text-6xl font-black leading-none mb-4 select-none">
                  {fact.number}
                </div>
                <h3 id={fact.titleId} className="text-cosmos-text text-2xl md:text-3xl font-bold mb-4">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-cosmos-muted leading-relaxed mb-6">
                  {fact.desc}
                </p>
                <div className="inline-flex flex-col border-l-4 border-cosmos-cyan pl-5">
                  <span className="text-cosmos-cyan text-3xl font-black">{fact.highlight}</span>
                  <span className="text-cosmos-muted text-sm mt-1">{fact.highlightLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
