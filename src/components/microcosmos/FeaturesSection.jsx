import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'fluorescence',
    title: 'Fluorescence Microscopy',
    desc: 'Illuminating cellular structures with brilliant neon colors using fluorescent dyes and proteins',
    imgId: 'feature-fluorescence-3a7c9e',
  },
  {
    id: 'electron',
    title: 'Electron Microscopy',
    desc: 'Revealing nanoscale details of viruses, molecules, and atomic structures with electron beams',
    imgId: 'feature-electron-8b2d4f',
  },
  {
    id: 'confocal',
    title: 'Confocal Imaging',
    desc: 'Creating sharp three-dimensional images by eliminating out-of-focus light from thick specimens',
    imgId: 'feature-confocal-5e1a7c',
  },
]

const FeaturesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-warm font-medium text-sm uppercase tracking-widest mb-3">
            Technology
          </p>
          <h2 id="features-section-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            The Art of Seeing Small
          </h2>
          <p id="features-section-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
            Advanced imaging techniques that transform invisible worlds into stunning visual masterpieces
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg shadow-primary/5 border border-border-subtle">
                  <img
                    alt={feature.title}
                    data-strk-img-id={feature.imgId}
                    data-strk-img={`[feature-${feature.id}-desc] [feature-${feature.id}-title] [features-section-subtitle] [features-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 id={`feature-${feature.id}-title`} className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p id={`feature-${feature.id}-desc`} className="text-text-secondary text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
