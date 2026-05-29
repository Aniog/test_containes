import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ecosystems = [
  {
    id: 'eco-mc030',
    titleId: 'eco-t1',
    descId: 'eco-d1',
    title: 'Ocean Depths',
    desc: 'Deep ocean bioluminescent microorganisms plankton',
    body: 'The deep ocean teems with bioluminescent bacteria and archaea that thrive under crushing pressure and total darkness.',
    color: 'from-blue-900/80',
    tag: 'Marine',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    id: 'eco-mc031',
    titleId: 'eco-t2',
    descId: 'eco-d2',
    title: 'Forest Soil',
    desc: 'Forest soil microbiome fungi bacteria roots',
    body: 'A single gram of forest soil contains up to a billion bacteria and thousands of fungal species forming a living web.',
    color: 'from-emerald-900/80',
    tag: 'Terrestrial',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 'eco-mc032',
    titleId: 'eco-t3',
    descId: 'eco-d3',
    title: 'Hot Springs',
    desc: 'Thermophilic bacteria hot spring colorful extremophile',
    body: 'Extremophile bacteria paint hot springs in vivid colors, thriving in temperatures that would destroy most life.',
    color: 'from-orange-900/80',
    tag: 'Extreme',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
]

export default function EcosystemSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4 block">Ecosystems</span>
          <h2 id="eco-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microscopic Habitats
          </h2>
          <p id="eco-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From scalding hot springs to the frozen Arctic, microscopic life colonizes every corner of our planet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {ecosystems.map((eco) => (
            <div key={eco.id} className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  alt={eco.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={eco.id}
                  data-strk-img={`[${eco.descId}] [${eco.titleId}] [eco-subtitle] [eco-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width={600}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${eco.color} via-transparent to-transparent`} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-block border rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-widest mb-3 ${eco.tagColor}`}>
                  {eco.tag}
                </span>
                <h3 id={eco.titleId} className="text-white font-bold text-2xl mb-2">{eco.title}</h3>
                <p id={eco.descId} className="text-slate-300 text-sm leading-relaxed">{eco.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
