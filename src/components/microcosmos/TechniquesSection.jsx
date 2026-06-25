import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'sem',
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Creates detailed 3D surface images by scanning with a focused beam of electrons. Reveals textures invisible to light.',
    res: '1–20 nm',
    titleId: 'tech-sem-title',
    descId: 'tech-sem-desc',
    imgId: 'tech-img-sem-mc050',
    color: 'cyan',
  },
  {
    id: 'tem',
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Passes electrons through ultra-thin specimens to reveal internal structures at near-atomic resolution.',
    res: '0.05–0.2 nm',
    titleId: 'tech-tem-title',
    descId: 'tech-tem-desc',
    imgId: 'tech-img-tem-mc051',
    color: 'teal',
  },
  {
    id: 'confocal',
    name: 'Confocal Laser Microscopy',
    abbr: 'CLSM',
    desc: 'Uses laser light and fluorescent dyes to create sharp optical sections through biological specimens.',
    res: '200–500 nm',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
    imgId: 'tech-img-confocal-mc052',
    color: 'purple',
  },
]

const TechniquesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#050810] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs font-mono tracking-widest uppercase mb-4">How We See the Invisible</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Microscopy Techniques</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The tools that unlock the microscopic world, each revealing a different dimension of the invisible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className={`group bg-slate-900/60 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tech.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/10' :
                tech.color === 'teal' ? 'border-teal-500/20 hover:border-teal-500/50 hover:shadow-teal-500/10' :
                'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/10'
              }`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={tech.name}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className={`absolute top-4 left-4 text-2xl font-black font-mono ${
                  tech.color === 'cyan' ? 'text-cyan-400' :
                  tech.color === 'teal' ? 'text-teal-400' : 'text-purple-400'
                }`}>
                  {tech.abbr}
                </div>
              </div>
              <div className="p-6">
                <h3 id={tech.titleId} className="text-white font-semibold text-lg mb-3">{tech.name}</h3>
                <p id={tech.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{tech.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Resolution:</span>
                  <span className={`text-xs font-mono font-semibold ${
                    tech.color === 'cyan' ? 'text-cyan-400' :
                    tech.color === 'teal' ? 'text-teal-400' : 'text-purple-400'
                  }`}>{tech.res}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechniquesSection
