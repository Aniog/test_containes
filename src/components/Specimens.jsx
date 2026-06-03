import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const specimens = [
  {
    id: 'spec-01',
    titleId: 'spec-title-01',
    descId: 'spec-desc-01',
    imgId: 'spec-img-mc-01',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    desc: 'Known as "water bears," tardigrades are microscopic animals capable of surviving extreme conditions — from the vacuum of space to boiling water. They achieve this through cryptobiosis, entering a death-like state until conditions improve.',
    size: '0.1 – 1.5 mm',
    habitat: 'Moss, lichens, soil',
    discovery: '1773',
    tags: ['Extremophile', 'Invertebrate', 'Cryptobiosis'],
  },
  {
    id: 'spec-02',
    titleId: 'spec-title-02',
    descId: 'spec-desc-02',
    imgId: 'spec-img-mc-02',
    name: 'Vorticella',
    latin: 'Vorticella convallaria',
    desc: 'A bell-shaped protozoan that attaches to surfaces via a long, coiling stalk. Its cilia create water currents to draw in food particles. When disturbed, the stalk contracts rapidly in a spring-like motion.',
    size: '30 – 150 μm',
    habitat: 'Freshwater, sewage',
    discovery: '1676',
    tags: ['Protozoa', 'Ciliate', 'Sessile'],
  },
  {
    id: 'spec-03',
    titleId: 'spec-title-03',
    descId: 'spec-desc-03',
    imgId: 'spec-img-mc-03',
    name: 'Diatom',
    latin: 'Coscinodiscus radiatus',
    desc: 'Diatoms are single-celled algae encased in intricate glass-like shells called frustules. Their geometric precision rivals the finest human engineering. They produce about 20% of the oxygen we breathe.',
    size: '2 – 500 μm',
    habitat: 'Oceans, freshwater',
    discovery: '1703',
    tags: ['Algae', 'Silica shell', 'Photosynthetic'],
  },
  {
    id: 'spec-04',
    titleId: 'spec-title-04',
    descId: 'spec-desc-04',
    imgId: 'spec-img-mc-04',
    name: 'Radiolarian',
    latin: 'Aulacantha scolymantha',
    desc: 'Radiolarians are ocean-dwelling protozoa that produce elaborate mineral skeletons of stunning geometric complexity. Their fossilized remains form thick sediment layers on the ocean floor, providing clues about ancient climates.',
    size: '0.1 – 2 mm',
    habitat: 'Open ocean',
    discovery: '1834',
    tags: ['Protozoa', 'Marine', 'Silica skeleton'],
  },
]

export default function Specimens() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Featured Specimens
          </p>
          <h2
            id="spec-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Remarkable Microorganisms
          </h2>
          <p
            id="spec-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            A closer look at some of the most fascinating creatures in the microscopic world.
          </p>
        </div>

        <div className="space-y-8">
          {specimens.map((spec, index) => (
            <div
              key={spec.id}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-cosmos-border bg-cosmos-card hover:border-cosmos-cyan/40 transition-all duration-300 hover:shadow-glow-cyan ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative h-72 md:h-auto overflow-hidden">
                <img
                  alt={spec.name}
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.descId}] [${spec.titleId}] [spec-section-desc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cosmos-card/30" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="text-cosmos-cyan text-xs font-semibold tracking-widest uppercase mb-2">
                  {spec.latin}
                </div>
                <h3 id={spec.titleId} className="text-cosmos-text text-3xl font-bold mb-4">
                  {spec.name}
                </h3>
                <p id={spec.descId} className="text-cosmos-muted leading-relaxed mb-6 text-sm md:text-base">
                  {spec.desc}
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-cosmos-dim text-xs uppercase tracking-wider mb-1">Size</div>
                    <div className="text-cosmos-text text-sm font-medium">{spec.size}</div>
                  </div>
                  <div>
                    <div className="text-cosmos-dim text-xs uppercase tracking-wider mb-1">Habitat</div>
                    <div className="text-cosmos-text text-sm font-medium">{spec.habitat}</div>
                  </div>
                  <div>
                    <div className="text-cosmos-dim text-xs uppercase tracking-wider mb-1">Discovered</div>
                    <div className="text-cosmos-text text-sm font-medium">{spec.discovery}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-cosmos-cyan/10 text-cosmos-cyan border border-cosmos-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
