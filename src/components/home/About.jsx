import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of engineering excellence',
  'Machines installed in 40+ countries',
  'ISO 9001:2015 certified manufacturing',
  'Dedicated after-sales support team',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }} ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#C8A45C' }}>
              About Us
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ color: '#0F1B2D' }}
            >
              Built on Precision, Driven by Innovation
            </h2>
            <p
              id="about-desc"
              className="text-gray-600 text-base leading-relaxed mb-8"
            >
              ARTITECT MACHINERY has been at the forefront of sheet metal folding
              technology for over two decades. We design and manufacture
              high-performance double folding machines that meet the exacting
              standards of modern fabrication workshops worldwide.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C8A45C' }} />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-sm"
              style={{ backgroundColor: '#0F1B2D' }}
            >
              Get in Touch
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                alt="ARTITECT MACHINERY factory"
                data-strk-img-id="about-img-k4m2n"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
