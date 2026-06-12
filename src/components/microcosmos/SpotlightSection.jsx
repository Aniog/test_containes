import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const spotlights = [
  {
    id: 'spot-ocean',
    imgId: 'spotlight-img-mc040',
    title: 'Ocean Microbiome',
    desc: 'The ocean\'s invisible ecosystem — phytoplankton, zooplankton, and marine bacteria that form the base of all aquatic food chains.',
    tag: 'Marine Biology',
  },
  {
    id: 'spot-soil',
    imgId: 'spotlight-img-mc041',
    title: 'Soil Microbiome',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
    tag: 'Ecology',
  },
  {
    id: 'spot-gut',
    imgId: 'spotlight-img-mc042',
    title: 'Human Gut Flora',
    desc: 'Trillions of bacteria living in our digestive system influence immunity, mood, and metabolism in ways science is only beginning to understand.',
    tag: 'Human Biology',
  },
]

export default function SpotlightSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="spotlight" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Ecosystem Spotlight</span>
          <h2 id="spotlight-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Microbiomes of Our World
          </h2>
          <p id="spotlight-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Microscopic communities that silently sustain all life on our planet.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {spotlights.map((item, i) => (
            <div
              key={item.id}
              className={`group flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-title] [spotlight-subtitle] [spotlight-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-400/10" />
              </div>
              <div className="w-full md:w-1/2 px-0 md:px-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 id={`${item.id}-title`} className="mt-4 text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                <p id={`${item.id}-desc`} className="mt-4 text-slate-400 text-base leading-relaxed">{item.desc}</p>
                <a href="#gallery" className="mt-6 inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
                  Explore in Gallery →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
