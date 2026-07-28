import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { FileText, Search, Building2, FlaskConical, TrendingUp, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    description: 'Start by filling out our inquiry form with details about the products you need, target price range, quality standards, and any certifications requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product specifications and drawings',
      'Target price and quantity',
      'Quality standards and certifications',
      'Timeline expectations',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    description: 'Our sourcing team researches our database and network to identify suppliers that match your criteria. We evaluate each supplier based on capability, reliability, pricing, and past performance.',
    details: [
      'Database search and network outreach',
      'Capability and capacity screening',
      'Price and term comparison',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    number: '03',
    icon: Building2,
    title: 'Factory Verification',
    description: 'We visit shortlisted factories in person to verify their credentials, assess production lines, review quality control processes, and evaluate overall capability. You receive a detailed report with photos.',
    details: [
      'On-site factory audit',
      'Production capacity assessment',
      'Quality management system review',
      'Business license and certification verification',
    ],
  },
  {
    number: '04',
    icon: FlaskConical,
    title: 'Sampling & Negotiation',
    description: 'We coordinate sample production from selected suppliers, negotiate pricing and payment terms, and review contracts on your behalf. Samples are inspected and shipped to you for approval.',
    details: [
      'Sample request and coordination',
      'Price negotiation',
      'Payment term discussion',
      'Contract review',
    ],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Production & Quality Control',
    description: 'Once the order is placed, we monitor production progress and conduct inspections at key milestones. Regular updates with photos keep you informed every step of the way.',
    details: [
      'Production schedule monitoring',
      'Raw material inspection',
      'During-production inspection',
      'Pre-shipment inspection',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire shipping process including cargo collection, export customs clearance, freight booking, and documentation. You receive tracking information and updates until delivery.',
    details: [
      'Cargo collection from factory',
      'Export documentation',
      'Freight booking (sea/air/rail)',
      'Delivery tracking and updates',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How It Works</h1>
            <p className="mt-4 text-lg text-slate-600">
              A structured 6-step process from requirements to delivery
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-brand-200 leading-none shrink-0">{step.number}</span>
                    <div>
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-3">
                        <step.icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h2>
                      <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    data-strk-bg-id={`process-img-${i}`}
                    data-strk-bg={`[process-title-${i}] [process-header]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                    className="bg-slate-200 rounded-lg h-64 md:h-72 bg-cover bg-center"
                    
                  />
                  <span id={`process-title-${i}`} className="hidden">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-800">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="process-header" className="text-3xl font-bold text-white tracking-tight">Start Your Sourcing Project</h2>
            <p className="mt-4 text-lg text-blue-200">
              Tell us what you need and we will guide you through the entire process.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}