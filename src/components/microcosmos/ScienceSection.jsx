import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-sem',
    imgId: 'science-img-mc030',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of a sample, producing detailed 3D-like images with extraordinary depth of field.',
    resolution: '1–20 nm',
    color: 'cyan',
  },
  {
    id: 'tech-fluorescence',
    imgId: 'science-img-mc031',
    title: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Fluorescent dyes or proteins label specific cellular structures, which then glow under UV light to reveal their location and behavior.',
    resolution: '200 nm',
    color: 'violet',
  },
  {
    id: 'tech-confocal',
    imgId: 'science-img-mc032',
    title: 'Confocal Laser Scanning',
    abbr: 'CLSM',
    desc: 'Eliminates out-of-focus light to produce sharp optical sections through thick specimens, enabling 3D reconstruction of cells and tissues.',
    resolution: '180 nm',
    color: 'emerald',
  },
]

export default function ScienceSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">The Science</span>
          <h2 id="science-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            How We See the Invisible
          </h2>
          <p id="science-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Modern microscopy techniques push the boundaries of human vision, revealing structures smaller than a wavelength of light.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group bg-[#050d1a] border border-cyan-900/30 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.id}-desc] [${tech.id}-title] [science-subtitle] [science-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                    tech.color === 'cyan' ? 'bg-cyan-400 text-[#050d1a]' :
                    tech.color === 'violet' ? 'bg-violet-500 text-white' :
                    'bg-emerald-500 text-[#050d1a]'
                  }`}>
                    {tech.abbr}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={`${tech.id}-title`} className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p id={`${tech.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-4">{tech.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Resolution:</span>
                  <span className={`text-xs font-bold ${
                    tech.color === 'cyan' ? 'text-cyan-400' :
                    tech.color === 'violet' ? 'text-violet-400' :
                    'text-emerald-400'
                  }`}>{tech.resolution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10,000×', label: 'Max Magnification' },
            { value: '1 nm', label: 'Smallest Resolution' },
            { value: '8.7M', label: 'Microbial Species' },
            { value: '37T', label: 'Cells in Human Body' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#050d1a] border border-cyan-900/30 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
