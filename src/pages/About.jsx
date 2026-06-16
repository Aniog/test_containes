import { useRef, useEffect } from 'react'
import { Award, Users, Globe, Factory } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1995', title: 'Company Founded', description: 'ARTITECT MACHINERY was established with a vision to revolutionize metal folding technology.' },
  { year: '2003', title: 'European Expansion', description: 'Opened our first international manufacturing facility and distribution center in Germany.' },
  { year: '2010', title: 'CNC Automation', description: 'Launched our first fully CNC-controlled folding machine series, setting a new industry standard.' },
  { year: '2016', title: 'Global Reach', description: 'Expanded operations to over 40 countries with dedicated service centers on four continents.' },
  { year: '2022', title: 'Smart Manufacturing', description: 'Introduced AI-assisted bending and Industry 4.0 connectivity across our machine lineup.' },
]

const values = [
  {
    icon: Award,
    title: 'Quality Without Compromise',
    description: 'Every component, every weld, every calibration is held to exacting standards. We believe our customers deserve nothing less than perfection.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We do not just sell machines; we build lasting relationships. Our success is measured by the success of our clients production lines.',
  },
  {
    icon: Globe,
    title: 'Sustainable Innovation',
    description: 'We design machines that consume less energy, produce less waste, and last longer. Sustainability is engineering done right.',
  },
  {
    icon: Factory,
    title: 'Continuous Improvement',
    description: 'Our R&D team works tirelessly to refine designs, adopt new materials, and integrate emerging technologies into every new model.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div>
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold-500 tracking-[0.2em] uppercase mb-3 block">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
              Three Decades of Engineering Excellence
            </h1>
            <p className="text-brand-300 leading-relaxed">
              Since 1995, ARTITECT MACHINERY has been at the forefront of metal folding technology, combining traditional craftsmanship with cutting-edge innovation.
            </p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-brand-100">
                <img
                  alt="Factory floor"
                  data-strk-img-id="about-factory"
                  data-strk-img="[about-factory-title] industrial factory machinery"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-sm -z-10" />
            </div>

            <div>
              <span className="text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase mb-3 block">
                Our Story
              </span>
              <h2
                id="about-factory-title"
                className="font-serif text-3xl font-semibold text-brand-950 mb-5"
              >
                Built on Precision, Driven by Innovation
              </h2>
              <div className="space-y-4 text-brand-500 leading-relaxed">
                <p>
                  What began as a small workshop in 1995 has grown into a globally recognized manufacturer of metal folding machinery. Our founder, a former aerospace engineer, believed that industrial machines could be both powerful and precise — a philosophy that continues to guide every product we build.
                </p>
                <p>
                  Today, our state-of-the-art manufacturing facilities span three continents, employing over 400 skilled engineers, machinists, and technicians. Every machine that leaves our factory undergoes rigorous testing and quality assurance to ensure it meets our exacting standards.
                </p>
                <p>
                  We serve a diverse range of industries including automotive, aerospace, construction, HVAC, and general fabrication. Our machines are trusted by small workshops and multinational corporations alike.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase mb-3 block">
                Our Values
              </span>
              <h2 className="font-serif text-3xl font-semibold text-brand-950">
                What We Stand For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-5 p-6 rounded-sm border border-brand-100 bg-brand-50/50"
                >
                  <div className="w-12 h-12 bg-brand-900 rounded-sm flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-brand-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase mb-3 block">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl font-semibold text-brand-950">
                Key Milestones
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-200 md:-translate-x-px" />
              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="pl-12 md:pl-0">
                        <span className="text-gold-600 font-serif text-xl font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-brand-900 mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-brand-500 leading-relaxed mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full ring-4 ring-white" />

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
