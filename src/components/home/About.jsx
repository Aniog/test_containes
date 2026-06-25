import { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  'Over 25 years of manufacturing expertise',
  'Machines installed in 40+ countries worldwide',
  'ISO 9001:2015 certified production facility',
  'Dedicated R&D team for continuous innovation',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-brand-dark-text tracking-tight mb-6">
              Trusted by Professionals Worldwide
            </h2>
            <p id="about-desc" className="text-brand-gray text-base lg:text-lg leading-relaxed mb-8">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology
              for over two decades. We design and manufacture high-performance double folding
              machines that meet the demanding standards of modern metalworking industries.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-brand-dark-text text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark-text">25+</div>
                <div className="text-brand-gray text-xs lg:text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark-text">500+</div>
                <div className="text-brand-gray text-xs lg:text-sm mt-1">Machines Delivered</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark-text">40+</div>
                <div className="text-brand-gray text-xs lg:text-sm mt-1">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-img-k4m5n6"
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
