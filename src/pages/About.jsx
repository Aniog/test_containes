import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Globe, Lightbulb } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every machine is calibrated to deliver consistent, accurate results within the tightest tolerances.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous R&D investment ensures our machines incorporate the latest manufacturing technology.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving customers in over 40 countries with local support and rapid spare parts delivery.',
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            About Artitect Machinery
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A legacy of precision engineering and innovation in sheet metal fabrication technology.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                <img
                  data-strk-img-id="about-factory-img-p1q2r3"
                  data-strk-img="[about-story-text] [about-story-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Artitect Machinery factory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 id="about-story-title" className="text-2xl lg:text-3xl font-bold text-navy-900 tracking-tight mb-4">
                Our Story
              </h2>
              <p id="about-story-text" className="text-slate-600 leading-relaxed mb-4">
                Founded in 1995, Artitect Machinery began with a simple mission: to build the most reliable and precise sheet metal folding machines in the industry. What started as a small workshop has grown into a globally recognized manufacturer.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Today, we design and manufacture a complete range of double folding machines, sheet metal folders, and metal folding machines that serve industries from HVAC and roofing to automotive and aerospace.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to quality engineering, customer service, and continuous innovation has earned us the trust of over 5,000 customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Whether you need a standard machine or a custom solution, our engineering team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
