import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-mc050',
    titleId: 'tech-t1',
    descId: 'tech-d1',
    title: 'Electron Microscopy',
    desc: 'Scanning electron microscope SEM surface detail',
    body: 'SEM reveals surface textures at nanometer resolution, producing the iconic grey-scale images of microscopic life.',
    ratio: '16x9',
    w: 600,
  },
  {
    id: 'tech-mc051',
    titleId: 'tech-t2',
    descId: 'tech-d2',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescence confocal microscopy cell organelles colorful',
    body: 'Fluorescent dyes tag specific molecules, painting cells in vivid colors to reveal their inner workings.',
    ratio: '16x9',
    w: 600,
  },
  {
    id: 'tech-mc052',
    titleId: 'tech-t3',
    descId: 'tech-d3',
    title: 'Phase Contrast',
    desc: 'Phase contrast microscopy living cells transparent',
    body: 'Phase contrast allows scientists to observe living, unstained cells in real time without harming them.',
    ratio: '16x9',
    w: 600,
  },
  {
    id: 'tech-mc053',
    titleId: 'tech-t4',
    descId: 'tech-d4',
    title: 'Cryo-Electron Tomography',
    desc: 'Cryo electron tomography 3D protein structure',
    body: 'Cryo-ET freezes samples in vitreous ice, enabling 3D reconstruction of molecular machines at atomic resolution.',
    ratio: '16x9',
    w: 600,
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Science & Technology</span>
          <h2 id="tech-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We See the Invisible
          </h2>
          <p id="tech-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern microscopy techniques have transformed our ability to visualize and understand the microscopic world in stunning detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {techniques.map((t, i) => (
            <div key={t.id} className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors">
              <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'} md:w-2/5 overflow-hidden`}>
                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                  <img
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    data-strk-img-id={t.id}
                    data-strk-img={`[${t.descId}] [${t.titleId}] [tech-subtitle] [tech-title]`}
                    data-strk-img-ratio={t.ratio}
                    data-strk-img-width={t.w}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'} md:w-3/5 p-6 flex flex-col justify-center`}>
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2 block">Technique {i + 1}</span>
                <h3 id={t.titleId} className="text-white font-bold text-xl mb-3">{t.title}</h3>
                <p id={t.descId} className="text-slate-400 text-sm leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
