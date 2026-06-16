import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of manufacturing expertise',
  'ISO 9001:2015 certified production facility',
  'Custom machine configurations available',
  'Comprehensive training and installation support',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-brand-amber font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mt-3 mb-6">
              Trusted by Fabricators Worldwide
            </h2>
            <p id="about-desc" className="text-slate-600 text-base leading-relaxed mb-8">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. Our machines are designed and manufactured to meet the most demanding industrial standards, delivering consistent precision across millions of cycles.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-amber mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg px-7 py-3.5 text-base transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="ARTITECT MACHINERY factory floor"
                data-strk-img-id="about-factory-img-j1k2l3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
                <p className="text-white font-semibold">Our Manufacturing Facility</p>
                <p className="text-slate-300 text-sm">State-of-the-art production line</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
