import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, Target, Users, Globe, Award, Wrench } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every machine is built to tolerances of 0.01mm, ensuring consistent, repeatable results across thousands of cycles.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified manufacturing processes with rigorous quality checks at every stage of production.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical support team available around the clock to assist with setup, operation, and maintenance.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving customers in over 40 countries with localized support and fast delivery worldwide.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored machine configurations to meet your specific production requirements and material specifications.',
  },
  {
    icon: CheckCircle,
    title: 'Warranty & Service',
    description: 'Comprehensive warranty coverage with extended service plans and genuine spare parts availability.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: About + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              About Artitect
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Building the Future of
              <span className="text-blue-800"> Metal Fabrication</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Artitect Machinery was founded with a singular vision: to deliver sheet metal folding
              equipment that combines uncompromising precision with intuitive operation. Our machines
              are the result of decades of engineering expertise and continuous innovation.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From small workshops to large-scale manufacturing facilities, we partner with
              businesses of all sizes to optimize their metal forming processes and achieve
              production excellence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-500">Years in Industry</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-slate-900">40+</p>
                <p className="text-sm text-slate-500">Countries Served</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Machines Installed</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-slate-900">99%</p>
                <p className="text-sm text-slate-500">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
              data-strk-bg-id="about-bg-d4e5f6"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">Since 2009</p>
              <p className="text-sm text-amber-100">Trusted Worldwide</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            The Artitect Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-6 h-6 text-slate-700 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
