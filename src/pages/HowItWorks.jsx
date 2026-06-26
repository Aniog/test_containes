import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about the product you want to source, including specifications, target price, quantity, and timeline. We assess feasibility and propose a sourcing plan.',
    details: [
      'Product specifications and requirements',
      'Target price range and quantity',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Identification & Shortlisting',
    description: 'We search our verified supplier network and conduct new outreach to find manufacturers that match your requirements. You receive a shortlist with detailed profiles.',
    details: [
      'Search verified supplier database',
      'New supplier outreach if needed',
      'Price and capability comparison',
      'Shortlist with detailed supplier profiles',
    ],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification & Audit',
    description: 'We visit shortlisted factories to verify their capabilities, certifications, and quality systems. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit and audit',
      'Business license and certification check',
      'Production capacity verification',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample Development & Approval',
    description: 'We coordinate sample production, evaluate quality against your specifications, and arrange revisions until you are satisfied.',
    details: [
      'Sample production coordination',
      'Quality evaluation against specifications',
      'Revision management',
      'Sample shipping to your location',
    ],
  },
  {
    icon: Truck,
    number: '05',
    title: 'Production Monitoring & Inspection',
    description: 'During mass production, we monitor progress, conduct inspections at key milestones, and keep you updated with detailed reports.',
    details: [
      'Production schedule monitoring',
      'Pre-production material check',
      'During-production inspection',
      'Pre-shipment final inspection',
    ],
  },
  {
    icon: PackageCheck,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and track your shipment from the factory to your warehouse.',
    details: [
      'Freight booking and consolidation',
      'Customs documentation and compliance',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control from start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-neutral-200 hidden md:block" />
                  )}
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center relative z-10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary-500">Step {step.number}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                      <p className="text-neutral-500 leading-relaxed mb-4">{step.description}</p>
                      <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                        <h4 className="text-sm font-semibold text-neutral-700 mb-3">What this includes:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="w-4 h-4 bg-primary-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-2.5 h-2.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-neutral-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-500 mb-8">
            Share your product requirements and receive a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
