import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of manufacturing expertise',
  'Machines installed in 40+ countries worldwide',
  'In-house R&D and quality control',
  'Custom solutions for unique requirements',
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About Artitect Machinery
            </p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
              Trusted by Fabricators Worldwide
            </h2>
            <p id="about-desc" className="text-text-secondary text-base leading-relaxed mb-8">
              Since 1998, Artitect Machinery has been at the forefront of sheet metal folding technology. Our commitment to precision engineering and customer satisfaction has made us a trusted partner for fabrication shops, manufacturers, and industrial operations across the globe.
            </p>
            <ul className="list-none p-0 m-0 space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2,000+</p>
                <p className="text-sm text-text-muted">Machines Installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="text-sm text-text-muted">Countries Served</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                alt="Artitect Machinery factory floor"
                data-strk-img-id="about-img-8h4i5j"
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
