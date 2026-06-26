import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, Award, Users, Globe } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5000+', label: 'Machines Delivered' },
  { value: '80+', label: 'Countries Served' },
  { value: '99%', label: 'Customer Satisfaction' },
]

const capabilities = [
  'Custom bending angles from 0° to 180°',
  'Material thickness up to 6mm',
  'Sheet widths from 1m to 4m',
  'Manual, pneumatic, and hydraulic options',
  'CNC-controlled precision models',
  'Full after-sales support and training',
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
              data-strk-bg-id="about-bg-v2w3x4"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2
              id="about-title"
              className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Engineering Excellence Since Day One
            </h2>
            <p
              id="about-subtitle"
              className="mt-4 text-lg text-slate-600 leading-relaxed"
            >
              Artitect Machinery has been at the forefront of sheet metal folding technology for over
              two decades. Our commitment to precision engineering and customer satisfaction has made
              us a trusted partner for manufacturers worldwide.
            </p>

            <div className="mt-8 space-y-3">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 bg-slate-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-500">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 md:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Artitect Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Premium Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Every machine undergoes rigorous quality testing before delivery, ensuring
                consistent performance and long service life.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Our dedicated team of engineers provides installation guidance, operator training,
                and ongoing technical support.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Global Reach</h3>
              <p className="text-slate-600 leading-relaxed">
                With distribution partners in over 80 countries, we deliver machines and spare
                parts wherever you need them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
