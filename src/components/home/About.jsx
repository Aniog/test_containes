import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of manufacturing expertise',
  'Machines installed in 40+ countries worldwide',
  'Dedicated after-sales support and training',
  'Custom configurations available on request',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-alt" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              About Artitect Machinery
            </p>
            <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-text tracking-tight mb-6">
              Trusted by Professionals Worldwide
            </h2>
            <p id="about-desc" className="text-text-secondary text-base leading-relaxed mb-8">
              Since 1998, Artitect Machinery has been at the forefront of sheet metal folding technology. Our double folding machines and metal folders are designed and manufactured to the highest standards, serving industries from HVAC and construction to automotive and aerospace.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-accent">25+</p>
                <p className="text-text-secondary text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-accent">2000+</p>
                <p className="text-text-secondary text-sm mt-1">Machines Sold</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-accent">40+</p>
                <p className="text-text-secondary text-sm mt-1">Countries</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                alt="Artitect Machinery factory floor"
                data-strk-img-id="about-factory-img-5k2m8n"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
