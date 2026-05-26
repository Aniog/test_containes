import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ecosystems = [
  { id: 'eco-ocean', label: 'Ocean', imgId: 'eco-img-mc050', query: 'ocean microscopic plankton bioluminescent blue', ratio: '3x4' },
  { id: 'eco-soil', label: 'Soil', imgId: 'eco-img-mc051', query: 'soil microbes fungi mycelium microscope', ratio: '3x4' },
  { id: 'eco-air', label: 'Air', imgId: 'eco-img-mc052', query: 'airborne pollen spores microscope colorful', ratio: '3x4' },
  { id: 'eco-body', label: 'Human Body', imgId: 'eco-img-mc053', query: 'human body microbiome bacteria cells colorful', ratio: '3x4' },
  { id: 'eco-ice', label: 'Ice & Snow', imgId: 'eco-img-mc054', query: 'ice snow crystal microscope macro colorful', ratio: '3x4' },
]

export default function EcosystemsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
            Habitats
          </span>
          <h2 id="eco-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-4">
            Microbial Ecosystems
          </h2>
          <p id="eco-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Microorganisms colonize every corner of our planet — from the deepest ocean trenches to the highest mountain peaks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {ecosystems.map((eco) => (
            <div key={eco.id} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              <img
                alt={eco.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={eco.imgId}
                data-strk-img={`${eco.query} [eco-desc] [eco-title]`}
                data-strk-img-ratio={eco.ratio}
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span id={eco.id} className="text-sky-50 font-bold text-sm block">{eco.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
