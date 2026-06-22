import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'electron-microscopy',
    title: 'Electron Microscopy',
    desc: 'Using beams of electrons to reveal nanoscale structures with incredible resolution',
    imgId: 'tech-electron-z8a0b2',
    titleId: 'tech-electron-microscopy-title',
    descId: 'tech-electron-microscopy-desc',
  },
  {
    id: 'fluorescence',
    title: 'Fluorescence Imaging',
    desc: 'Illuminating specific molecules with fluorescent dyes to track cellular processes',
    imgId: 'tech-fluorescence-c4d6e8',
    titleId: 'tech-fluorescence-title',
    descId: 'tech-fluorescence-desc',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    desc: 'Creating sharp 3D images by eliminating out-of-focus light from thick specimens',
    imgId: 'tech-confocal-f1g3h5',
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
    <section ref={containerRef} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Imaging Techniques
          </p>
          <h2
            id="techniques-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            How We See the Unseen
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Advanced technologies that allow us to peer into the microscopic realm with stunning clarity.
          </p>
        </div>

        <div className="space-y-8">
          {techniques.map((tech, index) => (
            <div
              key={tech.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    alt={tech.title}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="inline-block px-3 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-full mb-4">
                  Technology #{index + 1}
                </span>
                <h3 id={tech.titleId} className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-slate-300 text-lg leading-relaxed">
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

export default TechniquesSection
