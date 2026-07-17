import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'optical',
    titleId: 'about-optical-title',
    descId: 'about-optical-desc',
    title: 'Optical Microscopy',
    description: 'Uses visible light and lenses to magnify specimens up to 1,500x their original size.',
    imgId: 'about-optical-img-h5j2k8',
  },
  {
    id: 'electron',
    titleId: 'about-electron-title',
    descId: 'about-electron-desc',
    title: 'Electron Microscopy',
    description: 'Electron beams achieve magnifications of up to 2,000,000x, revealing nanoscale structures.',
    imgId: 'about-electron-img-b9w4m1',
  },
  {
    id: 'fluorescence',
    titleId: 'about-fluorescence-title',
    descId: 'about-fluorescence-desc',
    title: 'Fluorescence Microscopy',
    description: 'Fluorescent dyes illuminate specific molecules, creating vivid, colorful cellular portraits.',
    imgId: 'about-fluorescence-img-t3r6f7',
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-24 px-6 bg-cosmos-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cosmos-primary">
            Instruments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-cosmos-text">
            How We <span className="text-cosmos-highlight">See</span> the Invisible
          </h2>
          <div className="section-glow-line mb-6" />
          <p className="text-cosmos-muted max-w-2xl mx-auto text-lg">
            From simple lenses to billion-dollar particle accelerators, microscopy technology has evolved to reveal ever-smaller details of life.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16">
          <div className="glow-card overflow-hidden">
            <div className="img-overlay aspect-[21/9]">
              <img
                data-strk-img-id="about-microscope-hero-q7e2c4"
                data-strk-img="[about-section-subtitle] [about-section-title] microscope laboratory"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Laboratory microscope"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p id="about-section-title" className="sr-only">Microscopy Laboratory</p>
          <p id="about-section-subtitle" className="sr-only">How We See the Invisible</p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article key={feature.id} className="glow-card group">
              <div className="img-overlay aspect-[4/3]">
                <img
                  data-strk-img-id={feature.imgId}
                  data-strk-img={`[${feature.descId}] [${feature.titleId}] microscope technology`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 id={feature.titleId} className="text-lg font-bold text-cosmos-text mb-2 group-hover:text-cosmos-primary transition-colors">
                  {feature.title}
                </h3>
                <p id={feature.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
