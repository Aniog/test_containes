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
    title: 'Bacteria Predate Animals by 3 Billion Years',
    desc: 'Microbial life appeared on Earth approximately 3.8 billion years ago, long before the first multicellular organisms evolved.',
  },
  {
    id: 'fact-02',
    titleId: 'fact-title-02',
    descId: 'fact-desc-02',
    imgId: 'fact-img-mc-02',
    number: '02',
    title: 'Your Body Hosts 38 Trillion Bacteria',
    desc: 'The human microbiome contains roughly as many bacterial cells as human cells, forming a complex ecosystem essential to health.',
  },
  {
    id: 'fact-03',
    titleId: 'fact-title-03',
    descId: 'fact-desc-03',
    imgId: 'fact-img-mc-03',
    number: '03',
    title: 'Tardigrades Survive in Space',
    desc: 'These microscopic animals can withstand extreme radiation, vacuum, and temperatures from -272°C to 150°C.',
  },
  {
    id: 'fact-04',
    titleId: 'fact-title-04',
    descId: 'fact-desc-04',
    imgId: 'fact-img-mc-04',
    number: '04',
    title: 'Viruses Outnumber Stars in the Universe',
    desc: 'There are an estimated 10³¹ viruses on Earth — more than all the stars in the observable universe combined.',
  },
]

export default function FactsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="facts" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Mind-Blowing Facts
          </p>
          <h2
            id="facts-section-title"
            className="text-4xl md:text-5xl font-bold text-sky-50 mb-4"
          >
            The Numbers Are Staggering
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            The microscopic world operates at scales that challenge human comprehension.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group flex gap-6 rounded-2xl overflow-hidden border border-[#00d4aa]/10 hover:border-[#00d4aa]/30 bg-[#0d1f2d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)]"
            >
              {/* Image */}
              <div className="relative w-36 flex-shrink-0 overflow-hidden">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1f2d]/40" />
              </div>

              {/* Content */}
              <div className="py-6 pr-6 flex flex-col justify-center">
                <span className="text-4xl font-black text-[#00d4aa]/20 leading-none mb-2">
                  {fact.number}
                </span>
                <h3 id={fact.titleId} className="text-sky-50 font-bold text-lg leading-tight mb-2">
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
