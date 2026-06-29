import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '60+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Crafting the Future of<br />
              <span className="text-gold">Metal Forming</span>
            </h2>
            <div className="h-1 w-16 bg-gold mb-6" />
            <p className="text-white/70 text-base leading-relaxed mb-6">
              For over two decades, ARTITECT MACHINERY has been at the forefront of metal folding technology. Our commitment to innovation, precision engineering, and customer success has made us a trusted partner for manufacturers across the globe.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we produce a comprehensive range of folding machines — including double folding machines, sheet metal folders, and advanced metal folding systems — each designed to deliver exceptional accuracy and reliability.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-extrabold text-gold">{stat.value}</div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-m4k7p2"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-3xl font-extrabold">20+</div>
              <div className="text-sm font-medium text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
