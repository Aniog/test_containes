import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Wrench, Clock, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'Every machine is built to exacting standards with tolerances measured in microns.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'We tailor our machines to your specific production requirements and material types.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined manufacturing ensures your equipment arrives when you need it.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified processes guarantee consistent quality in every unit.',
  },
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#0f1f33] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f33] via-[#0f1f33]/90 to-[#0f1f33]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Precision{' '}
              <span className="text-[#e8956a]">Sheet Metal</span>{' '}
              Folding Solutions
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders 
              engineered for accuracy, durability, and peak performance in industrial environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c87941] text-white rounded-lg font-semibold hover:bg-[#a05d2e] transition-colors"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#c87941]/20 rounded-2xl blur-xl" />
              <img
                alt="Industrial sheet metal folding machine"
                className="relative rounded-2xl shadow-2xl w-full"
                data-strk-img-id="hero-img-d4e5f6"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#e8956a]">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
