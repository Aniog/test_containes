import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shield, Wrench, Award, Users } from 'lucide-react'

const stats = [
  { icon: Shield, value: '25+', label: 'Years Experience' },
  { icon: Wrench, value: '500+', label: 'Machines Installed' },
  { icon: Award, value: 'ISO 9001', label: 'Certified Quality' },
  { icon: Users, value: '24/7', label: 'Technical Support' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <img
              alt="ARTITECT workshop and engineering team"
              data-strk-img-id="about-workshop-j0k1l2"
              data-strk-img={`[about-desc] [about-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="w-12 h-0.5 bg-gold" />
            <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy">
              Engineering Excellence Since 1998
            </h2>
            <p id="about-desc" className="text-text-secondary leading-relaxed text-lg">
              ARTITECT MACHINERY designs and manufactures premium sheet metal folding equipment
              for workshops and factories worldwide. Our double folding machines combine
              German engineering principles with intuitive, user-friendly operation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every machine is built in our state-of-the-art facility using the highest-grade
              materials and components. We stand behind every product with comprehensive
              warranties and dedicated after-sales support.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-serif text-2xl font-bold text-navy">{s.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}