import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Cog, Target, Award } from 'lucide-react'

const highlights = [
  {
    icon: Cog,
    title: 'Advanced Engineering',
    desc: 'Every machine is designed with cutting-edge CAD software and precision manufacturing for flawless performance.',
  },
  {
    icon: Target,
    title: 'Uncompromising Quality',
    desc: 'Rigorous quality control at every stage ensures each folding machine meets the highest industry standards.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    desc: 'With nearly two decades in metal folding technology, we bring unmatched knowledge to every project.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
            Masters of Metal Folding Technology
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            ARTITECT MACHINERY stands at the forefront of metal folding innovation,
            delivering industrial-grade double folding machines, sheet metal folders,
            and precision folding equipment to manufacturers worldwide. Our commitment
            to quality and precision has made us a trusted partner in the industry.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-cream">
              <img
                alt="Advanced metal folding machine in operation"
                data-strk-img-id="about-machinery-a7b3d9"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">{item.title}</h3>
                    <p id={`about-desc`} className="text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}