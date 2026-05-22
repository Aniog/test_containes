import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  { num: '01', title: 'Gut Microbiome', desc: 'Your gut contains 38 trillion bacteria — more than the total number of human cells in your body.', imgDesc: 'gut microbiome bacteria intestine illustration' },
  { num: '02', title: 'Soil Ecosystem', desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.', imgDesc: 'soil microorganism ecosystem microscope' },
  { num: '03', title: 'Ocean Microbes', desc: 'Marine microbes produce half of the oxygen in Earth\'s atmosphere through photosynthesis.', imgDesc: 'ocean phytoplankton marine microbe microscope' },
  { num: '04', title: 'Extremophiles', desc: 'Certain archaea thrive in conditions once thought impossible — boiling acid, crushing pressure, pure radiation.', imgDesc: 'extremophile archaea hot spring hydrothermal vent' },
]

export default function FactsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="facts" ref={containerRef} className="py-20 md:py-28 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Did You Know?
          </span>
          <h2
            id="facts-heading"
            className="text-3xl md:text-4xl font-bold text-[#f0f8ff]"
          >
            Astonishing Microbial Facts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((f, i) => {
            const imgId = `fact-img-${i + 1}x${i + 2}y`
            const titleId = `fact-title-${i + 1}`
            const descId = `fact-desc-${i + 1}`
            return (
              <div
                key={f.num}
                className="group flex gap-5 rounded-2xl overflow-hidden border border-[#1e3a4a] bg-[#050a0e] hover:border-[#00d4c8]/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.1)] transition-all duration-300 p-0"
              >
                <div className="relative w-32 md:w-40 flex-shrink-0 overflow-hidden">
                  <img
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}] [facts-heading]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050a0e]" />
                </div>
                <div className="flex-1 py-6 pr-6 flex flex-col justify-center">
                  <span className="text-3xl font-extrabold text-[#1e3a4a] mb-2 block">{f.num}</span>
                  <h3 id={titleId} className="text-base font-semibold text-[#f0f8ff] mb-2">{f.title}</h3>
                  <p id={descId} className="text-sm text-[#6b8fa8] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
