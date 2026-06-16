import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const highlights = [
    'Over 18 years of specialized experience in metal folding technology',
    'State-of-the-art manufacturing facility with advanced quality control',
    'Dedicated R&D team continuously improving machine performance',
    'Comprehensive training and after-sales support programs',
    'Trusted by fabricators in 50+ countries worldwide',
  ]

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-k4m8n"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-3xl font-extrabold">18+</div>
              <div className="text-sm font-semibold">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4"
            >
              Crafting the Future of Metal Folding
            </h2>
            <p
              id="about-subtitle"
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology since 2005. We combine traditional craftsmanship with cutting-edge engineering to deliver machines that set industry benchmarks for precision and reliability.
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
