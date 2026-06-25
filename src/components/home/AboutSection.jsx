import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Over 25 years of engineering expertise',
  'Machines installed in 40+ countries',
  'In-house R&D and manufacturing',
  'Comprehensive after-sales support',
]

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-alt" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-copper font-medium text-sm tracking-widest uppercase mb-3">
              About Artitect
            </p>
            <h2 id="about-title" className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Crafting Precision Since 1998
            </h2>
            <p id="about-desc" className="text-text-medium text-base leading-relaxed mb-6">
              Artitect Machinery has been at the forefront of sheet metal folding technology 
              for over two decades. Our commitment to innovation and quality has made us a 
              trusted partner for fabricators, manufacturers, and contractors worldwide.
            </p>
            <p className="text-text-medium text-base leading-relaxed mb-8">
              Every machine we build reflects our philosophy: combine robust industrial 
              engineering with elegant, user-friendly design that empowers operators to 
              achieve exceptional results.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-copper shrink-0" />
                  <span className="text-text-dark font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="Artitect Machinery manufacturing facility"
                data-strk-img-id="about-img-4m2x8"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '40+', label: 'Countries Served' },
            { value: '5,000+', label: 'Machines Installed' },
            { value: '99.5%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-copper mb-1">
                {stat.value}
              </p>
              <p className="text-text-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
