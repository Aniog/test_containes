import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-d4e6f8"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-gold-400 text-navy-700 rounded-xl p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-black">20+</div>
              <div className="text-sm font-semibold mt-1">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mt-3 mb-6"
            >
              Engineering Excellence<br />
              Since 2004
            </h2>
            <p
              id="about-subtitle"
              className="text-charcoal-300 text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY has been at the forefront of metal folding technology 
              for over two decades. Our commitment to precision engineering and innovation 
              has made us a trusted partner for fabricators worldwide.
            </p>
            <p className="text-charcoal-300 leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we produce a comprehensive 
              range of double folding machines, sheet metal folders, and metal folding 
              equipment that sets industry standards for accuracy, durability, and ease of use. 
              Every machine that bears the ARTITECT name represents our unwavering dedication 
              to quality and customer success.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'ISO 9001 Certified', detail: 'Quality management' },
                { label: 'CE Compliant', detail: 'European standards' },
                { label: '60+ Countries', detail: 'Global reach' },
                { label: '24/7 Support', detail: 'Always available' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-charcoal-500 font-semibold text-sm">{item.label}</div>
                    <div className="text-charcoal-300 text-xs">{item.detail}</div>
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
