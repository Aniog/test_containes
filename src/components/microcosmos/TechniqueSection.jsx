import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-1',
    titleId: 'tech-title-1',
    descId: 'tech-desc-1',
    title: 'Scanning Electron Microscopy',
    desc: 'Scanning electron microscope SEM surface detail specimen',
    abbr: 'SEM',
    body: 'Reveals surface topography at nanometer resolution by scanning a focused electron beam across a specimen.',
    ratio: '16x9',
    width: 600,
  },
  {
    id: 'tech-2',
    titleId: 'tech-title-2',
    descId: 'tech-desc-2',
    title: 'Fluorescence Microscopy',
    desc: 'Fluorescence microscopy glowing cells proteins labeled',
    abbr: 'FM',
    body: 'Uses fluorescent dyes to label specific proteins or structures, making them glow in vivid colors against a dark background.',
    ratio: '16x9',
    width: 600,
  },
  {
    id: 'tech-3',
    titleId: 'tech-title-3',
    descId: 'tech-desc-3',
    title: 'Transmission Electron Microscopy',
    desc: 'Transmission electron microscope TEM cell organelles cross section',
    abbr: 'TEM',
    body: 'Passes electrons through ultra-thin specimens to reveal internal cell structures at atomic resolution.',
    ratio: '16x9',
    width: 600,
  },
]

export default function TechniqueSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="techniques" ref={containerRef} className="py-20 md:py-28 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Imaging Techniques
          </span>
          <h2
            id="tech-heading"
            className="text-3xl md:text-4xl font-bold text-[#f0f8ff]"
          >
            How We See the Unseen
          </h2>
          <p className="text-[#6b8fa8] mt-4 max-w-xl mx-auto">
            Modern microscopy techniques transform invisible structures into stunning visual art.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techniques.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl overflow-hidden border border-[#1e3a4a] bg-[#0d1b2a] hover:border-[#00d4c8]/40 hover:shadow-[0_0_30px_rgba(0,212,200,0.15)] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={t.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={t.id}
                  data-strk-img={`[${t.descId}] [${t.titleId}] [tech-heading]`}
                  data-strk-img-ratio={t.ratio}
                  data-strk-img-width={t.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#00d4c8]/20 border border-[#00d4c8]/40 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#00d4c8]">{t.abbr}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={t.titleId} className="text-lg font-semibold text-[#f0f8ff] mb-2">{t.title}</h3>
                <p id={t.descId} className="sr-only">{t.desc}</p>
                <p className="text-sm text-[#6b8fa8] leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
