import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '80+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
]

const highlights = [
  'Industry-leading bending precision with tolerances within 0.1mm',
  'Robust construction using premium-grade materials and components',
  'Comprehensive CNC automation for reduced setup and cycle times',
  'Global service network with rapid response technical support',
  'Custom engineering solutions tailored to your production needs',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#0F1B2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#C8973E] font-semibold text-sm tracking-widest uppercase">
              About Artitect
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 tracking-tight"
            >
              Two Decades of
              <br />
              Folding Innovation
            </h2>
            <p
              id="about-desc"
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              ARTITECT MACHINERY has been at the forefront of metal folding technology since 2005. We design and manufacture premium double folding machines, sheet metal folders, and complete bending solutions for workshops and factories worldwide.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8973E] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-[#C8973E]">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Artitect Machinery workshop"
                data-strk-img-id="about-img-d4f8h1"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#C8973E] text-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
