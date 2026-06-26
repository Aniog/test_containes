import { useEffect, useRef } from 'react'
import { Settings, Headphones, Truck, BadgeCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const benefits = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Every machine is calibrated for tight tolerances and repeatable bends, reducing waste and rework.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assured',
    description:
      'Rigorous testing and ISO-certified manufacturing ensure your equipment performs from day one.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our technical team helps with installation, training, and ongoing maintenance wherever you are.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description:
      'We deliver securely packaged machinery worldwide, with customs and logistics support included.',
  },
]

export default function WhyUsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Why ARTITECT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built for Fabricators Who Demand More
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We combine modern engineering with practical shop-floor experience.
              The result is folding machinery that is intuitive to operate, easy
              to maintain, and ready for the demands of real production.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl -z-10" />
            <img
              alt="Precision metal folding machine in a modern fabrication workshop"
              data-strk-img-id="why-us-workshop-4e5f6g"
              data-strk-img="[why-us-title] [why-us-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-slate-100">
              <p id="why-us-title" className="text-2xl font-extrabold text-slate-900">
                15+
              </p>
              <p id="why-us-subtitle" className="text-slate-600">
                Years delivering folding machinery to workshops worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
