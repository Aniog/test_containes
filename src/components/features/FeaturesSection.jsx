import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Target, Clock, Headphones, Wrench, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Sub-millimeter accuracy in every fold, ensuring consistent results across production runs.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined manufacturing and logistics to get your equipment operational quickly.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and maintenance.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed for straightforward servicing with accessible components and clear documentation.',
  },
  {
    icon: BarChart3,
    title: 'High Productivity',
    description: 'Optimized cycle times and automated features to maximize your production output.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by manufacturers worldwide with comprehensive distribution and service network.',
  },
]

const FeaturesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
              data-strk-bg-id="about-bg-s6t7u8"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
              Why Choose Us
            </p>
            <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Built for Excellence
            </h2>
            <p id="about-subtitle" className="text-slate-600 leading-relaxed mb-10">
              With decades of engineering expertise, Artitect Machinery delivers folding solutions 
              that combine precision, durability, and innovation to meet the demands of modern manufacturing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
