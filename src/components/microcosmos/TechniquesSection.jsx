import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-01',
    imgId: 'tech-img-mc050',
    name: 'Light Microscopy',
    desc: 'The foundation of microscopy — using visible light and lenses to magnify specimens up to 1,500×.',
  },
  {
    id: 'tech-02',
    imgId: 'tech-img-mc051',
    name: 'Electron Microscopy',
    desc: 'Beams of electrons replace light, enabling magnifications of over 10,000,000× and atomic-level resolution.',
  },
  {
    id: 'tech-03',
    imgId: 'tech-img-mc052',
    name: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins illuminate specific structures, turning cells into glowing works of art.',
  },
  {
    id: 'tech-04',
    imgId: 'tech-img-mc053',
    name: 'Confocal Microscopy',
    desc: 'Laser scanning builds precise 3D reconstructions of biological specimens with extraordinary clarity.',
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f59e0b] text-sm font-medium tracking-widest uppercase mb-3">How We See</p>
          <h2 id="tech-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microscopy Techniques
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern science has developed remarkable tools to peer into the invisible world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="flex gap-5 bg-[#0d1f2d] border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-[#f59e0b]/40 transition-all duration-300"
            >
              <div className="w-40 flex-shrink-0 overflow-hidden">
                <img
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.id}-desc] [${tech.id}-name] [tech-heading]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 id={`${tech.id}-name`} className="text-white font-bold text-xl mb-3">{tech.name}</h3>
                <p id={`${tech.id}-desc`} className="text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
