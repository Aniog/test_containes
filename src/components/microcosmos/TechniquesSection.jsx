import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-1',
    titleId: 'tech-t1',
    descId: 'tech-d1',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Reveals surface topography at nanometer resolution by scanning a focused beam of electrons across a specimen.',
    imgId: 'tech-img-mc001',
  },
  {
    id: 'tech-2',
    titleId: 'tech-t2',
    descId: 'tech-d2',
    title: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Uses fluorescent dyes to illuminate specific structures within cells, creating vivid, colorful maps of biological activity.',
    imgId: 'tech-img-mc002',
  },
  {
    id: 'tech-3',
    titleId: 'tech-t3',
    descId: 'tech-d3',
    title: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Passes electrons through ultra-thin specimens to reveal internal structures at atomic resolution.',
    imgId: 'tech-img-mc003',
  },
  {
    id: 'tech-4',
    titleId: 'tech-t4',
    descId: 'tech-d4',
    title: 'Confocal Laser Scanning',
    abbr: 'CLSM',
    desc: 'Builds 3D images of living specimens by capturing optical sections at different depths with laser precision.',
    imgId: 'tech-img-mc004',
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="techniques" ref={containerRef} className="bg-[#050d12] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Imaging Techniques
          </p>
          <h2
            id="techniques-title"
            className="text-3xl md:text-4xl font-bold text-[#f0faf8] mb-4"
          >
            How We See the Invisible
          </h2>
          <p
            id="techniques-subtitle"
            className="text-[#94b8b0] max-w-2xl mx-auto"
          >
            Modern microscopy has transformed our ability to visualize life at scales once unimaginable, turning science into art.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((t) => (
            <div
              key={t.id}
              className="group bg-[#0d2233] border border-[rgba(0,212,170,0.15)] rounded-2xl overflow-hidden hover:border-[#00d4aa]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)]"
            >
              <div className="relative aspect-[3x4] overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.descId}] [${t.titleId}] [techniques-subtitle] [techniques-title]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width={400}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233] via-[#0d2233]/20 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-black tracking-widest text-[#00d4aa] bg-[#050d12]/80 px-2 py-1 rounded">
                  {t.abbr}
                </div>
              </div>
              <div className="p-5">
                <h3 id={t.titleId} className="text-base font-semibold text-[#f0faf8] mb-2 leading-snug">
                  {t.title}
                </h3>
                <p id={t.descId} className="text-sm text-[#94b8b0] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
