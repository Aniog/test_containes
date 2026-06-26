import { useEffect, useRef } from 'react'
import { Award, Target, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Award,
    title: 'Precision First',
    text: 'Every machine is tested to deliver sub-millimeter accuracy before it leaves our facility.',
  },
  {
    icon: Target,
    title: 'Purpose-Built',
    text: 'Our double folder machines are designed specifically for sheet metal applications, not adapted from general-purpose equipment.',
  },
  {
    icon: Users,
    title: 'Partner, Not Vendor',
    text: 'We work alongside fabrication shops to ensure each machine is configured for their exact production needs.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-surface-card">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-img-7d2e4f"
                data-strk-img="[about-desc] [about-title] metal manufacturing factory precision"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-accent-500 p-6 rounded-sm shadow-xl shadow-accent-500/20">
              <div className="font-display text-3xl font-bold text-brand-900">20+</div>
              <div className="text-brand-900/80 text-sm font-medium">Years of Expertise</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 id="about-title" className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Engineering the Future of Metal Fabrication
            </h2>
            <p id="about-desc" className="text-steel-300 text-lg leading-relaxed mb-6">
              ARTITECT MACHINERY was founded with a single mission: to build the most reliable,
              precise, and efficient sheet metal folding machines in the industry. Two decades later,
              our double folding machines are trusted by fabrication shops, HVAC manufacturers, and
              architectural metalworkers across more than 40 countries.
            </p>
            <p className="text-steel-400 leading-relaxed mb-10">
              Every metal folding machine that leaves our facility has been rigorously tested and
              calibrated. We don't just sell equipment -- we partner with our customers to ensure
              peak performance throughout the life of the machine.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-6">
              {values.map((val) => {
                const Icon = val.icon
                return (
                  <div key={val.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent-500/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-1">{val.title}</h4>
                      <p className="text-steel-400 text-sm leading-relaxed">{val.text}</p>
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
