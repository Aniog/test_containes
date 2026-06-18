import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-01', imgId: 'tech-img-mc050', titleId: 'tech-title-01', descId: 'tech-desc-01',
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of a specimen, producing detailed 3D-like images of surface topology.',
    resolution: '1–20 nm',
  },
  {
    id: 'tech-02', imgId: 'tech-img-mc051', titleId: 'tech-title-02', descId: 'tech-desc-02',
    name: 'Confocal Laser Microscopy',
    abbr: 'CLM',
    desc: 'Uses laser light and spatial filtering to eliminate out-of-focus light, enabling sharp optical sections through fluorescently labeled specimens.',
    resolution: '200 nm',
  },
  {
    id: 'tech-03', imgId: 'tech-img-mc052', titleId: 'tech-title-03', descId: 'tech-desc-03',
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Transmits electrons through ultra-thin specimens to reveal internal ultrastructure at near-atomic resolution.',
    resolution: '0.05 nm',
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">How We See</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Imaging Techniques</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            The tools and methods scientists use to peer into the invisible world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((t) => (
            <div
              key={t.id}
              className="group bg-[#0f1f38] border border-teal-900/40 hover:border-teal-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(20,184,166,0.12)]"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  alt={t.name}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.descId}] [${t.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                <div className="absolute top-3 left-3 bg-[#050d1a]/80 border border-teal-500/40 text-teal-300 text-sm font-black px-3 py-1 rounded-lg">
                  {t.abbr}
                </div>
              </div>
              <div className="p-6">
                <h3 id={t.titleId} className="text-white font-bold text-lg mb-2">{t.name}</h3>
                <p id={t.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">Resolution:</span>
                  <span className="text-cyan-300 text-sm font-bold">{t.resolution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
