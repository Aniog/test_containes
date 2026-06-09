import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Cog, Globe, Headphones, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every machine is engineered to tight tolerances, ensuring consistent, repeatable bends across thousands of cycles.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Our equipment is trusted by fabricators and manufacturers in over 40 countries across six continents.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'From installation to ongoing maintenance, our team of specialists is available to keep your production running smoothly.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We invest heavily in R&D to bring the latest automation and CNC technology to your workshop floor.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="section-dark py-20 lg:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="about-factory-9s8d7f"
              data-strk-img="[about-title] [about-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="About ARTITECT MACHINERY"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/20" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 id="about-title" className="text-white mb-6">
              Leaders in Metal Folding Technology
            </h2>
            <p id="about-desc" className="text-brand-muted leading-relaxed mb-6">
              ARTITECT MACHINERY has been at the forefront of sheet metal fabrication equipment for over three decades. We design and manufacture double folding machines, metal folders, and CNC folding systems that set the industry standard for precision and reliability.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Our commitment to quality engineering means every machine leaving our facility is built to perform under the most demanding industrial conditions. We partner with workshops, factories, and large-scale manufacturers to deliver solutions that increase productivity and reduce downtime.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '40+', label: 'Countries Served' },
                { value: '5000+', label: 'Machines Installed' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-brand-gold text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-brand-card rounded-lg p-6 border border-white/5 hover:border-brand-gold/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
