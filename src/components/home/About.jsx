import React, { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  'ISO 9001:2015 Certified Manufacturing',
  'Over 25 years of industry experience',
  'Exported to 50+ countries worldwide',
  'In-house R&D and innovation center',
  'Full after-sales service and training',
  'Custom machine configurations available',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-k4m7n2"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-3xl font-extrabold">25+</div>
              <div className="text-sm font-medium mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2
              id="about-title"
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight"
            >
              Engineering Excellence Since Day One
            </h2>
            <div className="mt-4 h-1 w-16 bg-gold rounded-full" />
            <p
              id="about-subtitle"
              className="mt-6 text-slate-600 text-lg leading-relaxed"
            >
              ARTITECT MACHINERY has been at the forefront of metal folding technology
              for over two decades. Our commitment to precision engineering, innovative
              design, and customer satisfaction has made us a trusted partner for
              manufacturers around the globe.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From our state-of-the-art manufacturing facility, we produce a full range
              of double folding machines, sheet metal folders, and metal folding machines
              that meet the highest international standards. Every machine undergoes
              rigorous quality testing before it leaves our factory floor.
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-8 inline-flex items-center justify-center bg-navy hover:bg-navy-50 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
