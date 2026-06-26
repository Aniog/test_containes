import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Over 25 years of precision engineering experience',
  '500+ machines installed across 40 countries',
  'ISO 9001:2024 certified manufacturing facilities',
  'Proprietary CNC control software developed in-house',
  'Partnerships with leading steel producers worldwide',
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-img"
                data-strk-img="[about-title] [about-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white rounded-xl p-6 shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-brand-accent">500+</div>
              <div className="text-sm text-white/70 mt-1">Machines Delivered</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-accent font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
              Over Two Decades of Metal Forming Excellence
            </h2>
            <p id="about-desc" className="text-text-secondary leading-relaxed mb-8">
              Founded in 1995, ARTITECT MACHINERY has grown from a small workshop into a global leader in metal folding technology. We combine precision German engineering with innovative design to deliver machines that set the standard for accuracy, reliability, and productivity.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-light text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}