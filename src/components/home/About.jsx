import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of metal folding expertise',
  'Proprietary servo-driven bending technology',
  'Exported to 50+ countries across 6 continents',
  'Dedicated R&D team with 40+ engineers',
  'Full after-sales support and training',
  'Custom solutions for specialized applications',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-k9m1n3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden md:block">
              <span className="text-4xl font-extrabold block">25+</span>
              <span className="text-sm font-medium">Years of Excellence</span>
            </div>
          </div>

          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 id="about-title" className="text-3xl sm:text-4xl font-extrabold text-neutral-dark mt-2 tracking-tight">
              Engineering Excellence Since 1999
            </h2>
            <p id="about-desc" className="text-neutral-mid mt-4 leading-relaxed">
              ARTITECT MACHINERY is a leading manufacturer of precision metal folding equipment. From our state-of-the-art facility, we design and build double folding machines, sheet metal folders, and complete folding solutions that set industry standards for accuracy, reliability, and productivity.
            </p>
            <p className="text-neutral-mid mt-4 leading-relaxed">
              Our commitment to innovation drives us to continuously improve our machines, integrating the latest in servo technology, CNC controls, and automation to help our customers achieve more.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-neutral-mid text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 mt-8"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
