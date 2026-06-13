import { useEffect, useRef } from 'react'
import { Shield, Cog, Award, Headphones } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  {
    icon: Cog,
    title: 'German Engineering',
    desc: 'Our machines are designed with precision German engineering standards for unmatched durability.',
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    desc: 'ISO 9001:2024 certified manufacturing processes with rigorous quality control at every stage.',
  },
  {
    icon: Award,
    title: '25+ Years Excellence',
    desc: 'Over two decades of innovation in metal folding technology serving 40+ countries.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support, spare parts availability, and on-site service worldwide.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-dark">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
                data-strk-img-id="about-facility"
                data-strk-img="[about-title] [about-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-5 max-w-[200px] hidden sm:block">
              <div className="text-3xl font-extrabold text-brand-gold">500+</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Machines Delivered Worldwide</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-[11px] font-semibold text-brand-gold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 mt-3">
              Leaders in Metal Folding Technology
            </h2>
            <p id="about-desc" className="text-gray-500 leading-relaxed mb-8">
              ARTITECT MACHINERY has been at the forefront of industrial metal folding innovation 
              since 1998. We design and manufacture a comprehensive range of folding machines — 
              from compact sheet metal folders to heavy-duty industrial folding systems — serving 
              automotive, aerospace, construction, and HVAC industries worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
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