import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    desc: 'Using fluorescent dyes and proteins to illuminate specific cellular structures with vivid colors',
    imgId: 'tech-fluor-v4w5x6',
  },
  {
    id: 'electron',
    title: 'Electron Microscopy',
    desc: 'Achieving magnifications of up to 10 million times to reveal atomic-level detail',
    imgId: 'tech-electron-y7z8a1',
  },
  {
    id: 'confocal',
    title: 'Confocal Imaging',
    desc: 'Creating sharp 3D reconstructions by scanning specimens point by point with laser light',
    imgId: 'tech-confocal-b2c3d4',
  },
  {
    id: 'darkfield',
    title: 'Dark Field Microscopy',
    desc: 'Illuminating specimens against a dark background to reveal transparent organisms in brilliant detail',
    imgId: 'tech-darkfield-e5f6g7',
  },
  {
    id: 'phase-contrast',
    title: 'Phase Contrast',
    desc: 'Converting phase shifts in light passing through transparent specimens into visible brightness changes',
    imgId: 'tech-phase-h8i9j1',
  },
  {
    id: 'sem',
    title: 'Scanning Electron Microscopy',
    desc: 'Producing detailed 3D surface images by scanning with a focused beam of electrons',
    imgId: 'tech-sem-k2l3m4',
  },
]

const ImagingTechniques = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-cosmos-deeper/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="tech-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmos-gold to-cosmos-cyan bg-clip-text text-transparent"
          >
            Imaging Techniques
          </h2>
          <p
            id="tech-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            The advanced technologies that allow us to peer into the invisible world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <article
              key={tech.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,215,64,0.1)] transition-all duration-300 hover:border-cosmos-gold/30"
            >
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[tech-${tech.id}-desc] [tech-${tech.id}-title] [tech-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`tech-${tech.id}-title`}
                  className="text-lg font-semibold text-cosmos-text mb-2"
                >
                  {tech.title}
                </h3>
                <p
                  id={`tech-${tech.id}-desc`}
                  className="text-cosmos-muted text-sm leading-relaxed"
                >
                  {tech.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImagingTechniques
