import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const wonders = [
  {
    id: 'wonder-1',
    titleId: 'wonder-title-1',
    subtitleId: 'wonder-sub-1',
    title: 'Tardigrade',
    subtitle: 'The Indestructible Water Bear',
    desc: 'Tardigrades can survive in outer space, withstand radiation 1,000× lethal to humans, and endure temperatures from -272°C to 150°C. They enter cryptobiosis — a state of suspended animation — to outlast any catastrophe.',
    imgRatio: '16x9',
    imgWidth: 1200,
  },
  {
    id: 'wonder-2',
    titleId: 'wonder-title-2',
    subtitleId: 'wonder-sub-2',
    title: 'Bioluminescent Bacteria',
    subtitle: 'Living Light in the Deep',
    desc: 'Certain marine bacteria produce cold light through chemical reactions, illuminating the deep ocean in ghostly blue-green hues. This phenomenon, called bioluminescence, is used for communication, predation, and camouflage.',
    imgRatio: '16x9',
    imgWidth: 1200,
  },
]

export default function WondersSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Extraordinary Organisms</p>
          <h2 id="wonders-heading" className="text-4xl md:text-5xl font-black text-slate-50 mb-4">
            Wonders of the Microcosmos
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Some microscopic organisms defy all expectations — surviving the impossible and illuminating the darkness.
          </p>
        </div>

        <div className="space-y-8">
          {wonders.map((wonder) => (
            <div
              key={wonder.id}
              className="group relative rounded-2xl overflow-hidden border border-[#00d4c8]/20 hover:border-[#00d4c8]/40 transition-all duration-300"
            >
              <img
                alt={wonder.title}
                className="w-full object-cover max-h-[480px] group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`${wonder.id}-img-mc`}
                data-strk-img={`[${wonder.subtitleId}] [${wonder.titleId}] [wonders-heading]`}
                data-strk-img-ratio={wonder.imgRatio}
                data-strk-img-width={wonder.imgWidth}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/90 via-[#050d1a]/50 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-lg">
                  <p id={wonder.subtitleId} className="text-xs text-[#00d4c8] uppercase tracking-widest mb-2">{wonder.subtitle}</p>
                  <h3 id={wonder.titleId} className="text-3xl md:text-4xl font-black text-slate-50 mb-4">{wonder.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{wonder.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
