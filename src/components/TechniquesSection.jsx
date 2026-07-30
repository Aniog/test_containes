import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-sem',
    titleId: 'tech-title-sem',
    descId: 'tech-desc-sem',
    imgId: 'tech-img-mc-sem',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Produces detailed 3D surface images by scanning with a focused beam of electrons. Reveals textures invisible to light microscopes.',
    resolution: '1–20 nm',
  },
  {
    id: 'tech-tem',
    titleId: 'tech-title-tem',
    descId: 'tech-desc-tem',
    imgId: 'tech-img-mc-tem',
    title: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Transmits electrons through ultra-thin specimens to reveal internal cellular structures at atomic resolution.',
    resolution: '0.05–0.1 nm',
  },
  {
    id: 'tech-confocal',
    titleId: 'tech-title-confocal',
    descId: 'tech-desc-confocal',
    imgId: 'tech-img-mc-confocal',
    title: 'Confocal Fluorescence',
    abbr: 'CLSM',
    desc: 'Uses laser light and fluorescent dyes to create sharp optical sections through living cells, enabling 3D reconstruction.',
    resolution: '200–300 nm',
  },
  {
    id: 'tech-afm',
    titleId: 'tech-title-afm',
    descId: 'tech-desc-afm',
    imgId: 'tech-img-mc-afm',
    title: 'Atomic Force Microscopy',
    abbr: 'AFM',
    desc: 'A nanoscale probe physically scans surfaces to map topography at atomic resolution, even in liquid environments.',
    resolution: '0.1–1 nm',
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="techniques" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">
            How We See the Invisible
          </p>
          <h2 id="techniques-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microscopy Techniques
          </h2>
          <p id="techniques-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Modern science has developed extraordinary tools to peer into the microscopic realm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-subtitle] [techniques-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-2 py-1 rounded-md">
                    {tech.abbr}
                  </span>
                  <span className="text-xs text-gray-500">Res: {tech.resolution}</span>
                </div>
                <h3 id={tech.titleId} className="text-white font-bold text-base mb-2 leading-snug">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-gray-400 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
