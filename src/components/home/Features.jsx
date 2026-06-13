import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shield, Wrench, HeadphonesIcon, Truck, BarChart3, Settings } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames and premium hydraulic components ensure decades of reliable service in the toughest shop floor conditions.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description: 'Programmable back gauges and servo-driven folding beams deliver repeatable accuracy to ±0.1mm on every bend.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with quick-access panels and self-diagnostics reduces downtime and simplifies servicing.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our global service network provides remote diagnostics, spare parts, and on-site support whenever you need it.',
  },
  {
    icon: BarChart3,
    title: 'Industry 4.0 Ready',
    description: 'Integrated sensors and connectivity options for real-time production monitoring and data-driven optimization.',
  },
  {
    icon: Truck,
    title: 'Worldwide Delivery',
    description: 'We handle logistics from factory to foundation — including installation, calibration, and operator training.',
  },
]

export default function Features() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="features" className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Engineering Excellence in Every Machine
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Every ARTITECT machine combines decades of metal-forming expertise with modern engineering innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}