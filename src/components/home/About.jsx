import { useEffect, useRef } from 'react'
import { Users, Factory, Globe2, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { icon: Factory, value: '25+', label: 'Years of Experience' },
  { icon: Users, value: '3,000+', label: 'Machines Delivered' },
  { icon: Globe2, value: '45+', label: 'Countries Served' },
  { icon: Award, value: '99.7%', label: 'Customer Satisfaction' },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section id="about" ref={containerRef} className="section-padding bg-steel-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-factory-img-k7x2m9"
                data-strk-img="[about-desc] [about-title] industrial metalworking factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-brand-500 text-white p-6 shadow-xl max-w-[200px]">
              <p className="text-3xl font-black mb-1">Since 1998</p>
              <p className="text-brand-100 text-sm font-medium">Engineering excellence in metal fabrication</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-brand-500 text-sm font-semibold tracking-[0.25em] uppercase block mb-4">
              About Us
            </span>
            <h2 id="about-title" className="text-headline md:text-5xl text-charcoal-950 mb-5 text-balance">
              Trusted by Metalworkers Worldwide
            </h2>
            <div className="divider-gold mb-6" />
            <p id="about-desc" className="text-charcoal-600 text-base leading-relaxed mb-5">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. Founded in 1998, we have grown from a small workshop into a globally recognized manufacturer of precision folding machines.
            </p>
            <p className="text-charcoal-600 text-base leading-relaxed mb-10">
              Every machine that leaves our facility is backed by rigorous quality control, extensive testing, and a commitment to innovation that has earned us the trust of fabricators across 45 countries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-50 border border-brand-100 flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-charcoal-950 leading-none mb-1">{stat.value}</p>
                      <p className="text-charcoal-500 text-sm">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
