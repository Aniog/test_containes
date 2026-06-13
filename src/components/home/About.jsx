import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '3,000+', label: 'Machines Delivered' },
  { value: '60+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-warmwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                alt="ARTITECT factory and manufacturing facility"
                data-strk-img-id="about-factory-k8m2n5"
                data-strk-img="[about-factory-desc] [about-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-white rounded-lg p-6 shadow-lg hidden md:block">
              <div className="text-3xl font-display font-bold">25+</div>
              <div className="text-sm text-white/80">Years of<br />Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-gold font-medium text-sm tracking-wider uppercase">About Us</span>
            <h2
              id="about-section-title"
              className="font-display text-3xl md:text-4xl font-semibold text-navy mt-3 mb-6"
            >
              Crafting the Future of Metal Folding
            </h2>
            <p
              id="about-factory-desc"
              className="text-charcoal/70 text-base leading-relaxed mb-6"
            >
              Founded in 1998, ARTITECT MACHINERY has grown from a small workshop into a globally recognized manufacturer of premium metal folding equipment. Our commitment to innovation, quality, and customer satisfaction drives everything we do.
            </p>
            <p className="text-charcoal/70 text-base leading-relaxed mb-8">
              Every machine that bears the ARTITECT name is the result of meticulous engineering, rigorous testing, and an unwavering dedication to precision. We don't just build machines — we craft solutions that empower our customers to achieve excellence in their craft.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-charcoal/60 text-sm mt-1">{stat.label}</div>
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
