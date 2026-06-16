import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '30+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
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
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white rounded-lg p-6 shadow-xl hidden md:block">
              <div className="text-3xl font-extrabold">25+</div>
              <div className="text-sm font-medium opacity-90">Years of<br />Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
              About ARTITECT
            </span>
            <h2
              id="about-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-navy-900 tracking-tight"
            >
              Crafting the Future of Metal Folding
            </h2>
            <p
              id="about-subtitle"
              className="mt-4 text-slate-500 text-lg leading-relaxed"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of metal folding technology. Our commitment to precision engineering and innovation has made us a trusted partner for manufacturers across the globe.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Every machine we build reflects decades of expertise in sheet metal forming. From our state-of-the-art R&D center to our rigorous quality control processes, we ensure that each product meets the highest standards of performance and reliability.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-navy-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
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
