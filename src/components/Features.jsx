import { useEffect, useRef } from 'react'
import { Factory, Settings, Truck, Headphones, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description:
      'Every machine is built in our state-of-the-art facility with strict quality control at every stage of production.',
  },
  {
    icon: Settings,
    title: 'Custom Engineering',
    description:
      'Need a custom specification? Our engineering team designs tailored solutions to match your exact requirements.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description:
      'We ship worldwide with professional crating and full insurance coverage for safe delivery to your facility.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description:
      'Our technical support team is available around the clock to assist with installation, training, and maintenance.',
  },
]

const values = [
  'ISO 9001:2015 Certified Manufacturing',
  'CE Compliant Machinery',
  '3-Year Global Warranty',
  'On-Site Installation & Training',
  'Spare Parts Available Within 48 Hours',
  'Over 2,500 Machines Installed Worldwide',
]

export default function Features() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 mt-3 mb-6 tracking-tight">
              Built for Industry, Trusted by Professionals
            </h2>
            <p className="text-brand-500 text-lg leading-relaxed mb-8">
              For over two decades, ARTITECT MACHINERY has been the preferred
              partner for sheet metal fabricators across the globe. Our commitment
              to precision engineering, rigorous testing, and customer success sets
              us apart in the industrial machinery market.
            </p>

            <ul className="space-y-4">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-brand-700"
                >
                  <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT MACHINERY factory floor"
                className="w-full h-auto"
                data-strk-img-id="about-factory-img"
                data-strk-img="[about-title] [about-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white rounded-xl p-6 shadow-xl hidden sm:block">
              <p className="text-3xl font-extrabold">25+</p>
              <p className="text-sm font-medium opacity-90">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-brand-50 rounded-2xl p-6 border border-brand-100 hover:border-accent-400/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <span id="about-title" className="sr-only">
        Industrial Sheet Metal Folding Machine Factory
      </span>
      <span id="about-desc" className="sr-only">
        ARTITECT MACHINERY manufacturing facility with precision CNC equipment
      </span>
    </section>
  )
}
