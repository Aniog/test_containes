import { useEffect, useRef } from 'react'
import { Factory, Globe, Users, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { icon: Factory, value: '26+', label: 'Years of Experience' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '3,500+', label: 'Clients Worldwide' },
  { icon: TrendingUp, value: '12,000+', label: 'Machines Installed' },
]

const features = [
  {
    title: 'Precision Engineering',
    desc: 'Every machine is engineered to micron-level tolerances using advanced CAD/CAM systems and rigorous quality control.',
  },
  {
    title: 'German Drive Systems',
    desc: 'We partner with leading German manufacturers for servo and hydraulic drive components ensuring lasting performance.',
  },
  {
    title: 'Custom Tooling',
    desc: 'Our in-house tooling division designs and manufactures bespoke dies and punches for specialized applications.',
  },
  {
    title: 'Remote Diagnostics',
    desc: 'Built-in IoT connectivity allows our support team to diagnose and resolve issues before they impact production.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              About ARTITECT
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
              Engineering Excellence,{' '}
              <span className="text-gold">Built to Last</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              For over two decades, ARTITECT MACHINERY has been at the forefront
              of sheet metal folding technology. Our commitment to precision,
              durability, and customer support has made us a trusted partner for
              fabrication shops, automotive suppliers, and industrial manufacturers
              around the world.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              From our headquarters and manufacturing facility, we design, build,
              and test every double folding machine, sheet metal folder, and metal
              folding machine to exceed international safety and performance
              standards.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded text-base font-bold hover:bg-navy-light transition-colors"
            >
              Work With Us
            </a>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-d4e5f6"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 rounded-lg hidden sm:block">
              <p
                id="about-title"
                className="text-3xl font-extrabold tracking-tight"
              >
                26+
              </p>
              <p id="about-subtitle" className="text-sm font-semibold">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-cream rounded-lg border border-border-light"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="text-3xl font-extrabold text-navy mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            The ARTITECT Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-cream rounded-lg border border-border-light hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
