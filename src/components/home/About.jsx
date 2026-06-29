import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '3,000+', label: 'Machines Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Crafting the Future of
              <br />
              <span className="text-steel">Metal Forming</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ARTITECT MACHINERY has been at the forefront of metal folding technology for over two decades. Our commitment to innovation, precision, and reliability has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From our state-of-the-art production facility, we design and build every machine to the highest standards. Our double folding machines and sheet metal folders are engineered to deliver consistent, accurate results shift after shift, year after year.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-steel">{stat.value}</div>
                  <div className="text-muted text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-f7g8"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-steel/10 rounded-xl -z-10" />

            <div className="hidden" id="about-title">ARTITECT MACHINERY manufacturing facility</div>
            <div className="hidden" id="about-subtitle">metal folding machine production</div>
          </div>
        </div>
      </div>
    </section>
  )
}
