import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="about-company-img-d7e1a2"
                data-strk-img="[about-desc] [about-title] industrial manufacturing factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Manufacturing Facility"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Overlapping accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-accent-500 text-white px-8 py-6 rounded-sm shadow-xl shadow-accent-500/20">
              <p className="font-display text-4xl font-bold">27+</p>
              <p className="text-accent-100 text-sm font-medium">Years of Engineering Excellence</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-accent-500 font-sans font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2
              id="about-title"
              className="mt-3 font-display text-4xl sm:text-5xl font-bold text-brand-950 leading-tight"
            >
              Built on Precision,<br />Driven by Innovation
            </h2>
            <p
              id="about-desc"
              className="mt-6 text-brand-600 text-lg leading-relaxed"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of metal folding technology. 
              What started as a small engineering workshop in Cleveland has grown into a globally 
              recognized manufacturer of double folding machines, sheet metal folders, and custom 
              metal fabrication solutions.
            </p>
            <p className="mt-4 text-brand-500 leading-relaxed">
              Our team of 200+ engineers and technicians works tirelessly to push the boundaries 
              of what's possible in metal forming. Every machine that leaves our facility undergoes 
              rigorous quality testing and carries our industry-leading 5-year warranty.
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { title: 'Precision', desc: 'Sub-millimeter accuracy on every fold' },
                { title: 'Reliability', desc: '99.7% uptime across our installed base' },
                { title: 'Innovation', desc: '30+ patents in metal forming technology' },
                { title: 'Support', desc: '24/7 technical support worldwide' },
              ].map((value) => (
                <div key={value.title} className="border-l-2 border-accent-500 pl-4">
                  <h4 className="font-display text-lg font-bold text-brand-950">{value.title}</h4>
                  <p className="text-brand-500 text-sm mt-1">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
