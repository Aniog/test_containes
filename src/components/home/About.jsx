import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of metal folding machine manufacturing expertise',
  'In-house R&D team driving continuous innovation',
  'Strict ISO 9001 quality management system',
  'Comprehensive after-sales service and training',
  'Custom solutions tailored to your production needs',
  'Global distribution network across 60+ countries',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-d4f8h2"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-0" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-gold text-navy-dark p-5 rounded-lg shadow-xl z-10">
              <div className="text-3xl font-extrabold leading-tight">25+</div>
              <div className="text-xs font-semibold uppercase tracking-wider">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">About Us</span>
            </div>

            <h2
              id="about-title"
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Engineering <span className="text-gold">Precision</span> Since 2001
            </h2>

            <p
              id="about-subtitle"
              className="text-gray-400 text-base leading-relaxed mb-6"
            >
              ARTITECT MACHINERY is a leading manufacturer of metal folding machines, dedicated to delivering innovative solutions that empower manufacturers worldwide. Our state-of-the-art facility combines advanced technology with skilled craftsmanship to produce machines that set industry benchmarks.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              From our compact metal folders to heavy-duty double folding machines, every product reflects our commitment to quality, precision, and customer satisfaction. We do not just build machines — we build partnerships that drive your success.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
