import React, { useRef, useEffect } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const revealRef = useScrollReveal()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="section-padding bg-slate-50" ref={(el) => {
      revealRef.current = el
      containerRef.current = el
    }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-on-scroll relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                data-strk-img-id="about-factory-img-9c2d7f"
                data-strk-img="[about-subtitle] [about-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand-gold -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-4 bg-brand-dark text-white p-5 shadow-xl">
              <div className="text-3xl font-extrabold text-brand-gold">25+</div>
              <div className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase reveal-on-scroll">
              About Us
            </span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-6 reveal-on-scroll delay-100">
              Building the Future of
              <br />
              Metal Fabrication
            </h2>
            <p id="about-subtitle" className="text-slate-500 text-lg leading-relaxed mb-6 reveal-on-scroll delay-200">
              ARTITECT MACHINERY has been at the forefront of metal folding technology since 1998.
              We design and manufacture double folding machines, sheet metal folders, and metal
              folding machines that serve industries from construction to aerospace.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 reveal-on-scroll delay-200">
              Every machine leaves our state-of-the-art production facility after rigorous quality
              testing. Our engineering team continuously pushes the boundaries of what is possible
              in sheet metal folding, combining proven mechanical principles with cutting-edge
              control technology.
            </p>

            {/* Key points */}
            <div className="space-y-4 reveal-on-scroll delay-300">
              {[
                { label: 'In-house R&D', detail: 'Dedicated engineering team for continuous innovation' },
                { label: 'ISO 9001 Certified', detail: 'Quality management across all manufacturing processes' },
                { label: 'Global Distribution', detail: 'Machines operating in over 40 countries worldwide' },
              ].map((point) => (
                <div key={point.label} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-brand-gold mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-dark text-sm">{point.label}</span>
                    <span className="text-slate-500 text-sm ml-2">— {point.detail}</span>
                  </div>
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
