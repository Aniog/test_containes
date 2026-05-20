import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-1',
    titleId: 'tech-title-1',
    subtitleId: 'tech-sub-1',
    title: 'Scanning Electron Microscopy',
    subtitle: 'SEM Imaging',
    desc: 'Produces detailed 3D surface images by scanning with a focused beam of electrons, revealing textures invisible to light microscopes.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
  {
    id: 'tech-2',
    titleId: 'tech-title-2',
    subtitleId: 'tech-sub-2',
    title: 'Fluorescence Microscopy',
    subtitle: 'Fluorescent Labeling',
    desc: 'Uses fluorescent dyes to label specific cellular structures, creating vivid, colorful images of living cells in action.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
  {
    id: 'tech-3',
    titleId: 'tech-title-3',
    subtitleId: 'tech-sub-3',
    title: 'Cryo-Electron Tomography',
    subtitle: 'Cryo-ET',
    desc: 'Flash-freezes specimens to preserve their native state, then reconstructs 3D molecular structures at near-atomic resolution.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Scientific Methods</p>
          <h2 id="tech-heading" className="text-4xl md:text-5xl font-black text-slate-50 mb-4">
            How We See the Invisible
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Modern microscopy techniques have transformed our ability to visualize and understand the microscopic world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group bg-[#0d1f3c] rounded-2xl overflow-hidden border border-[#00d4c8]/20 hover:border-[#00d4c8]/50 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  alt={tech.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`${tech.id}-img-mc`}
                  data-strk-img={`[${tech.subtitleId}] [${tech.titleId}] [tech-heading]`}
                  data-strk-img-ratio={tech.imgRatio}
                  data-strk-img-width={tech.imgWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                />
              </div>
              <div className="p-6">
                <p id={tech.subtitleId} className="text-xs text-[#00d4c8] uppercase tracking-widest mb-2">{tech.subtitle}</p>
                <h3 id={tech.titleId} className="text-lg font-bold text-slate-50 mb-3">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
