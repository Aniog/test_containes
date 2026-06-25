import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    desc: 'Using fluorescent dyes to illuminate specific cellular structures with vivid colors',
    imgId: 'tech-fluorescence-n4o5p6',
    titleId: 'tech-fluorescence-title',
    descId: 'tech-fluorescence-desc',
  },
  {
    id: 'electron',
    title: 'Electron Microscopy',
    desc: 'Achieving nanometer resolution by using electron beams instead of light',
    imgId: 'tech-electron-q7r8s9',
    titleId: 'tech-electron-title',
    descId: 'tech-electron-desc',
  },
  {
    id: 'darkfield',
    title: 'Dark Field Imaging',
    desc: 'Illuminating specimens against a dark background to reveal transparent structures',
    imgId: 'tech-darkfield-t1u2v3',
    titleId: 'tech-darkfield-title',
    descId: 'tech-darkfield-desc',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    desc: 'Creating sharp 3D images by scanning specimens point by point with laser light',
    imgId: 'tech-confocal-w4x5y6',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
  },
  {
    id: 'phase',
    title: 'Phase Contrast',
    desc: 'Visualizing transparent living cells without staining by converting phase shifts to brightness',
    imgId: 'tech-phase-z7a8b9',
    titleId: 'tech-phase-title',
    descId: 'tech-phase-desc',
  },
  {
    id: 'polarized',
    title: 'Polarized Light',
    desc: 'Revealing crystal structures and birefringent materials with stunning rainbow patterns',
    imgId: 'tech-polarized-c1d2e3',
    titleId: 'tech-polarized-title',
    descId: 'tech-polarized-desc',
  },
]

const TechniquesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Imaging Techniques</p>
          <h2 id="techniques-section-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Tools of Discovery
          </h2>
          <p id="techniques-section-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            Advanced microscopy methods that transform invisible worlds into breathtaking visual experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-violet-500/40 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={tech.titleId} className="text-lg font-bold text-white mb-1">{tech.title}</h3>
                <p id={tech.descId} className="text-sm text-slate-300 leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechniquesSection
