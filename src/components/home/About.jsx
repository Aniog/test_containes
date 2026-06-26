import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1999', title: 'Founded', desc: 'Started with a vision to revolutionize metal fabrication equipment.' },
  { year: '2005', title: 'First Export', desc: 'Expanded internationally, shipping machines to 12 countries.' },
  { year: '2012', title: 'CNC Innovation', desc: 'Launched proprietary CNC control system for precision folding.' },
  { year: '2018', title: 'Smart Factory', desc: 'Introduced IoT-connected machines with real-time monitoring.' },
  { year: '2024', title: 'Global Leader', desc: 'Serving 45+ countries with 15,000+ machines in operation.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
            Our Story
          </span>
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl mt-3 mb-5">
            Building the Future of Metal Fabrication
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            For over 25 years, ARTITECT MACHINERY has been at the forefront of metal folding technology. Our commitment to innovation and quality has made us a trusted partner for fabricators worldwide.
          </p>
        </div>

        {/* Two Column: Image + Timeline */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden bg-light-gray">
              <img
                alt="ARTITECT factory floor"
                data-strk-img-id="about-factory-img-8d2e4f"
                data-strk-img="[about-desc] metal fabrication factory machinery production"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <p id="about-desc" className="sr-only">ARTITECT MACHINERY modern factory with precision metal folding machines in production</p>
          </div>

          {/* Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="relative pl-8 border-l-2 border-amber/20">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative mb-10 last:mb-0">
                  {/* Dot */}
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-amber rounded-full border-4 border-cream" />
                  <span className="text-amber text-sm font-bold tracking-wider">{milestone.year}</span>
                  <h4 className="text-charcoal font-semibold text-lg mt-1 mb-2">{milestone.title}</h4>
                  <p className="text-slate text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
