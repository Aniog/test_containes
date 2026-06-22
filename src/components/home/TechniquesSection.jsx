import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    desc: 'Using fluorescent dyes and proteins to illuminate specific cellular structures with vivid colors',
    imgId: 'tech-img-flu-k1l2m3',
    titleId: 'tech-fluorescence-title',
    descId: 'tech-fluorescence-desc',
  },
  {
    id: 'electron',
    title: 'Electron Microscopy',
    desc: 'Achieving nanometer resolution by using electron beams instead of light to image specimens',
    imgId: 'tech-img-ele-n4o5p6',
    titleId: 'tech-electron-title',
    descId: 'tech-electron-desc',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    desc: 'Creating sharp 3D images by eliminating out-of-focus light using pinhole apertures',
    imgId: 'tech-img-con-q7r8s9',
    titleId: 'tech-confocal-title',
    descId: 'tech-confocal-desc',
  },
]

const TechniquesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Technology</p>
          <h2 id="techniques-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Imaging Techniques
          </h2>
          <p id="techniques-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            The advanced microscopy methods that reveal the invisible world in stunning detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group relative rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-slate-900">
                <h3 id={tech.titleId} className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p id={tech.descId} className="text-slate-400 text-sm">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechniquesSection
