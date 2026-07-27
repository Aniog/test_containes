import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Search, ClipboardCheck, Factory, FileCheck, Truck, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about your product, specifications, target budget, quality standards, and timeline. The more detail you provide, the faster we can find the right suppliers.',
    imgId: 'howitworks-1-5a7b8c',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'We search our database and networks to identify potential suppliers. We check credentials, review capabilities, and prepare a shortlist of qualified candidates for your review.',
    imgId: 'howitworks-2-6b8c9d',
  },
  {
    icon: Factory,
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'Our team visits shortlisted factories to conduct thorough on-site audits. We verify facilities, production capacity, quality control systems, and working conditions.',
    imgId: 'howitworks-3-7c9d0e',
  },
  {
    icon: FileCheck,
    number: '04',
    title: 'Sample Production & Approval',
    description: 'We coordinate sample production with selected suppliers, evaluate samples against your specifications, and facilitate your approval before mass production begins.',
    imgId: 'howitworks-4-8d0e1f',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Production & Quality Control',
    description: 'We monitor production schedules, conduct in-process inspections, and perform final quality checks. You receive regular updates with photos and progress reports.',
    imgId: 'howitworks-5-9e1f2g',
  },
  {
    icon: HeadphonesIcon,
    number: '06',
    title: 'Shipping & Ongoing Support',
    description: 'We handle logistics, documentation, and shipping. After delivery, we remain available to address any issues and support your ongoing sourcing needs.',
    imgId: 'howitworks-6-0f2g3h',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              How It Works
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              A clear, structured process from your initial inquiry to delivered products. We guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-navy-200">{step.number}</span>
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-navy-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy-700 mb-3">{step.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <img
                      alt={step.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[step-title-${i}] [step-desc-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <h3 id={`step-title-${i}`} className="hidden">{step.title}</h3>
                  <p id={`step-desc-${i}`} className="hidden">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today for a free consultation and quote. No obligation, just practical advice.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}