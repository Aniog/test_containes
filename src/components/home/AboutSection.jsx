import { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  'Over 25 years of manufacturing expertise',
  'Machines installed in 40+ countries',
  'In-house R&D and engineering team',
  'Full lifecycle support and spare parts',
]

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              About Artitect Machinery
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
            >
              Trusted by Manufacturers Worldwide
            </h2>
            <p
              id="about-desc"
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              Since 1998, Artitect Machinery has been at the forefront of sheet
              metal folding technology. Our machines combine robust engineering
              with intelligent automation to deliver solutions that grow with
              your business.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-colors text-base"
            >
              Partner With Us
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                data-strk-img-id="about-img-e7g8"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Artitect Machinery factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
