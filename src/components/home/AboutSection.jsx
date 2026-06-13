import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Award, Users, Factory, Globe } from 'lucide-react'

const stats = [
  { icon: Factory, value: '25+', label: 'Years of Engineering' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '5,000+', label: 'Machines Installed' },
  { icon: Award, value: '98%', label: 'Customer Satisfaction' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                alt="ARTITECT MACHINERY factory floor"
                data-strk-img-id="about-img-x1y2z3"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-gold text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight"
            >
              Engineering Excellence Since Day One
            </h2>
            <p
              id="about-desc"
              className="mt-5 text-charcoal/60 leading-relaxed text-base lg:text-lg"
            >
              ARTITECT MACHINERY was founded with a singular mission: to build the world&apos;s most reliable sheet metal folding machines. 
              Every double folder, metal folder, and folding machine we produce reflects decades of engineering expertise and an unwavering commitment to quality.
            </p>
            <p className="mt-4 text-charcoal/60 leading-relaxed text-base lg:text-lg">
              From our manufacturing facility in Chicago, we serve fabricators, workshops, and industrial manufacturers across the globe — 
              delivering machines that perform flawlessly for decades.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon size={22} className="mx-auto text-gold mb-2" />
                  <div className="text-2xl lg:text-3xl font-serif font-bold text-navy">{stat.value}</div>
                  <div className="text-xs text-charcoal/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}